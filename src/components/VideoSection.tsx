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
        <div className="flex h-full w-full items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <svg className="h-8 w-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-muted-foreground font-medium">Inserir vídeo de vendas aqui</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default VideoSection;
