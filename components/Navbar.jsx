import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const navItems = [
        {
            title: 'Characters',
            url: '/',
        },
        {
            title: 'Locations',
            url: '/locations',
        },
        {
            title: 'Episodes',
            url: '/episodes',
        },
        {
            title: '404',
            url: '/404',
        },
    ]


    return (
        <nav className='px-4 py-4 w-full fixed top-0 left-0 bg-slate-900'>
            <div className="flex items-center justify-center md:justify-between max-w-[1020px] mx-auto">
                <Link href="/" >
                    <a className='flex items-center gap-2'>
                        <img src="/morty.svg" width={"50"} height={"50"} alt="Morty Smith icon by Icons8" />
                        <span className="text-xl text-center py-4 font-bold">Rick<span className='bg-gradient-to-l from-slate-50 to-slate-100 bg-clip-text text-transparent font-black'>-nd-</span>Morty!</span>

                    </a>
                </Link>

                <div className="hidden md:flex items-center gap-4">
                    {
                        navItems.map((item, index) => (

                            <NavItem url={item.url} key={index}>{item.title}</NavItem>
                        ))
                    }
{/* 
                    <NavItem url={"/locations"}>Locations</NavItem>
                    <NavItem url={"/episodes"}>Episodes</NavItem>
                    <NavItem url={"/404"}>404</NavItem> */}
                </div>
            </div>
        </nav>
    )
}


const NavItem = ({ children, url }) => {
    return (
        <Link href={url}>
            <a className='flex items-center justify-center gap-2 font-bold'>
                &#8594; {children}
            </a>
        </Link>
    )
}

export default Navbar;