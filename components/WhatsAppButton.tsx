import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const message = encodeURIComponent("Hello Coolnest Industries, I would like to enquire about cooling pads.");

  return (
    <div className="whatsapp-float-group" aria-label="WhatsApp Contact Options">
      <a
        className="whatsapp-float"
        href={`https://wa.me/919717146404?text=${message}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp at +91 97171 46404"
      >
        <MessageCircle aria-hidden="true" />
        <span>+91 97171 46404</span>
      </a>
      <a
        className="whatsapp-float"
        href={`https://wa.me/917014586670?text=${message}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp at +91 70145 86670"
      >
        <MessageCircle aria-hidden="true" />
        <span>+91 70145 86670</span>
      </a>
    </div>
  );
}
