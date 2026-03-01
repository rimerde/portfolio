import type { Project } from '@/types'

export const PROJECTS: Project[] = [
  {
    id: 'memora',
    title: 'Memora',
    tagline: 'A context-aware wearable that links real-world interactions into meaningful reminders.',
    hackathon: 'Revolution UC 2025 - 1819 Innovation Hub',
    description:
      "Ideated during RevUC 2025 (24-hour hackathon), Memora is a context-aware reminder system that links tasks to physical spaces, objects, and people — surfacing prompts exactly when and where they're relevant. Placed 2nd out of 150+ teams.",
    problem:
      "Everyday memory lapses are frustrating. For individuals experiencing cognitive decline, they are destabilizing. Missed medication, forgotten conversations, and overlooked responsibilities can reduce independence and increase emotional and caregiving strain. Existing solutions often rely heavily on smartphones, cloud systems, or passive reminders — lacking contextual awareness tied to real-world interactions.",
    stack: ['ESP32', 'Arduino', 'Embedded Systems', 'Edge Impulse', 'I2S Audio', 'Rapid Prototyping'],
    links: {
      devpost: 'https://devpost.com/software/memora-clear-your-mind-conquer-your-day',
      article: 'https://www.uc.edu/news/articles/2025/03/revolutionuc-hackathon-highlights-student-ingenuity-at-1819.html'
    },
    badge: '🏆 2nd Place + People\'s Choice',
    coverImage: '/images/code/memora/hand.jpeg',
    coverVideo: 'https://youtube.com/embed/pyqpO5HNaQE?controls=1&modestbranding=1&rel=0&showinfo=0',
    images: [
      '/images/code/memora/teamtable.jpeg',
      '/images/code/memora/hand.jpeg',
      '/images/code/memora/chest.jpeg',
      '/images/code/memora/lobby.JPG',
      '/images/code/memora/win.JPG',
      '/images/code/memora/demovid.JPG'
    ],
    // ── Case study ────────────────────────────────────────
    year: '2025',
    timeline: '24 hours',
    role: 'Product & Experience Lead',
    context:
      'Memora is a privacy-first wearable assistive system. It links real-world faces and objects to personalized reminders via on-device machine learning. Designed to support individuals experiencing memory impairment, it delivers real-time, dual-sensory prompts without relying on cloud processing. The system prioritizes privacy, speed, and independence — proving that meaningful assistive technology can run entirely on low-cost hardware.',
    sections: [
      {
        heading: 'Our Approach',
        body: ["We reframed memory assistance as a recognition problem rather than a scheduling problem.",
           "Instead of asking users to remember to log reminders, Memora detects meaningful faces or objects in their environment and automatically triggers contextual prompts.",
           "The system was designed around three principles:",
           [
            'On-device processing for privacy',
            'Instant feedback for reliability',
            'Minimal interaction for cognitive ease.'
           ],
           "Every feature decision was filtered through one question: does this reduce cognitive load?",
        ],
      },
      {
        heading: 'Technical Execution',
        body: [ 
          "Building Memora required balancing performance, affordability, and power efficiency under extreme time constraints.",
          "We selected ESP32 microcontrollers to enable embedded ML while maintaining low cost and portability. Using Edge Impulse, we trained lightweight face and object detection models optimized for real-time inference on constrained hardware.",
          "To enable seamless communication, we established secure wireless transmission between dual ESP32 devices — a necklace (recognition module) and a bracelet (feedback module). When recognition occurs, the system triggers:",
          [
            'Text-based reminders on a 16x2 LCD',
            'Audio output via I2S amplifier',
            'Cloud-assisted text-to-speech for high-quality voice prompts',
          ],
          "Despite hardware limitations, we achieved reliable, low-latency recognition without offloading core processing to the cloud."
        ],
      },
      {
        heading: 'Key Takeaways',
        body: [
          "This project reinforced that technical capability is rarely the bottleneck — clarity of scope is.",
          "We deliberately cut features including multi-object detection, a companion app, and advanced UI polish to preserve performance and reliability. The result was a tighter, more meaningful core experience.",
          "I learned that strong product decisions often come from subtraction, not addition — and that constraint-driven engineering can produce surprisingly elegant systems."
        ]
      },
    ],
    outcomes: [
      '2nd place out of 60 competing teams',
      'People\'s Choice award recipient',
      'Achieved real-time face and object recognition on low-cost microcontrollers',
      'Demonstrated offline ML feasibility on accessible embedded hardware'
    ],
  },
  {
    id: 'picco',
    title: 'PICCO',
    tagline: 'A voice-activated assessment companion for Parkinson\'s patients.',
    hackathon: 'H2AI Healthcare Hackathon - Georgetown University',
    description: 'PICCO is a wearable and web-based system designed to help Parkinson\'s patients independently initiate and complete motor and cognitive assessments. Built during a 24-hour healthcare hackathon, the system enables real-time tremor tracking and structured testing, while providing physicians with a clear, accessible dashboard for reviewing patient data.',
    problem: 'Parkinson\'s assessments often require in-clinic visits, structured supervision, and manual data interpretation — limiting accessibility and increasing burden for patients with motor impairments.',
    stack: ['Firebase', 'React', 'Gyroscope Data', 'ML-Assisted Analysis'],
    links: {},
    images: [
      '/images/code/picco/chris.jpg',
      '/images/code/picco/all.jpg',
      '/images/code/picco/notebook.jpeg',
      '/images/code/picco/table.jpeg',
      '/images/code/picco/gathering.jpeg',
      '/images/code/picco/finalists.jpeg'
    ],
    badge: '🏆 People\'s Choice Award | Finalist',
    coverImage: '/images/code/picco/notebook.jpeg',
    // ── Case study ────────────────────────────────────────
    year: '2025',
    timeline: '24 hours',
    role: 'Medical Research Lead & UX Lead',
    sections: [
      {
        heading: 'Clinical Vignette',
        body: [
          'Michael Hayes is a 65-year-old man living with Parkinson\'s disease. Despite regular medication and in-clinic visits, he notices that his tremors, muscle stiffness, and cognitive performance fluctuate day-to-day. He struggles to communicate these subtle changes to his neurologist, making it difficult to capture a comprehensive view of his condition.',
          'Traditional assessments require supervised, structured testing in clinical settings, which can be burdensome for patients like Michael due to travel, fatigue, and motor limitations. Existing monitoring systems often prioritize raw data collection over usability, leaving patients unable to reliably perform self-assessments at home.',
          'Michael\'s ideal solution is a system that allows him to independently complete motor and cognitive tests while providing his healthcare team with meaningful, interpretable data — including tremor severity, speech patterns, handwriting, and cognitive test scores — to detect subtle changes over time and tailor interventions effectively.',
          'This vignette frames the challenge: How might we design a patient-centered platform that captures clinically relevant data continuously, minimizes burden, and supports better communication between patients and clinicians?'
        ]
      },
      {
        heading: 'Our Approach',
        body: [
          'We approached PICCO by centering on the real needs of Parkinson\'s patients and clinicians. Instead of starting with technology, the team focused on what assessments would be most meaningful and usable in a patient\'s daily life.',
          'The system was designed around three principles:',
          [
            'Clinical validity: every test and data stream aligned with established Parkinson’s assessments',
            'Accessibility: interactions were optimized for patients experiencing tremors, slowed movement, or speech difficulties',
            'Actionable insights: dashboards presented clinicians with clear, interpretable information without overwhelming data'
          ],
          'Patient and mentor input guided design decisions throughout. Discussions with Rick Schena, a Parkinson’s patient and hackathon mentor, and other early-stage user interviews helped refine what assessments were practical and how to present results effectively.'
        ]
      },
      {
        heading: '\'Technical\' Execution',
        body: [
          'Since I took on a less engineering-heavy role for this project, my priority was to validate clinical relevance. I conducted medical research on Parkinson’s diagnostic standards and reached out to hospitals and patient networks for input. We designed short, structured motor and cognitive assessments that could be realistically completed independently within the hackathon timeframe.',
          'On the technical side, the wearable recorded tremor data via gyroscopic sensors, feeding real-time updates to a React dashboard backed by Firebase. The dashboard visualized session data alongside mocked historical records to demonstrate longitudinal tracking.',
          'Mentorship and patient conversations informed adjustments to assessment selection, feedback frequency, and visual clarity, ensuring the prototype was both functional and grounded in real clinical contexts.'
        ]
      },
      {
        heading: 'Key Takeaways',
        body: [
          'Medical products cannot start with technology — they must start with clinical validity.',
          "I learned how to translate medical research into interaction decisions, design for users with motor impairments, and filter clinical assessments down to what is realistic within 24 hours.",
          "The biggest shift was understanding that usability is not aesthetic polish — it is functional dignity.",
          "I learned how to build credibility quickly by speaking with real stakeholders."
        ]
      }
    ],
    outcomes: [
      'People\'s Choice Award',
      '1 of 9 finalists (22 teams)',
      'Real-time tremor updates (<2s latency)',
      'Product validation from Parkinson\'s patient mentor'
    ],
    
  },
  {
    id: 'smithtech',
    title: 'SmithTech: Portable 3D Scanning Rig',
    tagline: 'A low-cost system for tracking structural change in forged metal.',
    hackathon: 'MakeOHI/O 2025, Hammer Industries Track - Ohio State University',
    description: 'In robotic blacksmithing, precision matters — but tracking incremental changes during forging remains difficult without industrial scanning systems. Our solution was a portable, open-source 3D scanning rig that generates meshes from structured image datasets to monitor changes over time.',
    problem: 'Robotic forging processes require precision tracking, but existing industrial scanning systems are expensive and inaccessible to smaller workshops and startups.',
    stack: ['Arduino', 'Meshroom', 'OpenCV', 'AprilTags', 'Photogrammetry'],
    links: {},
    images: [
      '/images/code/smithtech/selfie.jpeg',
      '/images/code/smithtech/rig.jpeg',
      '/images/code/smithtech/hardware.jpeg',
      '/images/code/smithtech/meshroom.png',
      '/images/code/smithtech/circuit.jpeg',
      '/images/code/smithtech/sketch.jpeg',
      '/images/code/smithtech/bereal.jpeg'
    ],
    badge: '🏆 2nd Place (Track)',
    coverImage: '/images/code/smithtech/rig.jpeg',
    coverVideo: 'https://youtube.com/embed/osILm7SbaV8?controls=1&modestbranding=1&rel=0&showinfo=0',
    // ── Case study ────────────────────────────────────────
    year: '2025',
    timeline: '24 hours',
    role: 'Software Lead',
    sections: [
      {
        heading: 'Project Context',
        body: [
          'As metal is shaped under heat and force, its geometry changes subtly at each stage. For robotics teams and blacksmithing operations, tracking these changes allows calibration, repeatability, and quality assurance. Commercial 3D scanning systems are often costly and non-portable.',
          'The sponsor challenge from Hammer Industries pushed us to explore how we could build a compact, low-cost scanning system capable of producing usable 3D meshes within 24 hours.'
        ]
      },
      {
        heading: 'Our Approach',
        body: ["We didn’t have prior experience with tracking or manipulating 3D meshes, so we focused on making object mapping easier for blacksmiths. The goal was to create a system that could quickly turn a forged object into a usable 3D mesh, which could then be analyzed or used to track changes during the forming process.",
          "Our solution consisted of two main components: a rotating disc embedded with AprilTags for scaling and positional reference, and a vertical camera mount capturing 360° image datasets at three fixed heights."
        ]
      },
      {
        heading: 'Technical Execution',
        body: [
          'As software lead, my role included capturing structured datasets, configuring image capture intervals, calibrating camera tilt angles for the three vertical viewpoints, running mesh reconstruction using Meshroom, and processing outputs into usable 3D models.',
          'Structured image datasets were captured with precise intervals and angles to enable accurate photogrammetry. Mesh reconstruction was run in Meshroom, and outputs were processed for visualization and integration into a simulated robotic workflow.',
          'We iterated heavily on scan timing, dataset density, and camera angles to improve reconstruction quality. Limited hardware access during the hackathon required rapid calibration and physical adjustments. I also programmed simple Arduino logic to control the rotating platform via servo motors, ensuring consistent rotational steps.',
          'Our iterative approach allowed functional 3D mesh generation under extreme time constraints, producing reliable results that could be incorporated into robotic blacksmithing workflows.'
        ]
      }
    ],
    outcomes: [
      '2nd Place - Hammer Industries Track',
      'Generated functional 3D meshes within 24 hours',
      'Designed an open-source, rebuildable scanning system',
      'Validated real-world feasibility through workflow simulation'
    ],
  },
  {
    id: 'wavefeel',
    title: 'WaveFeel',
    tagline: 'A gesture-based browser navigation system built for accessible computing.',
    hackathon: 'MakeUC 2024 - 1819 Innovation Hub',
    description: 'WaveFeel is a wearable input system that translates motion and touch into browser navigation shortcuts. Built in 24 hours, the project reimagines web interaction for users who cannot — or prefer not to — rely on traditional keyboards and mice.',
    problem: 'Modern web browsing is built around precise cursor control and keyboard shortcuts. For individuals with limited dexterity, tremors, or reduced motor stability, these interaction models can be exhausting or inaccessible.',
    stack: ['Arduino', 'C/C++', 'MPU6050', 'Serial Communication'],
    links: {
      devpost: 'https://devpost.com/software/wavefeel'
    },
    badge: '',
    images: [
      '/images/code/wavefeel/taped.jpeg',
      '/images/code/wavefeel/arduino1.jpeg',
      '/images/code/wavefeel/bleh.jpeg',
      '/images/code/wavefeel/arduino3.jpeg',
      '/images/code/wavefeel/selfie.jpeg',
      '/images/code/wavefeel/arduino2.jpeg'
    ],
    coverImage: '/images/code/wavefeel/bleh.jpeg',
    coverVideo: 'https://youtube.com/embed/FuVC7QcPGVg?controls=1&modestbranding=1&rel=0&showinfo=0',
    // ── Case study ────────────────────────────────────────
    year: '2024',
    timeline: '24 hours',
    role: 'Project Lead & Sole Developer',
    sections: [
      {
        heading: 'Project Context',
        body: [
          'What if your desktop navigation was a little bit closer to JARVIS?',
          'Most assistive technologies that replace mouse and keyboard input are either expensive, complex to configure, or require high-precision motion tracking. The browsing experience remains fundamentally dependent on peripherals.',
          'So, How might we reduce browser navigation to intentional motion and simple taps, minimizing precision while preserving functionality?'
        ]
      },
      {
        heading: 'Our Approach',
        body: [
          'Our goal, abstracted to its core, was a motion-to-command translation problem.',
          'Instead of replicating a full keyboard and mouse, we focused on identifying the core actions required for browsing — opening a browser, navigating tabs, scrolling, activating search, closing windows — and mapping them to minimal physical inputs.',
          'The design was guided by two principles:',
          [
            'Reducing reliance on fine motor precision',
            'Prioritizing responsiveness over feature breadth'
          ],
          'Rather than building advanced gesture intelligence, we intentionally simplified movement into directional tilts and deliberate touch inputs. This kept the system predictable, lightweight, and usable under motor variability.'
        ]
      },
      {
        heading: 'Technical Execution',
        body: [
          'WaveFeel was built around an Arduino-based circuit using:',
          [
            'MPU6050 gyroscope for motion detection',
            'Touch sensors and buttons for discrete input',
            'Mapping touch/button inputs to predefined keyboard shortcuts',
            'Sending commands via serial to trigger browser actions'
          ],
          'We leveraged an existing gyroscope library for motion data and built a custom keyboard-mapping layer to translate sensor input into browser navigation commands.'
        ]
      },
      {
        heading: 'Hardware Challenges',
        body: [
          'The original build used an Arduino R4 WiFi board, which proved unstable due to its recent release and compatibility issues. We migrated the system to an Arduino Leonardo for more reliable USB HID functionality.',
          'In the final hours, two major hardware failures occurred:',
          [
            'Voltage inconsistencies required replacing touch sensors with physical buttons',
            'The board’s digital read pins were damaged, forcing a full circuit migration to a new Arduino'
          ],
          'Additionally, this was our first experience working with Arduino and embedded hardware, requiring rapid learning in circuit assembly and IDE-based programming.',
          'Despite these constraints, we delivered a fully functional prototype within 24 hours.'
        ]
      }
    ],
    outcomes: [
      'Functional browser control system using motion and touch',
      'Automated browser launch, search activation, tab navigation, and window management',
      'Mouse-replication through head gesture control',
      'Fully rebuilt hardware system under time pressure',
      'Demonstrated a viable alternative input model for accessible web interaction'
    ],
  }
]

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find((p) => p.id === id)
}

export function getAllProjectIds(): string[] {
  return PROJECTS.map((p) => p.id)
}

/*  id: '',
    title: '',
    tagline: '',
    hackathon: '',
    description: '',
    problem: '',
    stack: [],
    links: {},
    badge: '',
    coverImage: '',
    coverVideo: '',
    // ── Case study ────────────────────────────────────────
    year: '',
    timeline: '',
    role: '',
    sections: [],
    outcomes: [],
*/