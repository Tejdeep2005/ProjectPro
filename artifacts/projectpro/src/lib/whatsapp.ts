export const WHATSAPP_NUMBER = "919346706747";

export const createWhatsAppLink = (message?: string) => {
  if (!message) return `https://wa.me/${WHATSAPP_NUMBER}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const openWhatsApp = (message?: string) => {
  window.open(createWhatsAppLink(message), '_blank', 'noopener,noreferrer');
};