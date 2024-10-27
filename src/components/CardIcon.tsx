import React from 'react'

const CardIcon = ({icon, title, content}: {icon: JSX.Element, title: string, content: string}) => {
    return (
        <div className="w-full flex flex-col group hover:bg-[#040494] justify-center p-5 border border-darkwhite items-center transition-colors duration-200 ease-linear cursor-pointer">
            <div className=" group-hover:scale-125 transition-transform duration-300 ease-linear text-white">{icon}</div>
            <h3 className="text-lg font-semibold text-lightwhite py-4 font-outfit">{title}</h3>
            <p className="font-manrop text-lightwhite text-center">{content}</p>
        </div>
    )
}

export default CardIcon
