import Link from 'next/link'
import React from 'react'
import CardIcon from './CardIcon'

const CardsSection = ({title, btnText, btnLink, cards}: {title: string, btnText:string, btnLink: string, cards: {icon: JSX.Element, title: string, content: string}[]}) => {
    return (
        <section className="w-full flex flex-col md:flex-row justify-center border-y border-darkwhite my-10">
            <div className="flex w-full md:w-1/2 my-5 md:my-0 justify-center items-center flex-col gap-y-3">
                <h3 className="text-3xl pt-10 md:pt-0 md:text-4xl text-center md:text-left font-bold text-white">{title}</h3>
                <Link href={btnLink} className="primarybtn">{btnText}</Link>
            </div>
            <div className={"grid grid-cols-1 md:grid-cols-2 w-full md:w-1/2"}>
                {cards.map((card, index) => {
                    return (
                        <CardIcon icon={card.icon} title={card.title} content={card.content} key={index} />
                    )
                })}
                
            </div>
        </section>
    )
}

export default CardsSection
