import { motion } from "framer-motion";
import { Gift } from "lucide-react";

const BonusSection = () => (
  <section className="accent-bg py-20 px-4">
    <div className="mx-auto max-w-4xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-card shadow-lg">
          <Gift className="h-8 w-8 text-accent" />
        </div>
        <h2 className="mb-4 font-heading text-3xl font-bold text-accent-foreground md:text-4xl">
          🎁 BÔNUS EXCLUSIVO PARA ESTA TURMA
        </h2>
        <p className="mb-10 text-lg text-accent-foreground/80">
          Ao garantir sua vaga hoje, você não recebe apenas o treinamento.<br />
          Você sai equipado com o nosso <strong>Kit Profissional Microtech</strong>:
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {[
          { emoji: "👔", title: "Uniforme Oficial Microtech", desc: "Gere autoridade no primeiro atendimento" },
          { emoji: "📘", title: "Apostila Técnica Completa", desc: "Passo a passo ilustrado para consultas" },
        ].map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="rounded-2xl bg-card p-8 shadow-lg text-left"
          >
            <span className="mb-4 block text-4xl">{b.emoji}</span>
            <h3 className="mb-2 font-heading text-xl font-bold text-card-foreground">{b.title}</h3>
            <p className="text-muted-foreground">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BonusSection;
