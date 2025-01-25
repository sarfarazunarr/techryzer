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
        <h3 className="text-center text-lightwhite opacity-65 font-manrop font-normal md:text-xl tracking-wider leading-relaxed">Developing Webs That Benefits Humans!</h3>
        <div className="flex justify-center items-center gap-2">
          <div className="flex mx-3 md:mx-32 justify-start gap-y-5 my-10 flex-col">
            <h1 className="font-outfit text-left text-5xl font-bold text-white">
              We create stunning web solutions that make your visions to reality!
            </h1>
            <p className="text-lightwhite md:text-lg leading-relaxed">Techryzer provides web development, App Development and AI Integrations solutions and with that we develop and deploy projects that makes your life easier!</p>
            <Link href={"/contact"} className="primarybtn w-40 flex items-center justify-center gap-3 group">Connect Us <BsArrowRight size={20} className="group-hover:translate-x-3 transition-transform duration-300 ease-linear" /></Link>
          </div>
          <Image src={"/on_chain.png"} width={600} height={600} alt="hero glob" className="hidden md:block" />
        </div>
      </section>

      <ImageWithText imgUrl="/teamwork.jpg" alt="teamwork" content="We build intelligent solutions that makes Web more interesting and helpful. We are also working on some awesome products that will make your digital life more interesting. Techryzer also provide Web and App Development Services so that your business could be stable in digital world! Need any Web / App or other Tech related service just connect us. Techryzer has many other freelancers connected that has amazing specializations in thier fields!" />

      <CardsSection title="Why Choose Techryzer!" btnText="Connect Now" btnLink="/contact" cards={cardsData} />
      <ImageWithText imgUrl="/freelancerhub.jpg" alt="freelancing" revert={true} content="Our Team is thinking to create a freelancing portal with Techryzer and create amazing products that help freelancers to work effieciently. Soon we will publish a new platform where you can create your profiles, show your portfolios and can share with anyone and can get clients. We are also working on some awesome tools that can support freelancers!" />

      <Portfolio length={8} />
    <CardsSection title="What people say about Techryzer!" btnText="Know About Us!" btnLink="/about" cards={testimonialData} />
    </>
  );
}
