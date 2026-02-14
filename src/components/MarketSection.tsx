import { motion } from "framer-motion";
import { Zap, DollarSign, Clock } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Demanda Infinita",
    desc: "Toda casa, comércio ou prédio precisa de manutenção e instalação elétrica.",
  },
  {
    icon: DollarSign,
    title: "Lucro Imediato",
    desc: "Um único serviço pode pagar grande parte do investimento no curso.",
  },
  {
    icon: Clock,
    title: "Liberdade",
    desc: "Você define seus horários e seu potencial de faturamento.",
  },
];

const MarketSection = () => (
  <section className="section-dark py-20 px-4">
    <div className="mx-auto max-w-5xl text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 font-heading text-3xl font-bold md:text-4xl"
      >
        Por que ser Eletricista é o{" "}
        <span className="text-gradient">melhor negócio</span> hoje?
      </motion.h2>
      <p className="mb-14 text-lg opacity-70">Descubra por que este é o momento ideal para começar</p>

      <div className="grid gap-8 md:grid-cols-3">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 backdrop-blur-sm transition-transform hover:scale-105"
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full accent-bg">
              <b.icon className="h-8 w-8 text-accent-foreground" />
            </div>
            <h3 className="mb-3 font-heading text-xl font-bold">{b.title}</h3>
            <p className="opacity-80">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MarketSection;
