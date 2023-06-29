import { Faq } from "./Faq";

export default function Accordion() {
  const faq = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping times vary depending on the destination. Typically, it takes 3-5 business days for domestic orders and 7-10 business days for international orders.",
    },
    {
      question: "Can I return or exchange a product?",
      answer:
        "Yes, we have a hassle-free return and exchange policy. If you're not satisfied with your purchase, you can return it within 30 days of delivery for a full refund or exchange.",
    },
    {
      question: "Do you offer discounts for bulk orders?",
      answer:
        "Yes, we provide discounts for bulk orders. Please contact our sales team for more information and to discuss your specific requirements.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Absolutely! We take the security of your personal information very seriously. We employ industry-standard encryption and security measures to protect your data.",
    },
  ];

  return (
    <div>
      <div className="accordion-container">
        <h1 className="title accordion-title">Frequently Asked Questions</h1>
        {faq.map((ask, index) => (
          <Faq ask={ask} key={index} />
        ))}
      </div>
    </div>
  );
}
