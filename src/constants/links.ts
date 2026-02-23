const PHONE_RAW = '375293927136';
export const EMAIL = 'vectorweb.main@gmail.com';
export const PHONE_DISPLAY = '8 (029) 392-71-36';

export const SOCIAL_LINKS = {
  email: `mailto:${EMAIL}`,
  emailFooter: `mailto:${EMAIL}`,
  telegram: 'https://t.me/byvlad01',
  whatsapp: `https://wa.me/${PHONE_RAW}`,
  viber: `viber://add?number=${PHONE_RAW}`,
  phone: `tel:+${PHONE_RAW}`,
} as const;