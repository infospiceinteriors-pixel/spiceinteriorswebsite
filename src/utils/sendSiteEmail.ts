import emailjs from '@emailjs/browser';

export async function sendSiteEmail(templateParams: Record<string, string>) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_USER_ID;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS is not configured');
  }

  return emailjs.send(serviceId, templateId, templateParams, publicKey);
}
