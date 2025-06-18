import CardsSection from "@/components/CardsSection";
import ImageWithText from "@/components/ImageWithText";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { cardsData, testimonialData } from "@/data/cardsdata";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <>
      <section className="w-full pt-16 p-2 md:p-10">
        <h3 className="text-center text-lightwhite opacity-65 font-manrop font-normal md:text-xl tracking-wider leading-relaxed">
          Helping startups & businesses launch AI-powered web apps and automations — faster and smarter.
        </h3>
        <div className="flex justify-center items-center gap-2">
          <div className="flex mx-3 md:mx-32 justify-start gap-y-5 my-10 flex-col">
            <h1 className="font-outfit text-left text-5xl font-bold text-white">
              We build web, AI, and automation solutions that turn your ideas into digital success.
            </h1>
            <p className="text-lightwhite md:text-lg leading-relaxed">
              At Techryzer, we specialize in web and app development, AI agent integration, and n8n automation. Our mission: to save you time, boost performance, and deliver stunning results.
            </p>
            <Link href={"/quote"} className="primarybtn w-44 flex items-center justify-center gap-3 group">
              Get a Quote!{" "}
              <BsArrowRight
                size={20}
                className="group-hover:translate-x-3 transition-transform duration-300 ease-linear"
              />
            </Link>
          </div>
          <Image
            src={"/on_chain.png"}
            width={600}
            height={600}
            alt="AI and automation illustration"
            className="hidden md:block"
          />
        </div>
      </section>

      <ImageWithText
        imgUrl="/teamwork.jpg"
        alt="teamwork"
        content="We create intelligent, modern solutions that make the web more helpful and human-centric. Whether you need a high-performance website, a mobile app, or integrated AI workflows — Techryzer delivers. We're also building unique digital tools and collaborating with expert freelancers to provide full-spectrum tech solutions. Need help? Let’s build something impactful together."
        btn={"show"}
      />

      <CardsSection
        title="Why Choose Techryzer?"
        btnText="Connect Now"
        btnLink="/contact"
        cards={cardsData}
      />

      <Portfolio length={8} />

      <CardsSection
        title="What People Say About Techryzer"
        btnText="Know About Us!"
        btnLink="/about"
        cards={testimonialData}
      />
    </>
  );
}
