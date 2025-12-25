import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "Sibna Protocol",
    description: "The Trust-No-One Communication Standard",
    lang: 'en-US',
    lastUpdated: true,
    cleanUrls: true,

    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'theme-color', content: '#02569B' }],
    ],

    themeConfig: {
        logo: '/logo.png',
        siteTitle: 'Sibna Protocol v2',

        nav: [
            { text: 'Guide', link: '/introduction/philosophy' },
            { text: 'Protocol', link: '/protocol/specs' },
            { text: 'SDKs', link: '/sdk/python' },
            { text: 'GitHub', link: 'https://github.com/sibna/protocol' }
        ],

        sidebar: {
            '/': [
                {
                    text: 'Introduction',
                    collapsed: false,
                    items: [
                        { text: 'Manifesto & Philosophy', link: '/introduction/philosophy' },
                        { text: 'Architecture Overview', link: '/introduction/architecture' },
                        { text: 'Why Sibna?', link: '/introduction/why-sibna' }, // Extensions for "Huge" feel
                        { text: 'Comparison vs Signal/Matrix', link: '/introduction/comparison' }
                    ]
                },
                {
                    text: 'Core Concepts',
                    collapsed: false,
                    items: [
                        { text: 'Zero Trust Model', link: '/concepts/zero-trust' },
                        { text: 'Offline-First', link: '/concepts/offline-first' },
                        { text: 'Identity Management', link: '/concepts/identity' }
                    ]
                },
                {
                    text: 'Protocol Specification',
                    collapsed: false,
                    items: [
                        { text: 'Cryptographic Primitives', link: '/protocol/primitives' },
                        { text: 'X3DH Key Agreement', link: '/protocol/specs' }, // Existing
                        { text: 'Double Ratchet', link: '/protocol/ratchet' },
                        { text: 'Security Model', link: '/protocol/security' }, // Existing
                        { text: 'Transport Layer Security', link: '/protocol/transport' }
                    ]
                },
                {
                    text: 'SDK Reference',
                    collapsed: true,
                    items: [
                        { text: 'Python (Official)', link: '/sdk/python' },
                        { text: 'JavaScript / React', link: '/sdk/javascript' },
                        { text: 'Flutter / Dart', link: '/sdk/flutter' },
                        { text: 'Rust (Native)', link: '/sdk/rust' }
                    ]
                },
                {
                    text: 'Deployment',
                    collapsed: true,
                    items: [
                        { text: 'Server Setup', link: '/deployment/server' },
                        { text: 'Docker Guide', link: '/deployment/docker' },
                        { text: 'Scaling & HA', link: '/deployment/scaling' }
                    ]
                }
            ]
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/sibna/protocol' },
            { icon: 'twitter', link: 'https://twitter.com/sibna' }
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2024 Sibna Open Source Collective'
        },

        search: {
            provider: 'local'
        },

        outline: 'deep'
    }
})
