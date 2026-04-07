"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "EN" | "TR";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (translations: any) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("TR");

  // On mount, load from localStorage if it exists
  useEffect(() => {
    const saved = localStorage.getItem("language");
    if (saved === "EN" || saved === "TR") {
      setLanguage(saved);
    } else {
      setLanguage("TR");
    }
  }, []);

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (translations: any) => {
    if (!translations) return "";
    if (typeof translations === "string") return translations;
    
    // Check various casing for keys
    const lang = language.toLowerCase();
    const LANG = language.toUpperCase();
    
    return translations[LANG] || translations[lang] || translations["EN"] || translations["en"] || translations;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
