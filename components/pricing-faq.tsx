"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PricingFAQ() {
  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and Apple Pay. For Enterprise plans, we also accept bank transfers and purchase orders.",
    },
    {
      question: "Can I switch plans later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new features will be available immediately, and we'll prorate your billing. If you downgrade, the changes will take effect at the end of your current billing cycle.",
    },
    {
      question: "Is there a free trial for paid plans?",
      answer:
        "Yes, we offer a 7-day free trial for our Professional plan. No credit card is required to start the trial. You'll have full access to all Professional features during the trial period.",
    },
    {
      question: "How does the money-back guarantee work?",
      answer:
        "We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied with our service for any reason, contact our support team within 14 days of your purchase, and we'll process a full refund, no questions asked.",
    },
    {
      question: "Do you offer discounts for students or non-profits?",
      answer:
        "Yes, we offer special pricing for students, educational institutions, and non-profit organizations. Please contact our sales team with proof of your status to learn more about our discount programs.",
    },
    {
      question: "What happens to my resumes if I cancel my subscription?",
      answer:
        "If you downgrade from a paid plan to the Free plan, you'll maintain access to all resumes you've created, but you'll only be able to edit one resume. The others will be read-only until you upgrade again. If you cancel your account entirely, your data will be retained for 30 days before being permanently deleted.",
    },
    {
      question: "Can I share my account with others?",
      answer:
        "Individual accounts (Free and Professional) are intended for single users only. For team usage, we recommend our Enterprise plan, which includes team management features and allows multiple users under one account.",
    },
    {
      question: "Do you offer custom enterprise solutions?",
      answer:
        "Yes, our Enterprise plan can be customized to meet your organization's specific needs. Contact our sales team to discuss custom features, volume licensing, and special requirements for your business.",
    },
  ]

  return (
    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
