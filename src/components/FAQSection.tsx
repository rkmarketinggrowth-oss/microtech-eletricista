import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Preciso de experiência?", a: "Não. Ensinamos do absoluto zero." },
  { q: "O curso possui certificado?", a: "Sim. Certificado profissionalizante incluso." },
  { q: "O curso é presencial?", a: "Sim. Imersão prática presencial." },
  { q: "Onde acontece?", a: "Na unidade física da Microtech Treinamentos." },
];

const FAQSection = () => (
  <section className="bg-background py-20 px-4">
    <div className="mx-auto max-w-3xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center font-heading text-3xl font-bold text-foreground md:text-4xl"
      >
        Dúvidas Frequentes
      </motion.h2>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border bg-muted px-6">
            <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
              ✔ {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
