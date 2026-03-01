export interface DesignSection {
  heading: string
  body: string | string[] | (string | string[])[]
  images?: string[]  // <-- add this
}

export interface DesignProject {
  id: string
  title: string
  category: 'UI/UX' | 'Branding & Marketing' | 'Product' | 'Graphic'
  timeline?: string
  badge?: string
  role?: string
  description: string
  tools: string[]
  coverImage: string
  images?: string[]
  figma?: string
  link?: string
  year?: string
  // case study fields
  context?: string
  sections?: DesignSection[]
  outcomes?: string[]
}

export const DESIGN_PROJECTS: DesignProject[] = [
    
    // vhsmo
   {
    id: 'vhsmo',
    title: 'VHSMO',
    category: 'Branding & Marketing',
    badge: '🚀 Startup',
    role: 'Co-Founder · Creative Director',
    description: 'End-to-end product design for a pocket retro camera with instant wireless transfer — combining nostalgia with modern usability.',
    tools: ['Womp 3D', 'Framer', 'Hardware Prototyping', 'Instagram'],
    coverImage: '/images/design/vhsmo/cover.png',
    link: 'https://vhsmo.com',
    timeline: 'Apr 2025 - Dec 2025',
    context: 'VHSMO is a pocket-sized retro camera with instant wireless transfer. We set out to combine early-2000s digicam nostalgia with modern usability — without compromising portability or emotional appeal. My focus was ensuring every touchpoint — physical and digital — felt intuitive, human, and culturally relevant.',
    sections: [
      {
        heading: 'The Problem',
        body: [
          'Retro cameras are emotionally compelling but often sacrifice usability for aesthetics, lack cohesive branding, and fail to resonate with internet-native users.',
          'The opportunity wasn\'t just to design a device — it was to design an experience that felt personal, expressive, and frictionless.',
        ],
      },
      {
        heading: 'My Approach',
        body: [
          'I treated VHSMO as a unified UX system across three layers:',
          [
            'Physical Interaction – How the camera feels in hand',
            'Digital Experience – How users discover and trust the product',
            'Community Feedback Loop – How real users shape iteration',
          ],
          'All decisions were grounded in one question: How does this feel in someone\'s hands — and in their life?',
        ],
      },
      {
        heading: 'Physical Product Experience',
        body: [
          'Using Womp3D and hardware prototypes, I iterated on form factor, ergonomics, viewfinder placement, button positioning, flash alignment, grip balance, texture, colorways, and tactile cues.',
          'I researched hand positioning, small-object grip behavior, and comfort while shooting one-handed to ensure the device felt natural — not technical.',
          'The goal: technology that disappears behind instinct.',
        ],
        images: [
          '/images/design/vhsmo/vhsmobackplate.jpg',
          '/images/design/vhsmo/whiterender.png',
          '/images/design/vhsmo/vhsmoproductdesign.jpg',
          '/images/design/vhsmo/frontrender.png',
        ]
      },
      {
        heading: 'Website & Digital UX',
        body: [
          'I designed and built our website end-to-end in Framer using custom code, animations, and structured layouts.',
          'UX priorities included:',
          [
            'Immediate emotional hook',
            'Clear value proposition above the fold',
            'Frictionless email capture',
            'Visual storytelling without clutter',
            'Mobile-first optimization',
          ],
          'The site balanced nostalgia-driven visuals with modern usability standards to build trust and drive conversions.',
          'I also prototyped early UI/UX concepts for our companion mobile app in Canva, mapping core user flows such as gallery browsing, image viewing, and user menu. The goal was to visualize a seamless transition between the physical capture button and digital gallery access — ensuring the hardware and software felt like one cohesive experience.'
        ],
        images: [
          '/images/design/vhsmo/apphalf.png',
          '/images/design/vhsmo/website1.png',
          '/images/design/vhsmo/appfull.png',
          '/images/design/vhsmo/website2.png'
        ]
      },
      {
        heading: 'Brand System & Visual Identity',
        body: [
          'To ensure VHSMO felt culturally cohesive across every touchpoint, I developed a unified brand system spanning logo, color, typography, motion, and content.',
          'This included:',
          [
            'Logo design & iterations',
            'Favicon & web iconography',
            'Defined color palettes aligned with retro-digital aesthetics',
            'Visual direction for product renders',
            'Launch video editing & motion styling',
            'Instagram post templates & story highlights'
          ],
          'The goal was consistency — whether someone encountered VHSMO through a Reel, a landing page, or the physical camera itself.',
          'Every asset reinforced the same emotional tone: nostalgic, pocketable, expressive.'
        ],
        images: [
          '/images/design/vhsmo/foundersbranding.png',
          '/images/design/vhsmo/branditeration.jpg',
          '/images/design/vhsmo/slide1.png',
          '/images/design/vhsmo/laptopwork.png',
          '/images/design/vhsmo/solution.png'
        ]
      },
      {
        heading: 'Social Media as Live UX Research',
        body: [
          'I led content strategy and execution for @vhsmo.cam, handling ideation, scripting, filming, editing, posting strategy, analytics review, and community engagement.',
          'Instagram functioned as a rapid testing environment. We used audience reactions, saves, shares, and comments to refine positioning and messaging in real time.',
        ],
        images: [
          '/images/design/vhsmo/nystory.png',
          '/images/design/vhsmo/community.png',
          '/images/design/vhsmo/patent.png',
          '/images/design/vhsmo/instass.jpeg',
          '/images/design/vhsmo/newphotobatch.png'
        ]
      },
    ],
    outcomes: [
      '6.5K+ organic Instagram followers in 60 days',
      '12.5K+ waitlist signups pre-launch',
      '750K+ organic views across launch content',
      'Validated demand for hardware product before scaling production through design clarity and user-centered iteration',
    ],
    },
]

export function getDesignProjectById(id: string): DesignProject | undefined {
    return DESIGN_PROJECTS.find((p) => p.id === id)
}

export function getAllDesignProjectIds(): string[] {
  return DESIGN_PROJECTS.map((p) => p.id)
}