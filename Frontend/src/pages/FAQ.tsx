import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the booking process?",
      answer:
        "Contact us via phone or the contact form. We'll arrange a visit to show you available rooms. Once you select a room, you need to pay a security deposit (refundable) and the first month's rent to confirm your booking.",
    },
    {
      question: "What is included in the monthly rent?",
      answer:
        "The rent includes accommodation, 3 meals daily (breakfast, lunch, dinner), high-speed Wi-Fi, housekeeping, electricity, water, and access to all common facilities like gym, study room, and recreation area.",
    },
    {
      question: "Is there a security deposit?",
      answer:
        "Yes, we require a refundable security deposit equal to one month's rent. This will be returned when you vacate, subject to room condition check.",
    },
    {
      question: "What are the meal timings?",
      answer:
        "Breakfast: 7:30 AM - 9:30 AM, Lunch: 12:30 PM - 2:30 PM, Dinner: 7:30 PM - 9:30 PM. If you miss a meal time, we try our best to arrange something for you.",
    },
    {
      question: "Can I request specific dietary preferences?",
      answer:
        "Yes! We accommodate vegetarian, non-vegetarian, and Jain dietary preferences. Please inform us during booking about any specific requirements or allergies.",
    },
    {
      question: "Is there a curfew time?",
      answer:
        "We maintain flexible timing for students. However, we request everyone to inform the security desk if returning after 11 PM for safety purposes.",
    },
    {
      question: "What security measures are in place?",
      answer:
        "24/7 CCTV surveillance, trained security personnel, biometric/card access system, visitor management system, and regular safety checks.",
    },
    {
      question: "Can parents visit?",
      answer:
        "Absolutely! Parents are welcome to visit anytime. We have a guest room available for parent stays (subject to availability and charges).",
    },
    {
      question: "What if I need to vacate before the agreed period?",
      answer:
        "You need to give one month's advance notice. The security deposit adjustment will be done as per the agreed terms in the booking contract.",
    },
    {
      question: "Is laundry service included?",
      answer:
        "Professional laundry service is available at nominal extra charges. Self-service washing machines are also available free of cost.",
    },
    {
      question: "How far is Madhuban Police from The Unique PG?",
      answer:
        "We are located within 200-300 meter from Madhuban Police Station, approximately 10-15 minutes by bike or auto.",
    },
    {
      question: "Are pets allowed?",
      answer:
        "Unfortunately, we don't allow pets in the PG to maintain hygiene and accommodate students with allergies.",
    },
    {
      question: "What happens during power cuts?",
      answer:
        "We have full power backup with generators and inverters to ensure uninterrupted electricity supply.",
    },
    {
      question: "Can I get a room change?",
      answer:
        "Room changes can be requested and will be accommodated based on availability. Please discuss with the management.",
    },
    {
      question: "Is smoking/alcohol allowed?",
      answer:
        "Smoking, alcohol, and any other substances are strictly prohibited on the premises to maintain a healthy environment for all students.",
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground">
            Got questions? We've got answers! Find everything you need to know
            about The Unique PG.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Card className="p-6 md:p-8 shadow-card mb-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        {/* Still have questions CTA */}
        <Card className="p-8 text-center shadow-card hero-gradient text-white">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-6 opacity-90">
            Don't hesitate to reach out. We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919876543210">
              <button className="px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-smooth">
                Call Us Now
              </button>
            </a>
            <a href="/contact">
              <button className="px-6 py-3 bg-white/20 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/30 transition-smooth">
                Send a Message
              </button>
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;
