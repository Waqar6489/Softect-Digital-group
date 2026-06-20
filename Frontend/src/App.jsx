import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './Components/Headers/Header'
import { Footer } from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop'
import './index.css'

import Home from "./Components/Pages/Home/Home"
import Services from './Components/Pages/Services'
import { Solutions } from './Components/Pages/Solutions'
import { Company } from './Components/Pages/Company'
import { Works } from './Components/Pages/Works'
import { Career } from './Components/Pages/Career'
import { Contact } from './Components/Pages/Contact'
import { GetaQuote } from './Components/Pages/GetaQuote'
import { ErrorPage } from './Components/Pages/404ErrorPage'
import { PrivacyPolicy } from './Components/Pages/PrivacyPolicy'
import { ReturnPolicy } from './Components/Pages/ReturnPolicy'
import { TermAndCondition } from './Components/Pages/TermAndCondition'
import { WebDevelopment } from './Components/Pages/Services_pages/WebDevelopment'
import { GameDevelopment } from './Components/Pages/Services_pages/GameDevelopment'
import { MobileDevelopment } from './Components/Pages/Services_pages/MobileDevelopment'
import { SoftwareDevelopment } from './Components/Pages/Services_pages/SoftwareDevelopment'
import { Ecommerce } from './Components/Pages/Services_pages/Ecommerce'
import { ProductDevelopment } from './Components/Pages/Services_pages/ProductDevelopment'
import { BlockAppDevelopment } from './Components/Pages/Services_pages/BlockchainAppDevelopment'
import { CrossPlatformAppDevelopment } from './Components/Pages/Services_pages/CrossPlatformAppDevelopment'
import { EmergingAppDevelopment } from './Components/Pages/Services_pages/EmergingAppDevelopment'
import { ArtificialIntelligence } from './Components/Pages/Services_pages/ArtificialIntelligence'
import { XDRM } from './Components/Pages/Solutions_pages/XDRM'
import { HRM } from './Components/Pages/Solutions_pages/HRM'
import { Blog } from './Components/Pages/Blog'
import { BlogPost } from './Components/Pages/BlogPost'
import { BlogAdmin } from './Components/Pages/BlogAdmin'
import AutomotiveServices from './Components/Pages/Services_pages/AutomotiveServices'

const WhatsAppButton = () => (
  <a
    href="https://wa.me/923304450030"
    target="_blank"
    rel="noreferrer"
    aria-label="Chat on WhatsApp"
    style={{
      position: 'fixed',
      right: '20px',
      bottom: '28px',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '56px',
      height: '56px',
      borderRadius: '50%',
      backgroundColor: '#25D366',
      boxShadow: '0 4px 18px rgba(37,211,102,0.45)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      textDecoration: 'none',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'scale(1.12)';
      e.currentTarget.style.boxShadow = '0 6px 24px rgba(37,211,102,0.6)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = '0 4px 18px rgba(37,211,102,0.45)';
    }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="30" height="30" fill="white">
      <path d="M16 2C8.28 2 2 8.28 2 16c0 2.48.68 4.8 1.86 6.8L2 30l7.4-1.84A13.94 13.94 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.6a11.55 11.55 0 0 1-5.9-1.62l-.42-.25-4.38 1.09 1.1-4.27-.28-.44A11.56 11.56 0 0 1 4.4 16C4.4 9.6 9.6 4.4 16 4.4S27.6 9.6 27.6 16 22.4 27.6 16 27.6zm6.34-8.6c-.35-.17-2.06-1.02-2.38-1.13-.32-.12-.55-.17-.78.17-.23.35-.9 1.13-1.1 1.36-.2.23-.4.26-.75.09-.35-.17-1.48-.55-2.82-1.75-1.04-.93-1.74-2.08-1.95-2.43-.2-.35-.02-.54.15-.71.16-.16.35-.4.52-.6.17-.2.23-.35.35-.58.12-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.57-.28-.68-.57-.58-.78-.59-.2-.01-.43-.01-.66-.01-.23 0-.6.09-.91.43-.32.35-1.2 1.17-1.2 2.86s1.23 3.32 1.4 3.55c.17.23 2.42 3.7 5.87 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.06-.84 2.35-1.66.29-.82.29-1.52.2-1.66-.08-.14-.31-.23-.66-.4z"/>
    </svg>
  </a>
);

function App() {
  const { pathname } = useLocation();
  const isAdmin = pathname === '/blog-admin';

  return (
    <div className="App">
      <ScrollToTop />
      {!isAdmin && <Header />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/game-development" element={<GameDevelopment />} />
        <Route path="/services/mobile-development" element={<MobileDevelopment />} />
        <Route path="/services/software-development" element={<SoftwareDevelopment />} />
        <Route path="/services/ecommerce" element={<Ecommerce />} />
        <Route path="/services/product-development" element={<ProductDevelopment />} />
        <Route path="/services/blockchain-app-development" element={<BlockAppDevelopment />} />
        <Route path="/services/crossplatform-app-development" element={<CrossPlatformAppDevelopment />} />
        <Route path="/services/emerging-app-development" element={<EmergingAppDevelopment />} />
        <Route path="/services/artificial-intelligence" element={<ArtificialIntelligence />} />
        <Route path="/services/AutomotiveServices" element={<AutomotiveServices />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/xdrm" element={<XDRM />} />
        <Route path="/solutions/hrm" element={<HRM />} />
        <Route path="/xdrm" element={<XDRM />} />
        <Route path="/hrm" element={<HRM />} />
        <Route path="/company" element={<Company />} />
        <Route path="/works" element={<Works />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-a-quote" element={<GetaQuote />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/refund-return-policy' element={<ReturnPolicy />} />
        <Route path='/terms-and-conditions' element={<TermAndCondition />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/blog-admin" element={<BlogAdmin />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {!isAdmin && <Footer />}
      <WhatsAppButton />
    </div>
  )
}

export default App
