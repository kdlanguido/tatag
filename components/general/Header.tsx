import Link from 'next/link';
import MobileNavbar from './MobileNav';
import { Button } from '../ui/button';
import { Quicksand, UnifrakturMaguntia} from 'next/font/google';

export interface NavLinksI {
    path: string;
    title: string
}

export const headingFont = Quicksand({
  subsets: ["latin"],
  weight: "400"
})

export const headerFont = UnifrakturMaguntia({
  subsets: ["latin"],
  weight: "400"
})

export default function Header() {

    const navLinks: NavLinksI[] = [
        {
            path: "/",
            title: "Home"
        },
        // {
        //     path: "/about-us",
        //     title: "About Us"
        // },
        // {
        //     path: "/who-we-are",
        //     title: "Who We Are"
        // },
        // {
        //     path: "/chapters",
        //     title: "Chapters"
        // },
        // {
        //     path: "/register",
        //     title: "Join Us"
        // },
        {
            path: "/login",
            title: "Login"
        },
    ]

    return (
        <div className='absolute top-0 w-full lg:px-30 py-5'>
            <div className='hidden lg:flex justify-between items-center bg-transparent'>
                <h1 className={`${headerFont.className} text-2xl font-semibold text-[#E4BD13]`}>
                    Titan Arms Brotherhood
                </h1>
                <div>
                    {navLinks.map((link, index) =>
                        <Button asChild variant="ghost" key={index} className={`${headingFont.className}  text-md  hover:bg-[#F5EAAD] font-semibold text-[#E4BD13]`}>
                            <Link href={link.path} >{link.title}</Link>
                        </Button>
                    )}
                </div>
            </div>

            <MobileNavbar navLinks={navLinks} />
        </div >
    )
}
