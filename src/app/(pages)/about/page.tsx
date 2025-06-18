import React from 'react';
import CardsSection from '@/components/CardsSection';
import { cardsData} from '@/data/cardsdata';
import Link from 'next/link';

export async function generateMetadata() {
  return {
    title: "About Us - Techryzer",
    description:
      "Discover Techryzer’s mission to simplify business challenges through web development, AI integrations, and innovative products. Explore our values, industries we serve, and how we empower digital transformation.",
    openGraph: {
      title: "About Us - Techryzer",
      description:
        "Explore Techryzer's journey and expertise in delivering cutting-edge web and AI solutions. Learn how we prioritize quality, innovation, and customer satisfaction.",
      url: `${process.env.NEXT_PUBLIC_URL}/about`,
      images: [
        {
          url: "/logo.jpg",
          width: 400,
          height: 400,
          alt: "About Techryzer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "About Us - Techryzer",
      description:
        "Learn more about Techryzer, your trusted partner in web and AI innovations. Discover our mission, values, and services tailored to meet your needs.",
      images: ["/logo.jpg"],
    },
  };
}

const About = () => {
  return (
    <>
      {/* Custom Hero Section */}
      <section className="w-full px-6 md:px-20 py-16 bg-gradient-to-b from-blue-900 to-transparent text-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h1>
          <p className="text-lg leading-relaxed">
            Techryzer was founded with a bold goal — to solve real-world business challenges using the power of modern web technologies and AI-driven automation. We&apos;re a digital-first startup passionate about creating smart, scalable, and innovative solutions that make life easier for individuals, freelancers, and businesses alike.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Beyond delivering high-quality services, we&apos;re building products that help people with everyday digital tasks — whether it&apos;s managing workflows, automating repetitive processes, or launching powerful online platforms.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full px-6 md:px-20 py-16 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
          <p className="text-lg leading-relaxed mb-10">
            At Techryzer, we stand by principles that guide everything we do.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {["Quality", "Transparency", "Speed", "Innovation", "Customer Satisfaction", "Technology for All"].map((value, idx) => (
              <div key={idx} className="border-darkblue border-2 hover:bg-darkblue/20 hover:border-transparent rounded-xl cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-gray-900 p-6 shadow-md transition-all duration-200">
                <h3 className="text-xl font-semibold mb-2">{value}</h3>
                <p className="text-sm text-lightwhite">
                  {value === "Quality" && "Delivering top-notch digital solutions that exceed expectations."}
                  {value === "Transparency" && "Clear communication and honest processes in every collaboration."}
                  {value === "Speed" && "Fast, efficient, and on-time delivery without compromise."}
                  {value === "Innovation" && "Using the latest tech and creative thinking to stay ahead."}
                  {value === "Customer Satisfaction" && "Putting client success at the center of everything we build."}
                  {value === "Technology for All" && "Making advanced digital tools accessible to businesses of every size."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="w-full px-6 md:px-20 py-16 bg-darkblue/20 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Work With</h2>
          <p className="text-lg leading-relaxed mb-6">
            From fast-moving startups to established organizations, we help a wide range of industries:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-md font-outfit font-medium text-lightwhite">
            <span>🚀 Startups</span>
            <span>🛒 E-commerce</span>
            <span>🏥 Healthcare</span>
            <span>📈 Agencies</span>
            <span>🧠 AI Innovators</span>
            <span>🎓 EdTech</span>
            <span>👔 Small Businesses</span>
            <span>⚙️ Automation Teams</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-6 md:px-20 py-16 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Turn Your Vision into Reality?</h2>
          <p className="text-lg mb-6">
            Whether you&apos;re looking to build a web app, automate your business with AI, or bring a digital product to life — we&apos;re here to help. Let&apos;s create something amazing together.
          </p>
          <div className='w-full gird md:grid-cols-2 grid-cols-1 gap-x-2'>
          <Link href="/contact" className="inline-block bg-lightwhite text-darkblue px-6 py-3 rounded-full font-semibold hover:bg-white transition mx-2">
            Let&apos;s Talk
          </Link>
          <Link href="/quote" className="inline-block bg-lightwhite text-darkblue px-6 py-3 rounded-full font-semibold hover:bg-white transition mx-2">
            Get a Quote
          </Link>
          </div>
        </div>
      </section>

      <CardsSection title="Why Choose Techryzer!" btnText="Connect Now" btnLink="/contact" cards={cardsData} />
    </>
  );
};

export default About;
