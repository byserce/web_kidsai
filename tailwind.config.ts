import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        // Next.js font optimizasyonu ile uyumlu olması için variable'ı ekledim
        luckiest: ['var(--font-luckiest-guy)', 'cursive'], 
        body: ['Luckiest Guy', 'cursive'],
        headline: ['Luckiest Guy', 'cursive'],
        code: ['monospace'],
      },
      colors: {
        // --- KIDS AI ÖZEL RENK PALETİ (Flutter'dan birebir alındı) ---
        kids: {
          bg: "#E0F7FA",        // Ana Arkaplan (Açık Mavi)
          primary: "#FFFF80AB", // Canlı Pembe (Klasik Mod)
          primaryShadow: "#C51162",
          secondary: "#BA68C8", // Mor (Smart Mod)
          secondaryShadow: "#7B1FA2",
          accent: "#4DD0E1",    // Turkuaz (Smart Eye)
          accentShadow: "#0097A7",
          success: "#AED581",   // Yeşil (Scavenger Hunt)
          successShadow: "#689F38",
          warning: "#FFA726",   // Turuncu (Envanter)
          warningShadow: "#E65100",
          yellow: "#FFF59D",    // Sarı (Ödül)
          yellowDark: "#FBC02D",
        },
        // -----------------------------------------------------------
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      // --- KIDS AI İÇİN ÖZEL GÖLGELER (3D Etkisi) ---
      boxShadow: {
        'kids-sm': '0 4px 0 0',
        'kids-md': '0 6px 0 0',
        'kids-lg': '0 8px 0 0',
      },
      // ----------------------------------------------
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        // --- YENİ ANİMASYONLAR ---
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        // --- YENİ ANİMASYON CLASS'LARI ---
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;