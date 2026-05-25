import React from 'react'
import Header from './Components/Headers/Header'
import Home from "./Components/Pages/Home/Home";
import Services from './Components/Pages/Services'
import { Solutions } from './Components/Pages/Solutions'
import { Company } from './Components/Pages/Company'
import { Works } from './Components/Pages/Works'
import { Career } from './Components/Pages/Career'
import { Contact } from './Components/Pages/Contact';
import { GetaQuote } from './Components/Pages/GetaQuote'
import { ErrorPage } from './Components/Pages/404ErrorPage'
import { PrivacyPolicy } from './Components/Pages/PrivacyPolicy';
import { ReturnPolicy } from './Components/Pages/ReturnPolicy';
import { TermAndCondition } from './Components/Pages/TermAndCondition';
import { WebDevelopment } from './Components/Pages/Services_pages/WebDevelopment';
import './index.css'
import { Routes, Route } from 'react-router-dom'
import { Footer } from './Components/Footer';
import { GameDevelopment } from './Components/Pages/Services_pages/GameDevelopment';
import { MobileDevelopment } from './Components/Pages/Services_pages/MobileDevelopment';
import { SoftwareDevelopment } from './Components/Pages/Services_pages/SoftwareDevelopment';
import { Ecommerce } from './Components/Pages/Services_pages/Ecommerce';
import { ProductDevelopment } from './Components/Pages/Services_pages/ProductDevelopment';
import { BlockAppDevelopment } from './Components/Pages/Services_pages/BlockchainAppDevelopment';
import { CrossPlatformAppDevelopment } from './Components/Pages/Services_pages/CrossPlatformAppDevelopment';
import { EmergingAppDevelopment } from './Components/Pages/Services_pages/EmergingAppDevelopment';
import { ArtificialIntelligence } from './Components/Pages/Services_pages/ArtificialIntelligence';
import { XDRM } from './Components/Pages/Solutions_pages/XDRM';
import { HRM } from './Components/Pages/Solutions_pages/HRM';
import { Blog } from './Components/Pages/Blog';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
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
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
