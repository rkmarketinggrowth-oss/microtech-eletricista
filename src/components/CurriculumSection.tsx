import { motion } from "framer-motion";
import { Check, MapPin, Calendar, GraduationCap } from "lucide-react";

const items = [
  "Instalações Residenciais e Prediais do Zero",
  "Manutenção de Quadros de Distribuição e Disjuntores",
  "Instalação de Padrão de Energia, Tomadas e Iluminação",
  "Leitura de Projetos Elétricos",
  "Orçamentos que Vendem",
  "Certificado Profissionalizante Incluso",
];

const highlights = [
  { icon: MapPin, text: "Curso Presencial" },
  { icon: Calendar, text: "Imersão Intensiva de 3 Dias" },
  { icon: GraduationCap, text: "Certificado Incluso" },
];

const CurriculumSection = () => (
  <section className="bg-background py-20 px-4">
    <div className="mx-auto max-w-4xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center font-heading text-3xl font-bold text-foreground md:text-4xl"
      >
        O que você vai dominar na{" "}
        <span className="text-secondary">Imersão Microtech</span>
      </motion.h2>

      <div className="mb-12 grid gap-4 md:grid-cols-2">
        {items.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-4 rounded-xl bg-muted p-5"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full cta-bg">
              <Check className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-medium text-foreground">{item}</span>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {highlights.map((h) => (
          <div key={h.text} className="flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-primary-foreground font-semibold shadow-lg">
            <h.icon className="h-5 w-5" />
            {h.text}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CurriculumSection;
