import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5537991916630?text=Olá";

const CTASection = () => (
  <section className="hero-bg py-24 px-4 text-center">
    <div className="mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-6 font-heading text-3xl font-bold text-primary-foreground md:text-5xl">
          Sua nova profissão <span className="text-gradient">começa aqui</span>
        </h2>
        <p className="mb-4 text-xl text-primary-foreground/80">
          Não deixe sua liberdade financeira para depois.
        </p>
        <p className="mb-10 text-lg text-primary-foreground/60">
          As vagas são limitadas para garantir atenção total na prática.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-xl cta-bg px-12 py-6 text-xl font-bold text-primary-foreground shadow-2xl transition-all hover:scale-105 hover:shadow-[0_0_50px_hsla(142,70%,42%,0.5)]"
        >
          🟢 QUERO GARANTIR MINHA VAGA E MEU KIT AGORA
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
