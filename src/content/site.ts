// Central site configuration. Values marked PLACEHOLDER must be replaced with real business details before launch.
export const site = {
  name: 'Shiva NCR Consultants',
  short: 'Shiva NCR',
  url: import.meta.env.VITE_SITE_URL as string,
  tagline: 'One partner for technology, operations, and growth.',
  // Contact details — PLACEHOLDERS (never publish invented details)
  email: import.meta.env.VITE_CONTACT_EMAIL || 'shivancrconsultants1@gmail.com', // e.g. hello@yourdomain.com
  phone: import.meta.env.VITE_CONTACT_PHONE || '+91 8448712108',
  contactPerson: 'Mayank Sharma',
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '918448712108', // international format digits only, e.g. 919XXXXXXXXX
  location: 'R9, Life Republic, Pune',
  // Enquiry form endpoint (e.g. Formspree https://formspree.io/f/xxxx). Empty = not configured.
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || 'https://formspree.io/f/xjygennd',
}
