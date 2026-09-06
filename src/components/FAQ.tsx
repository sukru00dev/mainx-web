"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: t("faq1_q"),
      answer: t("faq1_a")
    },
    {
      question: t("faq2_q"),
      answer: t("faq2_a")
    },
    {
      question: t("faq3_q"),
      answer: t("faq3_a")
    },
    {
      question: t("faq4_q"),
      answer: t("faq4_a")
    },
    {
      question: t("faq5_q"),
      answer: t("faq5_a")
    }
  ];

  return (
    <section className="py-32 relative bg-background border-t border-border">
      <div className="w-full px-6 lg:px-16 2xl:px-24 mx-auto max-w-[100rem]">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/3 relative lg:sticky lg:top-32 z-10">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
              <MessageCircleQuestion className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl font-thin tracking-tight mb-4 text-foreground">
              Sıkça Sorulan <br /> <span className="font-bold">Sorular.</span>
            </h2>
            <p className="text-foreground/50 leading-relaxed">
              {t("faq_desc")}
            </p>
          </div>

          <div className="lg:w-2/3 w-full flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                    isOpen ? "bg-foreground/5 border-primary/30" : "bg-transparent border-border hover:border-foreground/20"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full px-6 py-6 flex items-center justify-between text-left"
                  >
                    <span className="font-bold text-lg text-foreground pr-8">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-foreground/60 leading-relaxed border-t border-border/50 pt-4 mt-2">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
