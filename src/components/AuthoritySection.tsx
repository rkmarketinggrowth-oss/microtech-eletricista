import { motion } from "framer-motion";

const AuthoritySection = () => (
  <section className="accent-bg py-20 px-4">
    <div className="mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="mb-8 font-heading text-3xl font-bold text-accent-foreground md:text-4xl">
          Quem vai te guiar nessa jornada?
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="rounded-2xl bg-card p-8 shadow-lg md:p-12"
      >
        <p className="mb-6 text-lg leading-relaxed text-card-foreground/90">
          A <strong>Microtech Treinamentos</strong> nasceu da experiência de quem vive o dia a dia da elétrica há mais de <strong>25 anos</strong>.
        </p>
        <p className="mb-6 text-lg leading-relaxed text-card-foreground/90">
          Eu sou <strong>Davidson Mendonça</strong> e sei que o mercado não precisa de teóricos, mas de profissionais que saibam resolver o problema do cliente com <strong>segurança, técnica e agilidade</strong>.
        </p>
        <p className="text-lg leading-relaxed text-card-foreground/90">
          Por isso, criei uma imersão onde você <strong>aprende fazendo</strong>, direto na prática.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AuthoritySection;
