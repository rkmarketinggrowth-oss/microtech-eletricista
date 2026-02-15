import { motion } from "framer-motion";

const VideoSection = () => (
  <section className="bg-background py-20 px-4">
    <div className="mx-auto max-w-4xl text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl"
      >
        🎥 Veja como funciona a{" "}
        <span className="text-secondary">Imersão Microtech</span>
      </motion.h2>
      <p className="mb-10 text-muted-foreground">
        Conheça nossa estrutura, método e resultados
      </p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative aspect-video w-full overflow-hidden rounded-2xl bg-muted shadow-xl border border-border"
      >
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/1165039632?h=e5a5342576"
          className="absolute inset-0 h-full w-full"
          frameBorder="0"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowFullScreen
        />
      </motion.div>
    </div>
  </section>
);

export default VideoSection;
