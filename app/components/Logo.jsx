import React from 'react'
const myFont = localFont({ src: "../../fonts/Blanka-Regular.otf" })
import localFont from 'next/font/local'

const Logo = ({onSidebar = false}) => {
    return (
        <div className='select-none'>
            <h3 className={`${myFont.className} ${onSidebar ? 'text-center' : ''} text-3xl tracking-wider text-white`}>TechRyzer</h3>
            <p className={`${onSidebar? 'hidden' : ''} text-xs text-primary-300 pt-2`}>BUILDING INTELLIGENT SOLUTIONS</p>
        </div>
    )
}

export default Logo
