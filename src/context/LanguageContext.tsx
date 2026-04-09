"use client";

import React, { createContext, useContext, useState } from "react";

type Language = "TR";

interface LanguageContextType {
  language: Language;
  t: (translations: any) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language] = useState<Language>("TR");

  const t = (translations: any) => {
    if (!translations) return "";
    if (typeof translations === "string") return translations;
    
    // Always return Turkish if available, otherwise fallback to any key
    return translations["TR"] || translations["tr"] || translations["EN"] || translations["en"] || (typeof translations === 'object' ? Object.values(translations)[0] : translations);
  };

  return (
    <LanguageContext.Provider value={{ language, t }}>
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
