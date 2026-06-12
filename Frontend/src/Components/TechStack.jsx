import React, { useState } from 'react';
import { Layout, Server, Database, Cloud } from 'lucide-react';
// 🚀 Imported SimpleIcon component for brand-specific tech logos
import SimpleIcon from 'simple-icons-react-component';

/**
 * Reusable TechStack component.
 * Updated: 'tools' arrays now hold objects specifying the tool's display 'name' 
 * and its exact 'slug' corresponding to the official SimpleIcons library.
 */
const defaultTabs = {
  Frontend: {
    icon: <Layout className="w-4 h-4" />, color: 'from-violet-500 to-purple-600',
    tools: [
      { name: 'React', slug: 'react' },
      { name: 'Next.js', slug: 'nextdotjs' },
      { name: 'Vue.js', slug: 'vuedotjs' },
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'Tailwind CSS', slug: 'tailwindcss' }
    ]
  },
  Backend: {
    icon: <Server className="w-4 h-4" />, color: 'from-purple-600 to-indigo-600',
    tools: [
      { name: 'Node.js', slug: 'nodedotjs' },
      { name: 'Python', slug: 'python' },
      { name: 'Django', slug: 'django' },
      { name: 'Laravel', slug: 'laravel' },
      { name: 'FastAPI', slug: 'fastapi' },
      { name: 'GraphQL', slug: 'graphql' }
    ]
  },
  Database: {
    icon: <Database className="w-4 h-4" />, color: 'from-fuchsia-500 to-purple-600',
    tools: [
      { name: 'PostgreSQL', slug: 'postgresql' },
      { name: 'MongoDB', slug: 'mongodb' },
      { name: 'MySQL', slug: 'mysql' },
      { name: 'Redis', slug: 'redis' },
      { name: 'Firebase', slug: 'firebase' }
    ]
  },
  'Cloud & DevOps': {
    icon: <Cloud className="w-4 h-4" />, color: 'from-indigo-500 to-violet-700',
    tools: [
      { name: 'AWS', slug: 'amazonaws' },
      { name: 'Docker', slug: 'docker' },
      { name: 'Kubernetes', slug: 'kubernetes' },
      { name: 'Vercel', slug: 'vercel' },
      { name: 'GitHub Actions', slug: 'githubactions' }
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
            const toolName = typeof tool === 'string' ? tool : tool.name;
            const toolSlug = typeof tool === 'object' ? tool.slug : tool.toLowerCase().replace(/[^a-z0-9]/g, '');

            return (
              <div
                key={i}
                className="reveal tech-badge bg-white border border-purple-100 rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300 cursor-default group"
              >
                {/* 🚀 FIXED LOGO CONTAINER: Renders brand SVG icon instead of alphabet */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tabs[active].color} flex items-center justify-center text-white p-2.5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {toolSlug ? (
                    <SimpleIcon name={toolSlug} fill="currentColor" className="w-full h-full object-contain" />
                  ) : (
                    <span className="font-black text-lg uppercase">{toolName[0]}</span>
                  )}
                </div>
                <span className="text-sm font-semibold text-slate-700 text-center leading-tight">
                  {toolName}
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