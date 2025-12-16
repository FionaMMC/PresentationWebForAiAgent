import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrainCircuit, Database, FileText, Calculator, Layers, ShieldCheck, X, Search, FileOutput, CheckSquare, ArrowRightCircle } from 'lucide-react';

interface ArchitectureProps {
  labels: {
    nodes: any;
    details: any;
  };
}

type AgentType = 'qa' | 'settlement' | 'sop';

export const ArchitectureDiagram: React.FC<ArchitectureProps> = ({ labels }) => {
  const { nodes, details } = labels;
  const [selectedAgent, setSelectedAgent] = useState<AgentType | null>(null);

  return (
    <div className="relative w-full py-10 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-12">
        
        {/* Top Layer: Inputs */}
        <div className="flex gap-4 md:gap-16 justify-center w-full px-2">
            <Node label={nodes.userIntent} icon={BrainCircuit} color="text-zinc-400" />
            <Node label={nodes.sopDocs} icon={FileText} color="text-zinc-400" />
            <Node label={nodes.salesData} icon={Database} color="text-zinc-400" />
        </div>

        {/* Arrow Down */}
        <div className="h-8 w-px bg-gradient-to-b from-zinc-700 to-blue-500/50"></div>

        {/* Middle Layer: LangChain Hub (The Brain) */}
        <motion.div 
           initial={{ scale: 0.9, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           viewport={{ once: true }}
           className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-80 md:w-96 p-6 bg-zinc-900 rounded-2xl border border-zinc-700 shadow-2xl flex flex-col items-center text-center">
            <div className="p-4 bg-blue-500/10 rounded-full mb-4">
               <Layers className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{nodes.hub}</h3>
            <p className="text-sm text-zinc-400">{nodes.hubDesc}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded border border-zinc-700">{nodes.intentRec}</span>
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded border border-zinc-700">{nodes.taskDispatch}</span>
            </div>
          </div>
        </motion.div>

        {/* Arrow Down Split */}
        <div className="flex justify-center w-full max-w-3xl">
            <div className="w-px h-12 bg-zinc-700 relative">
                <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[120%] h-px bg-zinc-700"></div>
                {/* Connecting lines to children */}
                <div className="absolute top-12 left-[-160px] md:left-[-250px] w-px h-8 bg-zinc-700"></div>
                <div className="absolute top-12 right-[-160px] md:right-[-250px] w-px h-8 bg-zinc-700"></div>
            </div>
        </div>

        {/* Bottom Layer: Specialized Agents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4">
            
            <AgentCard 
                title={nodes.qa} 
                icon={Database}
                desc={nodes.qaDesc}
                delay={0.1}
                onClick={() => setSelectedAgent('qa')}
            />

            <AgentCard 
                title={nodes.settlement} 
                icon={Calculator}
                desc={nodes.settlementDesc}
                isCore
                coreLabel={nodes.corePython}
                delay={0.2}
                onClick={() => setSelectedAgent('settlement')}
            />

            <AgentCard 
                title={nodes.sop} 
                icon={FileText}
                desc={nodes.sopDesc}
                delay={0.3}
                onClick={() => setSelectedAgent('sop')}
            />
        </div>

        {/* Footer: Output */}
         <div className="mt-4 flex items-center gap-4 text-sm text-zinc-500">
            <ShieldCheck className="w-4 h-4" />
            <span>{nodes.audit}</span>
         </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedAgent && (
          <DetailModal 
            type={selectedAgent} 
            data={details[selectedAgent]} 
            onClose={() => setSelectedAgent(null)} 
          />
        )}
      </AnimatePresence>

    </div>
  );
};

const Node = ({ label, icon: Icon, color }: any) => (
    <div className="flex flex-col items-center gap-2">
        <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl shadow-sm">
            <Icon className={`w-5 h-5 ${color}`} />
        </div>
        <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider text-center">{label}</span>
    </div>
);

const AgentCard = ({ title, desc, icon: Icon, isCore, coreLabel, delay, onClick }: any) => (
    <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay }}
        onClick={onClick}
        className={`relative p-6 rounded-xl border flex flex-col gap-3 cursor-pointer group hover:-translate-y-1 transition-all duration-300 ${isCore ? 'bg-zinc-800/50 border-blue-500/30 shadow-[0_0_30px_-12px_rgba(59,130,246,0.3)]' : 'bg-zinc-900/80 border-zinc-800 hover:border-zinc-600'}`}
    >
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowRightCircle className="w-5 h-5 text-zinc-500" />
        </div>
        <div className="flex items-center justify-between">
            <div className={`p-2 rounded-lg ${isCore ? 'bg-blue-500 text-white' : 'bg-zinc-800 text-zinc-400'}`}>
                <Icon className="w-5 h-5" />
            </div>
            {isCore && <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest border border-blue-500/30 px-2 py-0.5 rounded-full">{coreLabel}</span>}
        </div>
        <h4 className="font-semibold text-zinc-200">{title}</h4>
        <p className="text-sm text-zinc-400 leading-snug">{desc}</p>
    </motion.div>
);

const DetailModal = ({ type, data, onClose }: { type: AgentType, data: any, onClose: () => void }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="relative bg-zinc-900 border border-zinc-700 w-full max-w-lg rounded-2xl p-6 shadow-2xl overflow-hidden"
            >
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-zinc-800 rounded-full transition-colors">
                    <X className="w-5 h-5 text-zinc-400" />
                </button>

                {/* Header */}
                <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{data.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{data.desc}</p>
                </div>

                {/* Animation Logic Display */}
                <div className="bg-black/50 rounded-xl p-6 border border-zinc-800 mb-6 flex items-center justify-between gap-2">
                   
                    {/* Step 1 */}
                    <div className="flex flex-col items-center gap-2 text-center flex-1">
                        <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center border border-zinc-700">
                           {type === 'qa' && <Search className="w-5 h-5 text-blue-400" />}
                           {type === 'settlement' && <Database className="w-5 h-5 text-blue-400" />}
                           {type === 'sop' && <BrainCircuit className="w-5 h-5 text-blue-400" />}
                        </div>
                        <span className="text-[10px] text-zinc-500 font-medium uppercase">{data.step1}</span>
                    </div>

                    {/* Arrow 1 */}
                    <LogicArrow delay={0.2} />

                    {/* Step 2 (Center Processing) */}
                    <div className="flex flex-col items-center gap-2 text-center flex-1">
                        <motion.div 
                           animate={{ 
                               rotate: type === 'settlement' ? 360 : 0,
                               scale: [1, 1.1, 1] 
                           }}
                           transition={{ 
                               rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                               scale: { duration: 1.5, repeat: Infinity } 
                           }}
                           className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center border border-blue-500/30"
                        >
                           {type === 'qa' && <Database className="w-6 h-6 text-blue-400" />}
                           {type === 'settlement' && <Calculator className="w-6 h-6 text-blue-400" />}
                           {type === 'sop' && <FileText className="w-6 h-6 text-blue-400" />}
                        </motion.div>
                         <span className="text-[10px] text-blue-400 font-bold uppercase">{data.step2}</span>
                    </div>

                    {/* Arrow 2 */}
                    <LogicArrow delay={0.8} />

                    {/* Step 3 */}
                    <div className="flex flex-col items-center gap-2 text-center flex-1">
                        <motion.div 
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1.2, type: "spring" }}
                            className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/30"
                        >
                           {type === 'qa' && <CheckSquare className="w-5 h-5 text-green-400" />}
                           {type === 'settlement' && <FileOutput className="w-5 h-5 text-green-400" />}
                           {type === 'sop' && <CheckSquare className="w-5 h-5 text-green-400" />}
                        </motion.div>
                         <span className="text-[10px] text-zinc-500 font-medium uppercase">{data.step3}</span>
                    </div>
                </div>

                <div className="text-center">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-300 border border-zinc-700">
                        <ShieldCheck className="w-3 h-3 text-green-500" />
                        Result: {data.result || "Verified Output"}
                    </span>
                </div>

            </motion.div>
        </div>
    );
};

const LogicArrow = ({ delay }: { delay: number }) => (
    <div className="flex-1 h-px bg-zinc-800 relative overflow-hidden">
        <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, delay: delay, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent w-full"
        />
    </div>
);
