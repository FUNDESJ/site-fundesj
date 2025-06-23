import { FaWhatsapp } from "react-icons/fa";
import "./whatsapp.css";

const WhatsAppButton = () => {
  const phone = "5548996792332"; // Seu número com DDI
  const message = "Olá! Gostaria de mais informações.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

   return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
        textDecoration: "none"
      }}
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppButton;
