import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'



const Navbar = () => {
    const { pathname } = useRouter();
    

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
                        <span className="text-xl text-center py-4 font-bold">Morty!</span>
                    </a>
                </Link>

                <div className="hidden md:flex items-center gap-4">
                    {
                        navItems.map((item, index) => (

                            <NavItem url={item.url} key={index} pathname={pathname}>{item.title}</NavItem>
                        ))
                    }
                </div>
                <button onClick={() => {}}>Mode</button>
            </div>
        </nav>
    )
}


const NavItem = ({ children, url, pathname }) => {
    return (
        <Link href={url}>
            <a className={`flex items-center justify-center gap-2 font-bold opacity-50 group ${(pathname === url) && 'opacity-100'}`}>
                 <span className={`opacity-40 group-hover:opacity-80 transition-all text-white'}`}>&#8594;</span> {children}
            </a>
        </Link>
    )
}

export default Navbar;