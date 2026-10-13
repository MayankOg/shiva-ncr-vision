// Central site configuration. Values marked PLACEHOLDER must be replaced with real business details before launch.
export const site = {
  name: 'Shiva NCR Consultants',
  short: 'Shiva NCR',
  url: 'https://408walebhai-cpu.github.io/shiva-ncr-site/',
  tagline: 'One partner for technology, operations, and growth.',
  // Contact details — PLACEHOLDERS (never publish invented details)
  email: import.meta.env.VITE_CONTACT_EMAIL || '', // e.g. hello@yourdomain.com
  phone: import.meta.env.VITE_CONTACT_PHONE || '',
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '', // international format digits only, e.g. 919XXXXXXXXX
  location: 'Delhi NCR, India',
  // Enquiry form endpoint (e.g. Formspree https://formspree.io/f/xxxx). Empty = not configured.
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || '',
}
