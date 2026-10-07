import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const message = encodeURIComponent("Hello Coolnest Industries, I would like to enquire about cooling pads.");
  return <a className="whatsapp-float" href={`https://wa.me/919717146404?text=${message}`} target="_blank" rel="noreferrer" aria-label="Chat with Coolnest Industries on WhatsApp"><MessageCircle aria-hidden="true" /><span>Chat with us</span></a>;
}
