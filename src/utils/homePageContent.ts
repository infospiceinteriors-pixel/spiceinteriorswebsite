import type { LucideIcon } from 'lucide-react';
import {
  Blinds,
  Compass,
  Lamp,
  Layers,
  Palette,
  Wrench,
} from 'lucide-react';

export const homeHero = {
  eyebrow: 'Interior design · Commercial & residential',
  headline: 'Interiors designed with an understanding of',
  headlineAccent: 'how buildings actually work.',
  description:
    'Offices, cafés, restaurants and homes — planned end to end, detailed to build, and grounded in how insulation, energy, acoustics and materials really behave.',
  ctaLabel: 'Request a session',
  stats: ['One studio', 'Concept · Plans · Materials'],
  image: '/intro-hero.jpg',
  imageAlt: 'Minimal interior with textured walls and soft natural light',
} as const;

export type HomeServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const homeServices = {
  label: 'What I bring to the room',
  title: 'The full surface of a renovation — under one roof.',
  intro:
    "You don't need three specialists who never speak to each other. You need one who has thought about all six.",
  items: [
    {
      title: 'Space planning',
      description: 'Layouts for offices, hospitality and homes.',
      icon: Compass,
    },
    {
      title: 'How buildings work',
      description: 'Insulation, energy, acoustics, moisture.',
      icon: Wrench,
    },
    {
      title: 'Lighting design',
      description: 'Layered, warm, considered for every hour.',
      icon: Lamp,
    },
    {
      title: 'Flooring & build-ups',
      description: 'Right material, right room, right detail.',
      icon: Layers,
    },
    {
      title: 'Window treatments',
      description: 'Light, privacy and acoustics, resolved.',
      icon: Blinds,
    },
    {
      title: 'Materials & fixtures',
      description: 'Specified down to the brass screw.',
      icon: Palette,
    },
  ] satisfies HomeServiceItem[],
} as const;

export const homeProcess = {
  label: 'How I work',
  title: 'Four steps, from first conversation to finished space.',
  intro:
    "Same process whether it's a 40 m² café or a family home — scaled to the size of the project.",
  steps: [
    {
      number: '01',
      title: 'Intro & brief',
      description:
        "A conversation about the space, the people who'll use it, the constraints, the budget and the timeline. No commitment.",
    },
    {
      number: '02',
      title: 'Concept & space plan',
      description:
        'Layout options, look-and-feel direction, key material moves. We agree on the idea before anyone draws a millimetre.',
    },
    {
      number: '03',
      title: 'Technical design',
      description:
        'Millimetre-accurate floor plans, sections, lighting plan, and a full material and fixture schedule your contractor can build from.',
    },
    {
      number: '04',
      title: 'Build support',
      description:
        'Staying in the loop with your contractor through construction so the design intent survives the realities of the site.',
    },
  ],
} as const;
