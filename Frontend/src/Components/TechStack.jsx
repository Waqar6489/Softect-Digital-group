import React, { useState } from 'react';
import { Layout, Server, Database, Cloud } from 'lucide-react';

// 🚀 Safe imports from react-icons
import { 
  SiReact, SiNextdotjs, SiVuedotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiPython, SiDjango, SiLaravel, SiFastapi, SiGraphql,
  SiPostgresql, SiMongodb, SiMysql, SiRedis, SiFirebase,
   SiDocker, SiKubernetes, SiVercel, SiGithubactions, SiStrapi, 
   SiContentful, SiSanity, SiBigcommerce,SiWoocommerce, SiShopify,
   SiStripe
} from 'react-icons/si';
import { FaAws, FaWordpress,FaCcStripe,FaMagento } from "react-icons/fa";
import { TbBrandWebflow } from "react-icons/tb";






// Static mapping for string fallback (In case parent component passes strings)
const iconFallbackMap = {
  'react': <SiReact className="w-full h-full" />,
  'next.js': <SiNextdotjs className="w-full h-full" />,
  'vue.js': <SiVuedotjs className="w-full h-full" />,
  'typescript': <SiTypescript className="w-full h-full" />,
  'tailwind css': <SiTailwindcss className="w-full h-full" />,
  'node.js': <SiNodedotjs className="w-full h-full" />,
  'python': <SiPython className="w-full h-full" />,
  'django': <SiDjango className="w-full h-full" />,
  'laravel': <SiLaravel className="w-full h-full" />,
  'fastapi': <SiFastapi className="w-full h-full" />,
  'graphql': <SiGraphql className="w-full h-full" />,
  'postgresql': <SiPostgresql className="w-full h-full" />,
  'mongodb': <SiMongodb className="w-full h-full" />,
  'mysql': <SiMysql className="w-full h-full" />,
  'redis': <SiRedis className="w-full h-full" />,
  'firebase': <SiFirebase className="w-full h-full" />,
  'aws': <FaAws className="w-full h-full" />,
  'docker': <SiDocker className="w-full h-full" />,
  'kubernetes': <SiKubernetes className="w-full h-full" />,
  'vercel': <SiVercel className="w-full h-full" />,
  'github actions': <SiGithubactions className="w-full h-full" />,
  'WordPress': <FaWordpress className="w-full h-full" />,
  'Webflow': <TbBrandWebflow className="w-full h-full" />,
  'Strapi': <SiStrapi className="w-full h-full" />,
  'Contentful': <SiContentful className="w-full h-full" />,
  'Sanity': <SiSanity className="w-full h-full" />,
  'Shopify': <SiShopify className="w-full h-full" />,
  'WooCommerce': <SiWoocommerce  className="w-full h-full" />,
  'Magento': <FaMagento  className="w-full h-full" />,
  'BigCommerce': <SiBigcommerce className="w-full h-full" />,
  'Stripe': <FaCcStripe className="w-full h-full" />,
};

const defaultTabs = {
  Frontend: {
    icon: <Layout className="w-4 h-4" />, color: 'from-violet-500 to-purple-600',
    tools: [
      { name: 'React', icon: <SiReact className="w-full h-full" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="w-full h-full" /> },
      { name: 'Vue.js', icon: <SiVuedotjs className="w-full h-full" /> },
      { name: 'TypeScript', icon: <SiTypescript className="w-full h-full" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-full h-full" /> }
    ]
  },
  Backend: {
    icon: <Server className="w-4 h-4" />, color: 'from-purple-600 to-indigo-600',
    tools: [
      { name: 'Node.js', icon: <SiNodedotjs className="w-full h-full" /> },
      { name: 'Python', icon: <SiPython className="w-full h-full" /> },
      { name: 'Django', icon: <SiDjango className="w-full h-full" /> },
      { name: 'Laravel', icon: <SiLaravel className="w-full h-full" /> },
      { name: 'FastAPI', icon: <SiFastapi className="w-full h-full" /> },
      { name: 'GraphQL', icon: <SiGraphql className="w-full h-full" /> }
    ]
  },
  CMS: {
    icon: <Server className="w-4 h-4" />, color: 'from-purple-600 to-indigo-600',
    tools: [
      { name: 'WordPress', icon: <FaWordpress className="w-full h-full" /> },
      { name: 'Contentful', icon: <SiContentful className="w-full h-full" /> },
      { name: 'WebFlow', icon: <TbBrandWebflow className="w-full h-full" /> },
      { name: 'Strapi', icon: <SiStrapi className="w-full h-full" /> },
      { name: 'Sanity', icon: <SiSanity className="w-full h-full" /> },
    ]
  },
  Ecommerce: {
    icon: <Server className="w-4 h-4" />, color: 'from-purple-600 to-indigo-600',
    tools: [
      { name: 'Shopify', icon: <SiShopify className="w-full h-full" /> },
      { name: 'WooCommerce', icon: <SiWoocommerce className="w-full h-full" /> },
      { name: 'Magento', icon: <FaMagento className="w-full h-full" /> },
      { name: 'BigCommerce', icon: <SiBigcommerce className="w-full h-full" /> },
      { name: 'Stripe', icon: <SiStripe className="w-full h-full" /> }
      
    ]
  },
  Database: {
    icon: <Database className="w-4 h-4" />, color: 'from-fuchsia-500 to-purple-600',
    tools: [
      { name: 'PostgreSQL', icon: <SiPostgresql className="w-full h-full" /> },
      { name: 'MongoDB', icon: <SiMongodb className="w-full h-full" /> },
      { name: 'MySQL', icon: <SiMysql className="w-full h-full" /> },
      { name: 'Redis', icon: <SiRedis className="w-full h-full" /> },
      { name: 'Firebase', icon: <SiFirebase className="w-full h-full" /> }
    ]
  },
  'Cloud & DevOps': {
    icon: <Cloud className="w-4 h-4" />, color: 'from-indigo-500 to-violet-700',
    tools: [
      { name: 'AWS', icon: <FaAws className="w-full h-full" /> },
      { name: 'Docker', icon: <SiDocker className="w-full h-full" /> },
      { name: 'Kubernetes', icon: <SiKubernetes className="w-full h-full" /> },
      { name: 'Vercel', icon: <SiVercel className="w-full h-full" /> },
      { name: 'GitHub Actions', icon: <SiGithubactions className="w-full h-full" /> }
    ]
  },
};

const TechStack = ({ tabs = defaultTabs, title = "Our Tech Stack" }) => {
  const [active, setActive] = useState(Object.keys(tabs)[0]);

  return (
    <section className="py-20 px-5 lg:px-20 bg-[#fae6fc]/30">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="text-xs font-bold text-[#a442af] uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full">Technologies</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#122a52] mt-4">
            {title.split(' ').slice(0, 2).join(' ')} <span className="text-[#a442af]">{title.split(' ').slice(2).join(' ')}</span>
          </h2>
          <div className="mx-auto mt-4 w-16 h-1 rounded-full bg-[#a442af]" />
        </div>

        {/* Tab nav */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 p-2 bg-white rounded-2xl shadow-sm border border-purple-50 reveal">
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`cursor-pointer flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                active === tab
                  ? 'bg-[#a442af] text-white shadow-md shadow-[#a442af]/30'
                  : 'text-slate-500 hover:text-[#a442af] hover:bg-purple-50'
              }`}
            >
              {tabs[tab].icon} {tab}
            </button>
          ))}
        </div>

        {/* Tool cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 reveal-stagger">
          {tabs[active]?.tools.map((tool, i) => {
            // ── LINE BY LINE DATA PARSING FIX ─────────────────────────────────
            // 1. Check if tool is a direct string or an object with .name property
            const displayName = typeof tool === 'string' ? tool : (tool?.name || 'Unknown');
            
            // 2. Safely resolve icon element from structure or fallback map
            let displayIcon = null;
            if (typeof tool === 'object' && tool?.icon) {
              displayIcon = tool.icon;
            } else {
              const lookupKey = displayName.toLowerCase();
              displayIcon = iconFallbackMap[lookupKey] || <span className="font-bold text-lg uppercase">{displayName[0]}</span>;
            }

            return (
              <div
                key={i}
                className="reveal tech-badge bg-white border border-purple-100 rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300 cursor-default group"
              >
                {/* Icon Container */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tabs[active]?.color || 'from-purple-500 to-indigo-500'} flex items-center justify-center text-white p-3 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {displayIcon}
                </div>
                {/* Name Label */}
                <span className="text-sm font-semibold text-slate-700 text-center leading-tight">
                  {displayName}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;