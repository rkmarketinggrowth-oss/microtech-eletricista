import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5537991916630?text=Olá";

const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full cta-bg whatsapp-float transition-transform hover:scale-110"
    aria-label="WhatsApp"
  >
    <MessageCircle className="h-8 w-8 text-primary-foreground" />
  </a>
);

export default WhatsAppFloat;
