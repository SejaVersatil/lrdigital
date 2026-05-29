/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import OverviewSection from "./components/OverviewSection";
import BenefitsSection from "./components/BenefitsSection";
import ProcessSection from "./components/ProcessSection";
import AutomationDemoSection from "./components/AutomationDemoSection";
import ProjectModelsSection from "./components/ProjectModelsSection";
import CredibilitySection from "./components/CredibilitySection";
import FAQSection from "./components/FAQSection";
import FinalCTA from "./components/FinalCTA";
import ContactModal from "./components/ContactModal";

const LIGHT_MODE_ENABLED = false;

function getInitialThemeIsDark() {
  if (!LIGHT_MODE_ENABLED) return true;

  try {
    const savedTheme = window.localStorage.getItem("lr-digital-theme");
    if (savedTheme === "dark") return true;
    if (savedTheme === "light") return false;
  } catch {
    return false;
  }

  return false;
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(getInitialThemeIsDark);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState("Comercial Inteligente");

  useEffect(() => {
    if (!LIGHT_MODE_ENABLED && !isDarkMode) {
      setIsDarkMode(true);
      return;
    }

    try {
      window.localStorage.setItem("lr-digital-theme", isDarkMode ? "dark" : "light");
    } catch {
      // Theme still works in memory when persistence is unavailable.
    }
  }, [isDarkMode]);

  const handleToggleTheme = () => {
    if (!LIGHT_MODE_ENABLED) {
      setIsDarkMode(true);
      return;
    }

    setIsDarkMode((current) => !current);
  };

  const handleOpenModal = (tierName: string = "Comercial Inteligente") => {
    setSelectedTier(tierName);
    setIsModalOpen(true);
  };

  const handleScrollToDemo = () => {
    const demoElement = document.getElementById("demo");
    if (demoElement) {
      const headerOffset = 100;
      const elementPosition = demoElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-brand-purple selection:text-white overflow-x-hidden antialiased transition-colors duration-500 ${
      isDarkMode ? "bg-[#030305] text-[#F8FAFC]" : "bg-[#F7F8FC] text-slate-800"
    }`}>
      {/* Translucent premium background grid lines overlay */}
      <div className={`fixed inset-0 z-0 pointer-events-none opacity-[0.2] transition-colors duration-500 ${
        isDarkMode ? "noise-overlay bg-[#030305]" : "noise-overlay-light bg-[#F7F8FC]"
      }`} />
      
      {/* Floating Header Navbar */}
      <Header 
        onOpenContactModal={() => handleOpenModal()} 
        onToggleTheme={handleToggleTheme}
        isDarkMode={isDarkMode}
        canToggleTheme={LIGHT_MODE_ENABLED}
      />

      {/* Main Page Layout Sections */}
      <main className="relative z-10">
        
        {/* 1. Hero Section + 2. Trust/Credibility strip inside */}
        <HeroSection 
          onOpenContactModal={() => handleOpenModal()} 
          onScrollToDemo={handleScrollToDemo} 
          isDarkMode={isDarkMode}
        />

        {/* 3. Service Overview Solutions Section (2x2 grid with interactive mock UIs) */}
        <OverviewSection 
          onOpenContactModal={() => handleOpenModal()} 
          isDarkMode={isDarkMode}
        />

        {/* 4. Benefits Section (3x2 sleek border grid layout) */}
        <BenefitsSection 
          onOpenContactModal={() => handleOpenModal()} 
          isDarkMode={isDarkMode}
        />

        {/* 5. Implementation Process Section (connected timeline logic) */}
        <ProcessSection 
          isDarkMode={isDarkMode}
        />

        {/* 6. Interactive Automation Simulated Demo Section */}
        <AutomationDemoSection 
          onOpenContactModal={() => handleOpenModal()} 
          isDarkMode={isDarkMode}
        />

        {/* 7. Customized Project models / Offer segments */}
        <ProjectModelsSection 
          onOpenContactModal={(tierName) => handleOpenModal(tierName)} 
          isDarkMode={isDarkMode}
        />

        {/* 7.5. Credibility / Reliability Indicators */}
        <CredibilitySection 
          isDarkMode={isDarkMode}
        />

        {/* 7.8. Technical FAQ Section */}
        <FAQSection 
          isDarkMode={isDarkMode}
        />

        {/* 8. Conversion Final Section + scannable footer details */}
        <FinalCTA 
          onOpenContactModal={() => handleOpenModal()} 
          isDarkMode={isDarkMode}
        />

      </main>

      {/* Globally controlled AI Diagnostics questionnaire modal */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedTier={selectedTier}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}
