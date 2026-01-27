import Link from 'next/link';
import MobileNavbar from './MobileNav';
import { Button } from '../ui/button';
import { Quicksand, UnifrakturMaguntia } from 'next/font/google';
import { navLinks } from '@/lib/contants';

export const headingFont = Quicksand({
    subsets: ["latin"],
    weight: "400"
})

export const headerFont = UnifrakturMaguntia({
    subsets: ["latin"],
    weight: "400"
})

export default async function Header() {
    return (
        <div className='absolute top-0 w-full lg:px-30 py-5'>
            <div className='hidden lg:flex justify-between items-center bg-transparent'>
                <h1 className={`${headerFont.className} text-2xl font-semibold text-[#E4BD13]`}>
                    Titan Arms Brotherhood
                </h1>
                <div>
                    {navLinks.map((link, index) => {
                        return (
                            <Button asChild variant="ghost" key={index} className={`${headingFont.className}  text-md  hover:bg-[#F5EAAD] font-semibold text-[#E4BD13]`}>
                                <Link href={link.path} >{link.title}</Link>
                            </Button>
                        )
                    })}
                </div>
            </div>
            <MobileNavbar navLinks={navLinks} />
        </div >
    )
}
