const posts = [
    {
        id: 1,
        slug: 'arquitectura-organica',
        title: 'Arquitectura Organica',
        image: '/images/feature-magazine.jpg',
        category: ['Graphic Design', 'Magazine Design'],
        projectType: 'Magazine Design',
        timeline: 'September – November 2024',
        role: 'Designer',
        tools: 'InDesign – Photoshop',
        mandate: 'This project aimed to create a magazine about “organic architecture”, focusing on the works of Javier Senosiain and other architects who blend design with nature through flowing forms and sustainable materials.',
        links: 'Digital Version >',
        heading: 'Project',
        overview: 'Organic architecture focuses on creating buildings that blend harmoniously with nature, with designs that flow naturally and use sustainable materials. Architects like Javier Senosiain have become known for their innovative approach, using curving forms and environmentally integrated structures. This magazine explores how organic architecture reshapes spaces by connecting them to the natural world.',
        secOverview: 'Organic architecture focuses on creating buildings that blend harmoniously with nature, with designs that flow naturally and use sustainable materials. Architects like Javier Senosiain have become known for their innovative approach, using curving forms and environmentally integrated structures. This magazine explores how organic architecture reshapes spaces by connecting them to the natural world.',
        gallery: [
            '/images/ao-magazine-mockup.jpg',
            '/images/Front-back.jpg',
            '/images/Magazine-Pages-1-2.jpg',
            '/images/Magazine-Pages-3-4.jpg',
            '/images/Magazine-Pages-5-6.jpg',
            '/images/Magazine-Pages-7-8.jpg',
            '/images/Magazine-Pages-9-10.jpg',
            '/images/Magazine-Pages-3-4.jpg',
        ]
    },
    {
        id: 2,
        slug: 'sugar-magic',
        title: 'Sugar Magic',
        video: '/images/sugarmagic-animated.mp4',
        category: ['Graphic Design', 'Product Design'],
        projectType: 'Product Design',
        timeline: 'March – May 2024',
        role: 'Lead Designer',
        tools: 'Illustrator – Photoshop',
        mandate: 'This project involved creating a visually appealing product package for a new brand of gourmet candy, using bright colors and whimsical elements to evoke a sense of playfulness.',
        overview: 'Sugar Magic focuses on creating an experience of joy and fantasy with its product packaging. The design uses pastel colors, playful typography, and illustrations to communicate the lighthearted nature of the brand, while the product itself stands out on the shelf with its unique and colorful design.',
        gallery: [
            '/images/ao-magazine-mockup.jpg',
            '/images/Front-back.jpg',
            '/images/Magazine-Pages-1-2.jpg',
            '/images/Magazine-Pages-3-4.jpg',
            '/images/Magazine-Pages-5-6.jpg',
            '/images/Magazine-Pages-7-8.jpg',
            '/images/Magazine-Pages-9-10.jpg',
            '/images/Magazine-Pages-3-4.jpg',
        ]
    },
    {
        id: 3,
        slug: 'the-waterfall',
        title: 'The Waterfall',
        image: '/images/feature-bi-poster.jpg',
        category: ['Graphic Design', 'Poster Design'],
        projectType: 'Poster Design',
        timeline: 'April 2024',
        role: 'Graphic Designer',
        tools: 'Photoshop – Illustrator',
        mandate: 'A poster design to promote a local music festival, with the theme centered around nature and the flowing concept of a waterfall.',
        overview: 'The design incorporates fluid shapes and colors to represent the dynamic nature of a waterfall, blending it with vibrant elements that symbolize the energy of the festival. The colors evoke a sense of freshness, while the typography is clean and modern, reflecting the contemporary nature of the event.',
        gallery: [
            '/images/ao-magazine-mockup.jpg',
            '/images/Front-back.jpg',
            '/images/Magazine-Pages-1-2.jpg',
            '/images/Magazine-Pages-3-4.jpg',
            '/images/Magazine-Pages-5-6.jpg',
            '/images/Magazine-Pages-7-8.jpg',
            '/images/Magazine-Pages-9-10.jpg',
            '/images/Magazine-Pages-3-4.jpg',
        ]
    },
    {
        id: 4,
        slug: 'the-exhibition',
        title: 'The Exhibition',
        image: '/images/feature-exhibition-poster.jpg',
        category: ['Graphic Design', 'Poster Design'],
        projectType: 'Poster Design',
        timeline: 'October 2024',
        role: 'Designer',
        tools: 'InDesign – Photoshop',
        mandate: 'This project involved designing a poster for an art exhibition that showcased contemporary photography, with an emphasis on minimalist art.',
        overview: 'The design is minimalist in style, with a clean layout and strong use of negative space to highlight the featured photographs. The typography is modern and bold, ensuring the focus remains on the artwork while still providing essential information about the exhibition.',
        gallery: [
            '/images/ao-magazine-mockup.jpg',
            '/images/Front-back.jpg',
            '/images/Magazine-Pages-1-2.jpg',
            '/images/Magazine-Pages-3-4.jpg',
            '/images/Magazine-Pages-5-6.jpg',
            '/images/Magazine-Pages-7-8.jpg',
            '/images/Magazine-Pages-9-10.jpg',
            '/images/Magazine-Pages-3-4.jpg',
        ]
    },
    {
        id: 5,
        slug: 'aether',
        title: 'Aether App',
        image: '/images/feature-aether.gif',
        category: ['Case Study', 'UI/UX Design', 'Front-end Development'],
        projectType: 'Form-Filling Automation Mobile App',
        timeline: 'September – December 2024',
        role: 'Multidisciplinary Designer and Developer',
        tools: 'Figma – Adobe Indesign – Photoshop – Illustrator – HTML/CSS, Javascript (Next.JS)',

        // Context and Goal
        mandate: 'Caregivers such as family members, friends, or healthcare professionals often spend up to 30 days per year manually filling out forms related to caregiving tasks. The Aether App was designed to simplify this process through automated form-filling and intuitive workflows that streamline data management and reduce stress.',

        goal: 'To create a mobile app that automates form-filling tasks, reduces errors, and saves caregivers time with an easy-to-use interface that allows quick form submissions without the need for repetitive manual input.',

        // Process
        process: [
            {
                step: 'Research and User Insights',
                description: 'Conducted interviews and user surveys with caregivers to understand their challenges with repetitive form-filling. Identified the need for a solution that prioritizes accuracy and efficiency.',
                image: '/images/research-phase.jpg'
            },
            {
                step: 'Wireframing and User Flows',
                description: 'Developed low-fidelity wireframes to visualize the app’s form input process and user flows. Created high-fidelity prototypes to test usability and adjust for user feedback.',
                image: '/images/lo-fi-wireframe.jpg'
            },
            {
                step: 'UI Design and Visual Branding',
                description: 'Designed a clean and minimalist interface with a calming color palette to enhance usability. Focused on clear input fields and intuitive navigation to simplify the experience for non-technical users.',
                image: '/images/branding-design.jpg'
            },
            {
                step: 'Development',
                description: 'Developed the app using Next.js with form data management automation to enable quick input population and reduce manual work. Ensured mobile responsiveness for all devices.',
                image: '/images/development-phase.jpg'
            }
        ],

        challenges: [
            'Ensuring that automated form-filling worked across various form types while maintaining accuracy.',
            'Creating an intuitive experience for users unfamiliar with digital form-filling tools.',
            'Designing a visually accessible interface to reduce cognitive load for caregivers.'
        ],

        outcomes: 'The Aether App reduced manual form-filling time by up to 50% during testing. Users reported a significant reduction in stress related to caregiving administrative tasks. The app’s intuitive design also led to increased adoption among caregivers with varying levels of technical proficiency.',

        designDeliverables: [
            {
                type: 'Lo-fi Wireframes',
                description: 'Outlined the app’s form-filling structure to ensure that all user pain points were addressed early in the design phase.',
                image: '/images/lo-fi-wireframe.jpg'
            },
            {
                type: 'Hi-fi Prototypes',
                description: 'Created detailed, high-fidelity prototypes that showcased the final app layout, interactions, and visual elements.',
                image: '/images/hi-fi-prototype.jpg'
            },
            {
                type: 'Brochures and Cards',
                description: 'Designed marketing materials to educate users on the app’s time-saving features and simplified workflows.',
                image: '/images/brochure-design.jpg'
            },
            {
                type: 'Blog Design',
                description: 'Developed a blog for educational content related to caregiving forms and tips for using the app efficiently.',
                image: '/images/blog-layout.jpg'
            }
        ],

        links1: 'https://aether-blog.vercel.app/',
        links2: 'https://www.figma.com/proto/7uFLSzWU4gw74WYdgnm9cW/Aether?node-id=366-368&p=f&t=sYUgghyD4nlxljKM-1&scaling=scale-down&content-scaling=fixed&page-id=366%3A367&starting-point-node-id=366%3A368',
        links3: 'https://www.figma.com/proto/nzhtkPCGzn1CFTVlAsZSFQ/Aether-App?node-id=2750-7345&p=f&t=laV2NAhUtf4cIJHo-1&scaling=scale-down&content-scaling=fixed&page-id=2750%3A6683&starting-point-node-id=2750%3A7345',


        gallery: [
            '/images/ao-magazine-mockup.jpg',
            '/images/Front-back.jpg',
            '/images/Magazine-Pages-1-2.jpg',
            '/images/Magazine-Pages-3-4.jpg',
            '/images/Magazine-Pages-5-6.jpg',
            '/images/Magazine-Pages-7-8.jpg',
            '/images/Magazine-Pages-9-10.jpg',
            '/images/Magazine-Pages-3-4.jpg'
        ]
    },
    {
        id: 6,
        slug: 'the-yolk',
        title: 'The Yolk',
        image: '/images/feature-theyolk-menu.jpg',
        category: ['Graphic Design', 'Menu Design', 'Branding'],
        projectType: 'Branding & Menu Design',
        timeline: 'May – July 2024',
        role: 'Branding Designer',
        tools: 'Illustrator – Photoshop',
        mandate: 'The project involved creating a modern, vibrant branding concept for a new restaurant specializing in breakfast and brunch, along with a menu design that reflected the restaurant’s fresh, organic approach.',
        overview: 'The Yolk brand aims to evoke a sense of warmth and comfort, using bright, sunny colors and a playful, yet refined, design. The menu design is clean and easy to read, with icons that correspond to different food categories, while the branding extends to packaging and social media materials.',
        gallery: [
            '/images/ao-magazine-mockup.jpg',
            '/images/Front-back.jpg',
            '/images/Magazine-Pages-1-2.jpg',
            '/images/Magazine-Pages-3-4.jpg',
            '/images/Magazine-Pages-5-6.jpg',
            '/images/Magazine-Pages-7-8.jpg',
            '/images/Magazine-Pages-9-10.jpg',
            '/images/Magazine-Pages-3-4.jpg',
        ]
    }
];

export default posts;