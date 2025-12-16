import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  CheckCircle2, Bot, Coins, FileText, 
  ShieldAlert, Activity, Globe, Sparkles
} from 'lucide-react';
import { Card, Badge, SectionHeader, FeatureItem } from './components/UI';
import { ArchitectureDiagram } from './components/Architecture';
import { translations } from './translations';

function App() {
  const [lang, setLang] = useState<'en' | 'zh'>('zh');
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const t = translations[lang];

  // Map icons to the arrays from translations
  const riskIcons = [Bot, ShieldAlert, FileText, Activity];
  const featureIcons = [Bot, Coins, FileText, Activity];

  return (
    <div className="bg-background text-zinc-100 min-h-screen selection:bg-blue-500/30 font-sans">
      
      {/* Progress Bar */}
      <motion.div 
        style={{ scaleX }} 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50" 
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full border-b border-white/5 bg-background/80 backdrop-blur-xl z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="font-bold text-white">N</span>
            </div>
            <span className="font-semibold tracking-tight">Nexus AI</span>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition-colors text-xs font-medium"
            >
              <Globe className="w-3.5 h-3.5" />
              {lang === 'en' ? 'CN' : 'EN'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="blue">{t.hero.badge}</Badge>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              {t.hero.titleStart} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                {t.hero.titleEnd}
              </span>
            </h1>
            <p className="mt-6 text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </header>

      {/* Problem & Goal Grid */}
      <section id="overview" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div>
              <h2 className="text-3xl font-bold mb-6">{t.overview.challengeTitle}</h2>
              <div className="space-y-6">
                {t.overview.challenges.map((challenge, i) => (
                  <FeatureItem 
                    key={i}
                    title={challenge.title} 
                    description={challenge.desc} 
                    icon={[Activity, FileText, Coins][i]} 
                  />
                ))}
              </div>
           </div>
           <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800">
              <h2 className="text-3xl font-bold mb-6">{t.overview.solutionTitle}</h2>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                {t.overview.solutionDesc.split('**').map((part, i) => 
                  i % 2 === 1 ? <strong key={i} className="text-white">{part}</strong> : part
                )}
              </p>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-zinc-800/50 rounded-xl">
                    <div className="text-3xl font-bold text-blue-400 mb-1">8 Weeks</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">{t.overview.stats.weeks}</div>
                 </div>
                 <div className="p-4 bg-zinc-800/50 rounded-xl">
                    <div className="text-3xl font-bold text-blue-400 mb-1">100%</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">{t.overview.stats.audit}</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-24 bg-zinc-900/30 border-y border-white/5 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
           <SectionHeader 
             title={t.architecture.title} 
             subtitle={t.architecture.subtitle} 
             align="center"
           />
           <ArchitectureDiagram labels={t.architecture} />
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-6 scroll-mt-20">
        <SectionHeader title={t.features.title} subtitle={t.features.subtitle} />
        
        <div className="grid md:grid-cols-2 gap-6">
           {t.features.items.map((feature, i) => {
             const Icon = featureIcons[i];
             const isCore = i === 1; // Financial Engine is core
             return (
              <Card key={i} delay={0.1 * (i + 1)} className={isCore ? "border-blue-500/30 bg-blue-900/5" : ""}>
                {feature.badge && <Badge variant="blue">{feature.badge}</Badge>}
                <div className={`w-12 h-12 ${isCore ? 'bg-blue-500/20' : 'bg-zinc-800'} rounded-xl flex items-center justify-center mb-6 ${feature.badge ? 'mt-4' : ''}`}>
                  <Icon className={`w-6 h-6 ${isCore ? 'text-blue-400' : 'text-zinc-400'}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-zinc-400 mb-4">{feature.desc}</p>
                <ul className="text-sm text-zinc-500 space-y-2">
                  {feature.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-2">
                      <CheckCircle2 className={`w-4 h-4 ${isCore ? 'text-blue-500' : 'text-green-500/50'}`}/> 
                      {bullet}
                    </li>
                  ))}
                </ul>
              </Card>
             );
           })}
        </div>
      </section>

      {/* Risks & Mitigation */}
      <section className="py-24 bg-zinc-950 px-6">
         <div className="max-w-7xl mx-auto">
            <SectionHeader title={t.risks.title} subtitle={t.risks.subtitle} />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.risks.items.map((risk, i) => {
                  const Icon = riskIcons[i];
                  return (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:bg-zinc-800/80 transition-colors"
                    >
                        <Icon className="w-8 h-8 text-zinc-500 mb-4" />
                        <h4 className="text-lg font-bold text-white mb-2">{risk.title}</h4>
                        <p className="text-sm text-zinc-400 leading-relaxed">{risk.desc}</p>
                    </motion.div>
                  );
                })}
            </div>
         </div>
      </section>

      {/* Implementation Roadmap */}
      <section id="roadmap" className="py-24 max-w-4xl mx-auto px-6 scroll-mt-20">
        <SectionHeader title={t.roadmap.title} subtitle={t.roadmap.subtitle} align="center" />
        
        <div className="relative mt-12">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800"></div>

            <div className="space-y-12">
                {t.roadmap.phases.map((phase, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                        <div className="hidden md:block flex-1"></div>
                        
                        {/* Dot */}
                        <div className="absolute left-4 md:left-1/2 -translate-x-[5px] w-2.5 h-2.5 bg-blue-500 rounded-full border-4 border-black z-10"></div>
                        
                        <div className="flex-1 pl-12 md:pl-0">
                            <div className={`bg-zinc-900 border border-zinc-800 p-6 rounded-2xl ${i % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">{phase.phase}</span>
                                    <span className="text-zinc-500 text-xs">{phase.duration}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">{phase.title}</h3>
                                <div className="space-y-1 mt-4">
                                    {phase.items.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm text-zinc-400">
                                            <div className="w-1 h-1 bg-zinc-600 rounded-full"></div>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Resources & Next Steps */}
      <section id="contact" className="py-24 bg-gradient-to-b from-zinc-900 to-black px-6">
         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
                <h2 className="text-3xl font-bold mb-8">{t.resources.title}</h2>
                <div className="space-y-6">
                    {t.resources.items.map((res, i) => (
                        <div key={i} className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 text-sm font-bold text-zinc-400">
                                {i + 1}
                            </div>
                            <div>
                                <h4 className="text-white font-medium">{res.title}</h4>
                                <p className="text-zinc-500 text-sm">{res.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 h-fit">
                <h2 className="text-2xl font-bold mb-6">{t.resources.kickoff.title}</h2>
                <div className="space-y-6 relative">
                    <div className="absolute left-3 top-2 bottom-2 w-px bg-zinc-800"></div>
                    
                    {t.resources.kickoff.steps.map((step, i) => (
                      <div key={i} className="relative pl-10">
                          <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-zinc-900 z-10 ${i === 2 ? 'bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]' : 'bg-zinc-800'}`}></div>
                          <h4 className="text-white font-medium">{step.title}</h4>
                          <p className="text-sm text-zinc-500">{step.desc}</p>
                      </div>
                    ))}
                </div>

                <div className="mt-12 pt-10 border-t border-zinc-800 text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Sparkles className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                           {t.resources.kickoff.closing.title}
                        </h3>
                        <p className="text-zinc-500 mt-2">{t.resources.kickoff.closing.sub}</p>
                    </motion.div>
                </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-900 text-center text-zinc-600 text-sm">
        <p>{t.footer.copyright}</p>
        <p className="mt-2">{t.footer.sub}</p>
      </footer>
    </div>
  );
}

export default App;