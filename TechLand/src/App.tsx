
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BlogAIFuture from "./pages/BlogAIFuture";
import BlogCloudComputing from "./pages/BlogCloudComputing";
import BlogCybersecurity from "./pages/BlogCybersecurity";
import BlogAgenticAI from "./pages/BlogAgenticAI";
import CaseStudyEcommerce from "./pages/CaseStudyEcommerce";
import CaseStudyHealthcare from "./pages/CaseStudyHealthcare";
import CaseStudyVersatileSolutions from "./pages/CaseStudyVersatileSolutions";
import CaseStudyTradeAmerica from "./pages/CaseStudyTradeAmerica";
import CaseStudyEduGenius from "./pages/CaseStudyEduGenius";
import CaseStudyTramericaa from "./pages/CaseStudyTramericaa";
import CaseStudyBarrington from "./pages/CaseStudyBarrington";
import Blogs from "./pages/Blogs";
import CaseStudies from "./pages/CaseStudies";
import WhoWeAre from "./pages/WhoWeAre";
import WhatWeDo from "./pages/WhatWeDo";
import WhoWeHelp from "./pages/WhoWeHelp";
import HowWeDeliver from "./pages/HowWeDeliver";
import Careers from "./pages/Careers";
import ReadersCorner from "./pages/ReadersCorner";
import LetsTalkBusiness from "./pages/LetsTalkBusiness";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ClientLogin from "./pages/ClientLogin";
import TalentPool from "./pages/TalentPool";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/who-we-help" element={<WhoWeHelp />} />
          <Route path="/how-we-deliver" element={<HowWeDeliver />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/readers-corner" element={<ReadersCorner />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/lets-talk-business" element={<LetsTalkBusiness />} />
          <Route path="/blog/ai-future" element={<BlogAIFuture />} />
          <Route path="/blog/cloud-computing" element={<BlogCloudComputing />} />
          <Route path="/blog/cybersecurity" element={<BlogCybersecurity />} />
          <Route path="/blog/agentic-ai" element={<BlogAgenticAI />} />
          <Route path="/case-study/ecommerce" element={<CaseStudyEcommerce />} />
          <Route path="/case-study/healthcare" element={<CaseStudyHealthcare />} />
          <Route path="/case-study/versatile-solutions" element={<CaseStudyVersatileSolutions />} />
          <Route path="/case-study/trade-america" element={<CaseStudyTradeAmerica />} />
          <Route path="/case-study/edugenius" element={<CaseStudyEduGenius />} />
          <Route path="/case-study/tramericaa" element={<CaseStudyTramericaa />} />
          <Route path="/case-study/barrington-orthopedic" element={<CaseStudyBarrington />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/client-login" element={<ClientLogin />} />
          <Route path="/talent-pool" element={<TalentPool />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
