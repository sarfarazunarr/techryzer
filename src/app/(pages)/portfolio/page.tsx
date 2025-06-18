import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import React from 'react'

export async function generateMetadata() {
    return {
        title: "Portfolio - Techryzer",
        description:
            "Explore Techryzer's diverse portfolio of AI agents, full-stack web apps, automation tools, and creative development projects built for real-world impact.",
        keywords: [
            "Techryzer projects",
            "Web development portfolio",
            "AI agent portfolio",
            "n8n automation examples",
            "Open source apps",
            "Startup tech solutions",
            "Full stack projects"
        ],
        openGraph: {
            title: "Portfolio - Techryzer",
            description:
                "Take a look at Techryzer's project portfolio featuring AI agents, custom apps, and full-stack tools crafted to empower startups and creators.",
            url: `${process.env.NEXT_PUBLIC_URL}/portfolio`,
            images: [
                {
                    url: "/logo.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Techryzer Portfolio",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Portfolio - Techryzer",
            description:
                "Explore the full range of web, AI, and automation projects Techryzer has delivered for startups, enterprises, and indie creators.",
            images: ["/logo.jpg"],
        },
    };
}

const PortfolioPage = () => {
    return (
        <div>
            <Hero
                title="Our Project Portfolio"
                content="Discover the powerful tools and applications we've built at Techryzer — from AI agents and automation workflows to complete SaaS platforms and responsive websites. Our portfolio showcases real-world impact and technical excellence, combining creativity, performance, and smart design. Every project reflects our mission to empower startups and businesses with scalable, intelligent digital solutions."
            />
            <Portfolio />
        </div>
    )
}

export default PortfolioPage
