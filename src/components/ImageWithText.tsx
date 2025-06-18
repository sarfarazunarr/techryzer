import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const ImageWithText = ({ imgUrl, alt, content, revert = false, btn = "" }: { imgUrl: string, alt: string, content: string, revert?: boolean, btn?: string }) => {
    return (
        <section className={`w-full md:w-2/3 mx-auto p-10 flex justify-center items-center flex-col md:flex-row gap-4 ${revert && 'flex-col-reverse md:flex-row-reverse'}`}>
            <Image src={imgUrl} alt={alt} height={350} width={350} />
            <div className=" flex flex-col">
                <div className="w-10 ml-4 h-2 border-2 border-white"></div>
                <p className="py-2 md:p-4 text-xl text-lightwhite font-normal font-manrop leading-relaxed">{content}</p>
                {btn && <Link href={"/services"} className="primarybtn w-44 flex items-center justify-center gap-3 group">
                    View Services!{" "}
                    <BsArrowRight
                        size={20}
                        className="group-hover:translate-x-3 transition-transform duration-300 ease-linear"
                    />
                </Link>}
                <div className="w-10 ml-4 h-2 border-2 border-white"></div>
            </div>
        </section>
    )
}

export default ImageWithText
