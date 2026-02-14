import { motion } from "framer-motion";
import heroImg from "@/assets/hero-electrician.jpg";
import logo from "@/assets/logo-microtech.png";

const WHATSAPP_URL = "https://wa.me/5537991916630?text=Olá";

const badges = [
  "Imersão 100% Presencial",
  "Treinamento Intensivo e Prático",
  "Certificado Profissionalizante",
  "Método Direto ao Mercado",
];

const HeroSection = () => (
  <section className="relative min-h-screen hero-bg overflow-hidden">
    {/* Background image overlay */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Eletricista trabalhando" className="h-full w-full object-cover opacity-15" />
      <div className="absolute inset-0 hero-bg opacity-85" />
    </div>

    <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-20 text-center lg:flex-row lg:text-left lg:gap-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1"
      >
        <img src={logo} alt="Microtech Treinamentos" className="mx-auto mb-8 h-16 object-contain lg:mx-0" />

        <h1 className="mb-6 font-heading text-3xl font-bold leading-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-[3.2rem]">
          Saia do Zero e Fature de{" "}
          <span className="text-gradient">R$ 200 a R$ 800 por Dia</span>{" "}
          como Eletricista Residencial e Predial em Apenas{" "}
          <span className="text-gradient">3 Dias</span> de Imersão Prática
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80 lg:mx-0">
          Aprenda a profissão mais requisitada da construção civil através de um método 100% presencial e prático, focado em quem quer ser o seu próprio patrão em 2026.
        </p>

        <div className="mb-8 flex flex-wrap justify-center gap-3 lg:justify-start">
          {badges.map((b) => (
            <span key={b} className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-medium text-primary-foreground backdrop-blur-sm border border-primary-foreground/20">
              ✔ {b}
            </span>
          ))}
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-xl cta-bg px-10 py-5 text-lg font-bold text-primary-foreground shadow-2xl transition-all hover:scale-105 hover:shadow-[0_0_40px_hsla(142,70%,42%,0.4)]"
        >
          🟢 QUERO GARANTIR MINHA VAGA
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-12 flex-shrink-0 lg:mt-0"
      >
        <img
          src={heroImg}
          alt="Treinamento prático de eletricista"
          className="w-full max-w-lg rounded-2xl shadow-2xl border-4 border-primary-foreground/20"
        />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
