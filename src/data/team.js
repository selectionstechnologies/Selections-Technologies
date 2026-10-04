import aliraza from '../assests/teams/aliraza.webp'
import babar from '../assests/teams/babar.webp'
import ehtisham from '../assests/teams/ehtisham.webp'
import ahsan from '../assests/teams/ahsan.webp'

// Team members shown on /team. Put photos in src/assests/teams/ and import them here;
// without a photo the card shows the person's initials.
// links accepts: facebook, instagram, linkedin
//
// Example:
// { name: 'Full Name', role: 'Role', short: 'CMO', bio: 'One or two lines.', photo: img, links: { linkedin: 'https://...' } },
export const team = [
  {
    name: 'Muhammad Ahsan Khan',
    role: 'Director & Owner',
    short: 'Director',
    photo: ahsan,
    bio: 'Owns and directs Selections Technologies — setting the company’s direction and overseeing finance, budgeting and business planning as it grows.',
    links: {
      linkedin: 'https://www.linkedin.com/in/muhammadahsankhan/',
      facebook: 'https://www.facebook.com/MAK.muhammadahsan/',
      instagram: 'https://www.instagram.com/muhammad.ahsan.khan/',
    },
  },
  {
    name: 'Ali Raza',
    role: 'CEO & Founder',
    short: 'CEO',
    photo: aliraza,
    bio: 'Founded Selections Technologies in 2019 and leads the company’s vision — making sure every website, store and app we deliver is built to grow our clients’ businesses.',
    links: {
      linkedin: 'https://www.linkedin.com/in/aliraza-software-eng/',
      facebook: 'https://www.facebook.com/aliraza.software.eng/',
      instagram: 'https://www.instagram.com/aliraza.software.eng/',
    },
  },
  {
    name: 'Babar Ali',
    role: 'COO & Head of Sales',
    short: 'COO',
    photo: babar,
    bio: 'Runs day-to-day operations and leads our sales team — your first point of contact for quotes, proposals and making sure projects run smoothly.',
    links: {
      linkedin: 'https://www.linkedin.com/in/babaraliseowordpress/',
      facebook: 'https://www.facebook.com/abid.ali.abid.ali.369447',
      instagram: 'https://www.instagram.com/babar_ali__45/',
    },
  },
  {
    name: 'Ehtisham Malik',
    role: 'Chief Technology Officer (CTO)',
    short: 'CTO',
    photo: ehtisham,
    bio: 'Leads our technical team and architecture decisions — keeping every project fast, secure and built on the right technology.',
    links: {
      linkedin: 'https://www.linkedin.com/in/ehtisham-iftikhar-4b6b86309/',
      facebook: 'https://www.facebook.com/profile.php?id=61563854257411',
      instagram: 'https://www.instagram.com/selections.technologies/',
    },
  },
]
