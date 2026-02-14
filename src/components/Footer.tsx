import logo from "@/assets/logo-microtech.png";

const Footer = () => (
  <footer className="section-dark py-12 px-4">
    <div className="mx-auto max-w-4xl text-center">
      <img src={logo} alt="Microtech Treinamentos" className="mx-auto mb-6 h-12 object-contain" />
      <p className="mb-2 font-medium opacity-90">Microtech Treinamentos</p>
      <p className="mb-1 text-sm opacity-70">
        WhatsApp:{" "}
        <a href="https://wa.me/5537991916630" className="underline hover:opacity-100">
          (37) 99191-6630
        </a>
      </p>
      <p className="text-sm opacity-70">
        Instagram:{" "}
        <a href="https://instagram.com/microtechtreinamentos" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-100">
          @microtechtreinamentos
        </a>
      </p>
      <p className="mt-8 text-xs opacity-40">
        © {new Date().getFullYear()} Microtech Treinamentos. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
