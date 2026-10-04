/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
          dark: '#0A0F1C',
        },
        brand: {
          blue: '#2563EB',
          cyan: '#06B6D4',
        },
        surface: '#F8FAFC',
        textMain: '#1E293B',
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-up': 'fade-up 0.7s ease-out both',
        marquee: 'marquee 45s linear infinite',
        'marquee-reverse': 'marquee 45s linear infinite reverse',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        // Content is rendered twice, so shifting by half its width loops seamlessly
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  safelist: [
    // Dynamic icon/border/bg colors used in Courses & Services data arrays
    'text-green-500', 'bg-green-500/15', 'border-green-500/20', 'hover:border-green-500/50', 'from-green-500/20', 'to-green-600/5',
    'text-violet-400', 'bg-violet-500/10', 'border-violet-500/20', 'hover:border-violet-500/50', 'from-violet-500/20', 'to-violet-600/5',
    'text-sky-400', 'text-sky-500', 'bg-sky-500/15', 'border-sky-500/20', 'hover:border-sky-500/50', 'from-sky-500/20', 'to-sky-600/5',
    'text-orange-400', 'bg-orange-500/15', 'border-orange-500/20', 'hover:border-orange-500/50', 'from-orange-500/20', 'to-orange-600/5',
    'text-amber-400', 'text-amber-500', 'bg-amber-500/15', 'border-amber-500/20', 'hover:border-amber-500/50', 'from-amber-500/20', 'to-amber-600/5',
    'text-emerald-400', 'bg-emerald-500/15', 'border-emerald-500/20', 'hover:border-emerald-500/50', 'from-emerald-500/20', 'to-emerald-600/5',
    'text-pink-400', 'bg-pink-500/10', 'border-pink-500/20', 'hover:border-pink-500/50', 'from-pink-500/20', 'to-pink-600/5',
    'text-rose-400', 'bg-rose-500/15', 'border-rose-500/20', 'hover:border-rose-500/50', 'from-rose-500/20', 'to-rose-600/5',
    'text-indigo-400', 'bg-indigo-500/15', 'border-indigo-500/20', 'hover:border-indigo-500/50', 'from-indigo-500/20', 'to-indigo-600/5',
    'text-purple-400', 'bg-purple-500/15', 'border-purple-500/20', 'hover:border-purple-500/50', 'from-purple-500/20', 'to-purple-600/5',
    'text-teal-400', 'bg-teal-500/15', 'border-teal-500/20', 'hover:border-teal-500/50', 'from-teal-500/20', 'to-teal-600/5',
    'text-yellow-500', 'bg-yellow-500/15', 'border-yellow-500/20', 'hover:border-yellow-500/50', 'from-yellow-500/20', 'to-yellow-700/5',
    'text-cyan-400', 'bg-cyan-500/15', 'border-cyan-500/20', 'hover:border-cyan-500/50', 'from-cyan-500/20', 'to-cyan-600/5',
    'text-brand-blue', 'bg-brand-blue/15', 'bg-brand-blue/10', 'border-brand-blue/20', 'hover:border-brand-blue/50',
    'text-brand-cyan', 'bg-brand-cyan/15',
  ],
  plugins: [],
}
