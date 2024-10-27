import Image from "next/image";
import { BiUser } from "react-icons/bi";
import { FaServer, FaSignal } from "react-icons/fa";
import { GiRunningNinja } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";

export const cardsData = [
    {
        icon: <MdSecurity size={25} />,
        title: "Security",
        content: "We implement best security practices in our products as well as in all our web and app development services. To provide best security to our apps."
    },
    {
        icon: <FaServer size={20} />,
        title: "Performance",
        content: "We also focus on high performance of products, apps and webs so that they can perform all thier operations very efficiently and quickly."
    },
    {
        icon: <GiRunningNinja size={30} />,
        title: "Speed",
        content: "We also focus on speed so that products could be loaded as quickly as possible and can get excellent user experince."
    },
    {
        icon: <FaSignal size={20} />,
        title: "Scalable",
        content: "We also focus on scalability of our products so that they can handle large amount of traffic and can work smoothly without being stuck on the way!"
    }
]

export const testimonialData = [
    {
        icon: <BiUser size={20} />,
        title: "Javed",
        content: "Techryzer had an amazing service base where you can get amazing service from them in development. Thier support and product notification is amazing!!!"
    },
    {
        icon: <BiUser size={20} />,
        title: "Sheeraz",
        content: "Techryzer had an amazing service base where you can get amazing service from them in development. Thier support and product notification is amazing!!!"
    },
    {
        icon: <BiUser size={20} />,
        title: "Zahid",
        content: "Techryzer had an amazing service base where you can get amazing service from them in development. Thier support and product notification is amazing!!!"
    },
]