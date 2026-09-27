import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqData } from '../data/faqData';
import { translations } from '../data/translations';

export default function FaqSection({ lang }) {
  const t = translations[lang].faq;
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">RESOLVEMOS TUS DUDAS</span>
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>

        <div className="faq-accordion">
          {faqData.map((faq, idx) => (
            <div key={idx} className={`faq-item ${openIndex === idx ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFaq(idx)}>
                <span><HelpCircle size={18} className="icon-q" /> {faq.question[lang] || faq.question.es}</span>
                <ChevronDown size={20} className={`chevron ${openIndex === idx ? 'rotate' : ''}`} />
              </button>

              {openIndex === idx && (
                <div className="faq-answer">
                  <p>{faq.answer[lang] || faq.answer.es}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
