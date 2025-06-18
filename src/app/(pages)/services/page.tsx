import Hero from '@/components/Hero';
import React from 'react';
import { MdWeb } from 'react-icons/md';
import Link from 'next/link';
import { SiRobotframework } from 'react-icons/si';
import { LuWorkflow } from 'react-icons/lu';
import { FaConnectdevelop } from 'react-icons/fa';

export async function generateMetadata() {
  return {
    title: "Services - Techryzer",
    description:
      "Explore Techryzer's core services including web development, AI integrations, app development, and custom automation using n8n. We build high-performance digital solutions that help startups and businesses scale faster.",
    keywords: [
      "Web development",
      "AI agent integration",
      "App development services",
      "n8n automation workflows",
      "AI automation",
      "custom software development",
      "Techryzer services"
    ],
    openGraph: {
      title: "Services - Techryzer",
      description:
        "Techryzer offers full-stack development, AI-driven automation, and custom web & app solutions to help you grow your business efficiently.",
      url: `${process.env.NEXT_PUBLIC_URL}/services`,
      images: [
        {
          url: "/logo.jpg",
          width: 1200,
          height: 630,
          alt: "Techryzer Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Services - Techryzer",
      description:
        "Techryzer delivers expert web, app, and AI automation solutions designed for startups, creators, and businesses.",
      images: ["/logo.jpg"],
    },
  };
}

const Services = () => {
  const service_offered = [
    {
      title: "Web Development",
      content:
        "Responsive, SEO-optimized, and modern websites tailored to your business goals. Built with React, Next.js, and the latest tech stack.",
      icon: <MdWeb size={50} />,
    },
    {
      title: "AI Agent Development",
      content:
        "Integrate AI agents with your website to provide intelligent customer support, chatbots, and other automation solutions.",
      icon: <SiRobotframework size={50} />,
    },
    {
      title: "AI & Automation (n8n)",
      content:
        "Automate repetitive tasks and integrate AI agents using n8n and custom workflows — saving you hours every week.",
      icon: <LuWorkflow size={50} />,
    },
    {
      title: "Custom Projects",
      content:
        "We also build open-source and freemium tools to support the dev and startup ecosystem — or create bespoke platforms from scratch.",
      icon: <FaConnectdevelop size={50} />,
    },
  ]
  return (
    <>
      <Hero
        title="Our Services"
        content="At Techryzer, we craft high-performance websites, intelligent apps, and powerful AI automations. Whether you're a startup or a growing business, we provide the digital tools and infrastructure you need to scale faster, smarter, and more efficiently. We specialize in building scalable digital solutions that combine modern web development, intuitive mobile apps, and powerful AI-driven workflows. Whether you're launching a startup or optimizing an existing system, Techryzer delivers tailored services to bring your vision to life with speed, clarity, and smart automation."
      />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10 text-white text-center mx-10">
          {service_offered.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-800 to-darkblue/40 border border-gray-300 p-6 rounded-lg shadow-md hover:border-transparent hover:shadow-2xl hover:shadow-blue-400 transition-all ease-linear duration-300 hover:scale-110 cursor-pointer group">
              <div className="flex items-center text-lg justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-100 line-clamp-3 group-hover:line-clamp-none">{item.content}</p>
            </div>)
          )}
        </div>

      {/* Lead Magnet Section */}
      <section className="text-white py-16 px-4 md:px-20 text-center rounded-xl mt-10 shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Free 30-Minute Strategy Call</h2>
        <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
          Not sure where to start? Book a free 30-minute strategy session with our founder. We&apos;ll explore your goals and suggest tech solutions that fit — no obligations.
        </p>
        <Link
          href="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full text-lg font-semibold transition-all"
        >
          Claim Your Free Consultation
        </Link>
      </section>
    </>
  );
};

export default Services;
