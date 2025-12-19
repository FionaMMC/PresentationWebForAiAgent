import { Bot, ShieldAlert, FileText, Activity, Coins, Database, Calculator } from 'lucide-react';

export const translations = {
  en: {
    nav: {
      overview: "Overview",
      architecture: "Architecture",
      specs: "Specs",
      roadmap: "Roadmap",
      start: "Start Project"
    },
    hero: {
      badge: "Project Proposal V1.0",
      titleStart: "Automating Cross-Border",
      titleEnd: "E-Commerce Operations",
      subtitle: "Transforming complex GmbH management into a streamlined, automated workflow. Knowledge retrievable. Processes executable. Data calculable.",
      cta: "View Architecture",
      deliveryTarget: "Target Delivery",
      deliveryDate: "Dec 10, 2025"
    },
    overview: {
      challengeTitle: "The Challenge",
      challenges: [
        {
          title: "Complex Processes",
          desc: "Registration, Tax, EORI, and SOPs for multiple GmbH entities are highly specialized and fragmented."
        },
        {
          title: "Data Fragmentation",
          desc: "Critical knowledge is scattered across different documents, chat logs, and employee heads."
        },
        {
          title: "Manual Settlement",
          desc: "Monthly GMV collection, tier-based service fees, and VAT calculations are time-consuming and error-prone."
        }
      ],
      solutionTitle: "The Solution",
      solutionDesc: "An Enterprise AI Agent System built on LangChain. We decouple the **Cognitive Logic (AI)** from the **Calculation Logic (Python)** to ensure financial accuracy while maintaining conversational flexibility.",
      stats: {
        weeks: "Estimated Delivery",
        audit: "Audit Trail"
      }
    },
    architecture: {
      title: "System Architecture",
      subtitle: "Modular design powered by LangChain and Python Deterministic Engines. Click cards for details.",
      nodes: {
        userIntent: "User Intent",
        sopDocs: "SOP Docs",
        salesData: "Sales Data",
        hub: "LangChain Hub",
        hubDesc: "Router & Orchestration Layer",
        intentRec: "Intent Rec.",
        taskDispatch: "Task Dispatch",
        qa: "Knowledge QA",
        qaDesc: "RAG Vector DB for policies & registration docs.",
        settlement: "Settlement Engine",
        settlementDesc: "Python Deterministic Logic. 3% Fees, VAT, Payouts.",
        sop: "SOP & Proposal",
        sopDesc: "Dynamic checklist generation & offer creation.",
        audit: "Audit Logs & Compliance Verified",
        corePython: "Core Python"
      },
      details: {
        qa: {
          title: "RAG Knowledge Retrieval",
          desc: "The system vectors user queries, retrieves relevant SOP chunks, and synthesizes answers with citations.",
          step1: "Query Vectorization",
          step2: "Semantic Search",
          step3: "Context Synthesis"
        },
        settlement: {
          title: "Deterministic Billing",
          desc: "Raw data is parsed by Python (Pandas), rules are applied strictly, and audit-ready PDFs are generated.",
          step1: "Data Ingestion",
          step2: "Rule Application",
          step3: "Invoice Generation"
        },
        sop: {
          title: "Dynamic Workflows",
          desc: "Identifies platform context (e.g., TikTok) and generates a real-time actionable checklist.",
          step1: "Context Analysis",
          step2: "Step Retrieval",
          step3: "Checklist Output"
        }
      }
    },
    features: {
      title: "Core Modules (V1)",
      subtitle: "Four pillars of the initial rollout.",
      items: [
        {
          title: "Knowledge Base Q&A",
          desc: "RAG-based internal assistant. Employees can query registration flows, audit times, and VAT policies.",
          bullets: ["Citations included (e.g., 'Source: OTTO Guidelines p.5')", "Multi-language support"]
        },
        {
          title: "Financial Settlement Engine",
          desc: "Hybrid AI + Python system. Solves the complex multi-shop billing pain point.",
          bullets: ["Auto-calculate 3% Commission", "VAT Deposit & Tiered Service Fees", "Generate PDF/Excel Statements"],
          badge: "Core Value"
        },
        {
          title: "Smart Proposal Agent",
          desc: "Input customer budget and platforms; Output standardized GmbH/UG proposal packages.",
          bullets: ["Automated Fee Structure", "Bi-lingual output (DE/CN)"]
        },
        {
          title: "SOP Assistant",
          desc: "Dynamic checklist generation for TikTok, Amazon, etc. based on latest policies.",
          bullets: ["Pre-submission material check", "Rejection handling strategies"]
        }
      ]
    },
    risks: {
      title: "Risk Control",
      subtitle: "Engineered for German compliance standards.",
      items: [
        {
          title: "Hallucination Control",
          desc: "LLMs perform math poorly. We use a deterministic Python engine for all calculations. The Agent only extracts parameters; code executes logic."
        },
        {
          title: "Data Privacy (GDPR)",
          desc: "PII anonymization before LLM processing. Local/Private vector DBs. Hosted on AWS Frankfurt (EU compliant nodes)."
        },
        {
          title: "Audit Compliance",
          desc: "Every calculation is logged: Input data + Rule Version + Timestamp = Traceable Invoice. Full audit trail availability."
        },
        {
          title: "Knowledge Freshness",
          desc: "SOP updates trigger auto-flagging of old vectors. System prioritizes latest timestamped documents for retrieval."
        }
      ]
    },
    roadmap: {
      title: "Implementation Plan",
      subtitle: "Agile delivery over 12 weeks.",
      phases: [
        {
          phase: "Phase 1",
          duration: "4 Weeks",
          title: "Knowledge Agent (MVP)",
          items: ["Data Cleaning & RAG Pipeline", "Internal Q&A Tool", "Structure 80% of Business Queries"]
        },
        {
          phase: "Phase 2",
          duration: "4 Weeks",
          title: "Billing Agent (Core)",
          items: ["Python Calculation Engine", "Excel/PDF Parsers & Generators", "3% Commission & VAT Logic"]
        },
        {
          phase: "Phase 3",
          duration: "4 Weeks",
          title: "Sales & SOP Agent",
          items: ["Proposal Generator", "Dynamic SOP Checklists", "Full System Integration"]
        }
      ]
    },
    resources: {
      title: "Required Resources",
      items: [
        { title: "Knowledge Base", desc: "SOPs, FAQs, Registration Docs for OTTO, Amazon, TikTok." },
        { title: "Financial Rules", desc: "Fee structures, VAT rules, 3% commission logic (Excel format)." },
        { title: "Historical Data", desc: "3-5 months of anonymized GMV reports for validation." },
        { title: "Key Personnel", desc: "1 Product Owner (Ops) & 1 Finance Expert for weekly syncs." }
      ],
      kickoff: {
        title: "Kick-off Workflow",
        steps: [
          { title: "Step 1: Deep Dive", desc: "Confirm precise formulas & boundaries." },
          { title: "Step 2: Contract & Data", desc: "Sign off & Data transfer (Phase 1)." },
          { title: "Step 3: Deployment", desc: "Environment setup & Vector DB initialization." }
        ],
        closing: {
           title: "Looking Forward to Our Cooperation",
           sub: "Thank you for watching."
        }
      }
    },
    footer: {
      copyright: "© 2025 Nexus AI Solutions. Confidential Proposal.",
      sub: "Created for GmbH Operations Automation."
    }
  },
  zh: {
    nav: {
      overview: "项目概览",
      architecture: "架构设计",
      specs: "功能规格",
      roadmap: "实施规划",
      start: "启动项目"
    },
    hero: {
      badge: "项目建议书 V1.0",
      titleStart: "跨境电商运营",
      titleEnd: "全链路自动化",
      subtitle: "构建企业级 AI Agent 系统。实现知识可调取、流程可执行、数据可计算，将复杂的 GmbH 管理转化为自动化工作流。",
      cta: "查看架构设计",
      deliveryTarget: "预计交付日期",
      deliveryDate: "2025年12月10日"
    },
    overview: {
      challengeTitle: "当前挑战",
      challenges: [
        {
          title: "流程繁杂",
          desc: "涉及多家 GmbH 实体的公司注册、税务申请及 EORI 办理流程高度专业化且碎片化。"
        },
        {
          title: "信息碎片化",
          desc: "关键的 SOP、平台政策更新及审核规则散落在不同文档、聊天记录与员工经验中。"
        },
        {
          title: "人工结算耗时",
          desc: "每月需人工收集多平台 GMV、计算复杂的阶梯服务费、提成及 VAT 押金，易出错。"
        }
      ],
      solutionTitle: "解决方案",
      solutionDesc: "基于 LangChain 的企业级 Agent 系统。我们将 **业务逻辑 (AI)** 与 **计算逻辑 (Python)** 分离，在确保财务数据绝对准确的同时，提供灵活的交互体验。",
      stats: {
        weeks: "预计交付工期",
        audit: "全链路审计"
      }
    },
    architecture: {
      title: "系统架构设计",
      subtitle: "基于 LangChain 的模块化设计与 Python 确定性计算引擎。点击卡片查看详情。",
      nodes: {
        userIntent: "用户意图",
        sopDocs: "SOP 文档",
        salesData: "销售数据",
        hub: "LangChain 中枢",
        hubDesc: "路由与编排层 (Router)",
        intentRec: "意图识别",
        taskDispatch: "任务分发",
        qa: "知识问答 QA",
        qaDesc: "基于 RAG 向量库处理政策与注册资料",
        settlement: "财务结算引擎",
        settlementDesc: "Python 确定性计算。3% 佣金, VAT, 账单生成。",
        sop: "SOP 与报价",
        sopDesc: "动态清单生成 (Checklist) 与方案创建。",
        audit: "审计日志与合规性验证",
        corePython: "核心 Python"
      },
      details: {
        qa: {
          title: "RAG 知识检索流程",
          desc: "系统将用户查询向量化，在数据库中检索相关 SOP 片段，并综合引用来源生成回答。",
          step1: "查询向量化",
          step2: "语义检索",
          step3: "上下文合成"
        },
        settlement: {
          title: "确定性结算逻辑",
          desc: "原始数据由 Python (Pandas) 解析，严格执行费率规则，最终生成可审计的 PDF 账单。",
          step1: "数据清洗",
          step2: "规则执行",
          step3: "账单生成"
        },
        sop: {
          title: "动态工作流生成",
          desc: "识别平台语境（如 TikTok），基于最新政策实时生成可执行的操作清单。",
          step1: "语境分析",
          step2: "步骤检索",
          step3: "清单输出"
        }
      }
    },
    features: {
      title: "核心功能 (V1)",
      subtitle: "MVP 版本的四大核心模块",
      items: [
        {
          title: "企业知识库问答 (QA)",
          desc: "基于 RAG 的内部智能助手。员工可查询注册流程、审核时效及税务政策。",
          bullets: ["附带信息来源引用 (如: '根据 OTTO 审核指南第5页')", "支持中德双语解释"]
        },
        {
          title: "财务自动结算系统",
          desc: "AI + Python 混合架构。彻底解决多店铺复杂计费痛点。",
          bullets: ["自动计算 3% GMV 提成", "自动处理 VAT 押金及阶梯费率", "生成 PDF/Excel 结算单"],
          badge: "核心价值"
        },
        {
          title: "智能报价生成",
          desc: "输入客户背景与平台意向，系统自动生成标准化的 GmbH/UG 报价方案。",
          bullets: ["自动计算一次性费用与周期服务费", "支持中德双语方案文档"]
        },
        {
          title: "SOP 流程助手",
          desc: "针对 TikTok、Amazon 等平台，动态生成开店步骤清单。",
          bullets: ["前置材料清单检查", "常见驳回原因及应对策略"]
        }
      ]
    },
    risks: {
      title: "风险控制与缓解",
      subtitle: "严格遵循德国市场的数据合规与财务严谨性要求。",
      items: [
        {
          title: "幻觉风险控制",
          desc: "LLM 不擅长数学。我们采用 Python 确定性计算引擎。Agent 仅负责提取参数，所有计算强制通过代码执行。"
        },
        {
          title: "数据隐私 (GDPR)",
          desc: "PII 敏感数据脱敏处理。支持私有化/本地化部署向量库。使用符合欧盟标准的云节点 (AWS Frankfurt)。"
        },
        {
          title: "审计合规性",
          desc: "全链路日志记录：输入数据 + 费率规则版本 + 时间戳 = 可追溯账单。确保财务结算有据可依。"
        },
        {
          title: "知识时效性管理",
          desc: "建立文档更新机制。上传新版 SOP 时，系统自动标记旧版失效，优先检索最新时间戳文档。"
        }
      ]
    },
    roadmap: {
      title: "实施阶段规划",
      subtitle: "敏捷开发模式，总工期预计 12 周。",
      phases: [
        {
          phase: "阶段一",
          duration: "4 周",
          title: "基础设施与知识中台 (MVP)",
          items: ["数据清洗与 RAG Pipeline 搭建", "内部 Q&A 工具开发", "覆盖 80% 常见业务问题"]
        },
        {
          phase: "阶段二",
          duration: "4 周",
          title: "财务结算引擎 (核心交付)",
          items: ["Python 计费逻辑开发", "Excel 解析与 PDF 生成器", "3% 提成与 VAT 算法实现"]
        },
        {
          phase: "阶段三",
          duration: "4 周",
          title: "方案生成与流程集成",
          items: ["报价 Agent 开发", "动态 SOP 流程助手优化", "系统集成与验收交付"]
        }
      ]
    },
    resources: {
      title: "所需核心资源",
      items: [
        { title: "知识库资料", desc: "OTTO, Amazon, TikTok 等平台的 SOP 文档、FAQ 及注册资料清单。" },
        { title: "财务结算规则", desc: "完整的收费方案、3% 提成规则、VAT 押金细则 (Excel/文字)。" },
        { title: "历史数据样本", desc: "3-5 个店铺的历史结算表 (脱敏) 及原始 GMV 报告，用于验证。" },
        { title: "关键接口人", desc: "1 位业务负责人 (PO) 及 1 位财务专家，参与每周例会。" }
      ],
      kickoff: {
        title: "项目启动流程",
        steps: [
          { title: "Step 1: 需求确认", desc: "回顾 V1 方案，确认费用公式与边界。" },
          { title: "Step 2: 签约与资料", desc: "签署合同并提供第一阶段资料。" },
          { title: "Step 3: 环境部署", desc: "开发环境搭建与向量数据库初始化。" }
        ],
        closing: {
           title: "期待与您的合作",
           sub: "感谢您的观看。"
        }
      }
    },
    footer: {
      copyright: "© 2025 Nexus AI Solutions. 保密方案。",
      sub: "为跨境电商运营自动化而生。"
    }
  }
};
