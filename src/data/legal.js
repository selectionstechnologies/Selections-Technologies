import {
  HiOutlineDocumentText,
  HiOutlineLockClosed,
  HiOutlineReceiptRefund,
  HiOutlineGlobe,
  HiOutlineShieldCheck,
  HiOutlineAdjustments,
} from 'react-icons/hi'

// Single source for the Legal menu, footer links and "Related policies" cards
export const legalPages = [
  { to: '/terms', label: 'Terms & Conditions', desc: 'The agreement behind every project', icon: HiOutlineDocumentText },
  { to: '/privacy-policy', label: 'Privacy Policy', desc: 'How we collect, use and protect your data', icon: HiOutlineLockClosed },
  { to: '/refund-policy', label: 'Refund Policy', desc: 'Cancellations and refunds, step by step', icon: HiOutlineReceiptRefund },
  { to: '/gdpr', label: 'GDPR & Your Rights', desc: 'Data rights for customers in the UK and EU', icon: HiOutlineGlobe },
  { to: '/security', label: 'Security', desc: 'How we keep your site, logins and data safe', icon: HiOutlineShieldCheck },
  { to: '/cookie-policy', label: 'Cookie Policy', desc: 'What cookies this website uses and why', icon: HiOutlineAdjustments },
]

export const LEGAL_UPDATED = '2 October 2026'
