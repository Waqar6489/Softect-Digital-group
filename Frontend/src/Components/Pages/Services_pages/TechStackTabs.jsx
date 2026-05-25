import React, { useState } from 'react';
import { Layout, Server, Database, ShoppingCart, Cloud } from 'lucide-react';

const TechStackTabs = () => {
  // Line 9 (where your error is) must be inside the function
  const [activeTab, setActiveTab] = useState('Frontend');

  const stackData = {
    Frontend: {
      icon: <Layout className="w-5 h-5" />,
      tools: ['React', 'Next.js', 'Vue.js'],
      color: 'from-violet-500 to-purple-600'
    },
    Backend: {
      icon: <Server className="w-5 h-5" />,
      tools: ['Node.js', 'Laravel', 'Django'],
      color: 'from-purple-600 to-indigo-600'
    },
    CMS: {
      icon: <Database className="w-5 h-5" />,
      tools: ['WordPress', 'Webflow', 'Headless CMS'],
      color: 'from-fuchsia-500 to-purple-600'
    },
    eCommerce: {
      icon: <ShoppingCart className="w-5 h-5" />,
      tools: ['Shopify', 'WooCommerce', 'Magento'],
      color: 'from-violet-600 to-fuchsia-600'
    },
    'Cloud & DevOps': {
      icon: <Cloud className="w-5 h-5" />,
      tools: ['AWS', 'Firebase', 'Vercel'],
      color: 'from-indigo-500 to-violet-700'
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl text-[#122a52] font-bold mb-8">Our <span className='text-[#a442af]'>Tech</span> Stack</h2>
        
        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 p-2 bg-slate-100 rounded-2xl ">
          {Object.keys(stackData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab ? 'bg-white text-[#a442af] shadow-md' : 'text-slate-500'
              }`}
            >
              {stackData[tab].icon} {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stackData[activeTab].tools.map((tool) => (
            <div key={tool} className="p-6 rounded-2xl border border-slate-100 bg-slate-50">
              <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stackData[activeTab].color} flex items-center justify-center text-white font-bold`}>
                {tool[0]}
              </div>
              <span className="font-semibold text-slate-700">{tool}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackTabs;