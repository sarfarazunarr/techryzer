import Link from 'next/link'
import React from 'react'
import CardIcon from './CardIcon'

const CardsSection = ({title, btnText, btnLink, cards}: {title: string, btnText:string, btnLink: string, cards: {icon: JSX.Element, title: string, content: string}[]}) => {
    return (
        <section className="w-full flex justify-center border-y border-darkwhite my-10">
            <div className="flex w-1/2 justify-center items-center flex-col gap-y-3">
                <h3 className="text-4xl text-left font-bold text-white">{title}</h3>
                <Link href={btnLink} className="primarybtn">{btnText}</Link>
            </div>
            <div className={"grid grid-cols-2 w-1/2"}>
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
