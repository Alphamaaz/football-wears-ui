import React, { useState } from "react";
import "../styles/faq.css";

const faqData = [
  {
    question: "What sizes are available in your football wear?",
    answer:
      "We offer sizes from Small to XXL. Each product page includes a detailed size chart for accurate selection.",
  },
  {
    question: "Are your jerseys suitable for match play?",
    answer:
      "Yes, our football jerseys are made from high-performance breathable fabric, perfect for training and matches.",
  },
  {
    question: "Can I personalize my jersey with a name and number?",
    answer:
      "Absolutely! We offer customization options on selected items. Look for the 'Customize' option on the product page.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping typically takes 3–5 business days. You’ll receive tracking details once your order ships.",
  },
  {
    question: "What is your return/exchange policy?",
    answer:
      "You can return or exchange unworn items within 7 days of delivery. Customized items are non-returnable unless defective.",
  },
];

const FAQ:React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const toggleFAQ = (index:number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span className="toggle-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            <div
              className={`faq-answer ${activeIndex === index ? "open" : ""}`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
