import {
  BellIcon,
  BrainIcon,
  CalendarIcon,
  ClockIcon,
  CloudIcon,
  UsersIcon,
} from 'lucide-react'

export const BLUR_FADE_DELAY = 0.15

export const siteConfig = {
  name: 'Vibe UI',
  description:
    'A modern, responsive, and accessible UI library for your next project.',
  cta: 'Get Started',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  keywords: [
    'UI Components',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Shadcn UI',
    'Radix UI',
  ],
  links: {
    email: 'support@vibe-ui.com',
    twitter: 'https://twitter.com/vibe_ui',
    discord: 'https://discord.gg/vibe-ui',
    github: 'https://github.com/vibe-ui-design/vibe-ui',
  },
  features: [
    {
      name: 'Beautiful Components',
      description:
        'A comprehensive set of pre-built, customizable UI components.',
      icon: <BrainIcon className="h-6 w-6" />,
    },
    {
      name: 'Motion Effects',
      description:
        'Smooth animations and transitions for enhanced user experience.',
      icon: <ClockIcon className="h-6 w-6" />,
    },
    {
      name: 'Accessibility First',
      description:
        'ARIA compliant components that work for everyone, out of the box.',
      icon: <CalendarIcon className="h-6 w-6" />,
    },
    {
      name: 'Modern Stack',
      description: 'Built with React, TypeScript, and Tailwind CSS.',
      icon: <CloudIcon className="h-6 w-6" />,
    },
    {
      name: 'Developer Experience',
      description: 'Intuitive APIs with excellent TypeScript support.',
      icon: <UsersIcon className="h-6 w-6" />,
    },
    {
      name: 'Theme Support',
      description: 'Easy customization with CSS variables and design tokens.',
      icon: <BellIcon className="h-6 w-6" />,
    },
  ],
  featureHighlight: [
    {
      title: 'Beautiful Components',
      description:
        'A comprehensive set of pre-built, customizable UI components that look great out of the box.',
      imageSrc: '/Device-2.png',
      direction: 'rtl' as const,
    },
    {
      title: 'Motion Effects',
      description:
        'Add life to your interfaces with smooth animations and transitions.',
      imageSrc: '/Device-3.png',
      direction: 'ltr' as const,
    },
    {
      title: 'Developer Experience',
      description:
        'Built with TypeScript and modern best practices for a great development experience.',
      imageSrc: '/Device-4.png',
      direction: 'rtl' as const,
    },
  ],
  bento: [
    {
      title: 'Beautiful Components',
      content:
        'A comprehensive set of pre-built UI components that are accessible, customizable, and beautiful out of the box.',
      imageSrc: '/Device-1.png',
      imageAlt: 'UI Components illustration',
      fullWidth: true,
    },
    {
      title: 'Motion Effects',
      content:
        'Add smooth animations and transitions to your interfaces with our built-in motion library.',
      imageSrc: '/Device-2.png',
      imageAlt: 'Motion effects illustration',
      fullWidth: false,
    },
    {
      title: 'Developer Experience',
      content:
        'Built with TypeScript and modern best practices, offering an excellent developer experience.',
      imageSrc: '/Device-3.png',
      imageAlt: 'Developer experience illustration',
      fullWidth: false,
    },
    {
      title: 'Theme Support',
      content:
        'Easily customize the look and feel of your components with CSS variables and design tokens.',
      imageSrc: '/Device-4.png',
      imageAlt: 'Theme customization illustration',
      fullWidth: true,
    },
  ],
  benefits: [
    {
      id: 1,
      text: 'Ship faster with pre-built, customizable components.',
      image: '/Device-6.png',
    },
    {
      id: 2,
      text: 'Ensure accessibility compliance out of the box.',
      image: '/Device-7.png',
    },
    {
      id: 3,
      text: 'Create beautiful, consistent interfaces with ease.',
      image: '/Device-8.png',
    },
    {
      id: 4,
      text: 'Improve development velocity with great DX.',
      image: '/Device-1.png',
    },
  ],
  pricing: [
    {
      name: 'Open Source',
      href: '#',
      price: '$0',
      period: 'forever',
      yearlyPrice: '$0',
      features: [
        'All components',
        'TypeScript support',
        'Theme customization',
        'Community support',
      ],
      description: 'Perfect for open source projects',
      buttonText: 'Get Started',
      isPopular: false,
    },
    {
      name: 'Pro',
      href: '#',
      price: '$99',
      period: 'year',
      yearlyPrice: '$99',
      features: [
        'Everything in Open Source',
        'Premium components',
        'Priority support',
        'Private Slack channel',
        'Early access to new features',
      ],
      description: 'For professional developers and teams',
      buttonText: 'Upgrade to Pro',
      isPopular: true,
    },
  ],
  faqs: [
    {
      question: 'How do I get started with Vibe UI?',
      answer: (
        <span>
          Getting started is easy! Install the package via npm or yarn, import
          the components you need, and start building. Check out our
          comprehensive documentation for detailed guides and examples.
        </span>
      ),
    },
    {
      question: 'Is Vibe UI compatible with my tech stack?',
      answer: (
        <span>
          Vibe UI is built for React and works seamlessly with Next.js. It uses
          TypeScript and Tailwind CSS, making it a perfect fit for modern web
          development stacks.
        </span>
      ),
    },
    {
      question: 'How customizable are the components?',
      answer: (
        <span>
          All components are highly customizable using CSS variables and design
          tokens. You can easily modify colors, spacing, typography, and more to
          match your brand.
        </span>
      ),
    },
    {
      question: 'Is Vibe UI accessible?',
      answer: (
        <span>
          Yes! Accessibility is a top priority. All components follow WCAG
          guidelines and include proper ARIA attributes. They're regularly
          tested with screen readers and keyboard navigation.
        </span>
      ),
    },
    {
      question: 'Can I use Vibe UI in commercial projects?',
      answer: (
        <span>
          Yes, Vibe UI is available under the MIT license. You can use it in
          personal or commercial projects for free. The Pro version includes
          additional features and support.
        </span>
      ),
    },
  ],
  footer: [
    {
      id: 1,
      menu: [
        { href: '#', text: 'Features' },
        { href: '#', text: 'Pricing' },
        { href: '#', text: 'About Us' },
        { href: '#', text: 'Blog' },
        { href: '#', text: 'Contact' },
      ],
    },
  ],
  testimonials: [
    {
      id: 1,
      text: 'Vibe UI has revolutionized how we build interfaces. The components are beautiful and the DX is amazing.',
      name: 'Alice Johnson',
      role: 'Frontend Developer',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 2,
      text: 'The accessibility features have saved us countless hours of development and testing.',
      name: 'Bob Brown',
      role: 'UI/UX Designer',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0fGVufDB8fDB8fHww',
    },
    {
      id: 3,
      text: 'The theme customization options make it easy to match our brand perfectly.',
      name: 'Charlie Davis',
      role: 'Product Designer',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww',
    },
    {
      id: 4,
      text: "Vibe UI's motion effects have added a new level of polish to our product.",
      name: 'Diana Evans',
      role: 'Creative Director',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBvcnRyYWl0fGVufDB8fDB8fHww',
    },
    {
      id: 5,
      text: 'The TypeScript support is excellent, making it easy to catch errors early.',
      name: 'Ethan Ford',
      role: 'Senior Developer',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBvcnRyYWl0fGVufDB8fDB8fHww',
    },
    {
      id: 6,
      text: 'The documentation is comprehensive and well-organized.',
      name: 'Fiona Grant',
      role: 'Developer Advocate',
      image:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBvcnRyYWl0fGVufDB8fDB8fHww',
    },
    {
      id: 7,
      text: 'The community support is fantastic, and issues are resolved quickly.',
      name: 'George Harris',
      role: 'Open Source Contributor',
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHBvcnRyYWl0fGVufDB8fDB8fHww',
    },
    {
      id: 8,
      text: "Vibe UI's responsive design features have made our mobile development much easier.",
      name: 'Hannah Irving',
      role: 'Mobile Developer',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww',
    },
  ],
}

export type SiteConfig = typeof siteConfig
