import { motion } from "framer-motion";
import certificado from "@/assets/certificado.jpeg";

const SocialProofSection = () => (
  <section className="section-dark py-20 px-4">
    <div className="mx-auto max-w-5xl text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 font-heading text-3xl font-bold md:text-4xl"
      >
        📸 Quem faz, <span className="text-gradient">aprova</span>
      </motion.h2>
      <p className="mb-12 text-lg opacity-70">
        Centenas de alunos já iniciaram na área através da Microtech Treinamentos.
      </p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mx-auto max-w-md"
      >
        <img
          src={certificado}
          alt="Certificado Microtech Treinamentos"
          className="w-full rounded-2xl shadow-2xl border-4 border-primary-foreground/20"
        />
        <p className="mt-4 text-sm opacity-60">Certificado Profissionalizante emitido pela Microtech</p>
      </motion.div>
    </div>
  </section>
);

export default SocialProofSection;
