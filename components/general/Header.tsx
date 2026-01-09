import Link from 'next/link';
import MobileNavbar from './MobileNav';
import { Button } from '../ui/button';

export interface NavLinksI {
    path: string;
    title: string
}

export default function Header() {

    const navLinks: NavLinksI[] = [
        {
            path: "/",
            title: "Home"
        },
        {
            path: "/about-us",
            title: "About Us"
        },
        {
            path: "/who-we-are",
            title: "Who We Are"
        },
        {
            path: "/chapters",
            title: "Chapters"
        },
        {
            path: "/register",
            title: "Join Us"
        },
        {
            path: "/login",
            title: "Login"
        },
    ]

    return (
        <div>
            <div className='hidden lg:flex justify-between p-5 border-b border-zinc-800'>
                <h1 className={`text-xl font-semibold text-[#E4BD13]`}>
                    Titan Arms Brotherhood
                </h1>
                <div>
                    {navLinks.map((link, index) =>
                        <Button asChild variant="ghost" key={index} className={`hover:bg-[#F5EAAD] text-sm font-semibold text-[#E4BD13]`}>
                            <Link href={link.path} >{link.title}</Link>
                        </Button>
                    )}
                </div>
            </div>

            <MobileNavbar navLinks={navLinks} />
        </div >
    )
}
