import { Button } from "@/components/ui/button";
import { Quicksand, UnifrakturMaguntia } from "next/font/google"

export const headingFont = Quicksand({
  subsets: ["latin"],
  weight: "400"
})

export const bodyFont = UnifrakturMaguntia({
  subsets: ["latin"],
  weight: "400"
})


import { LogoSwapper } from "./_components/LogoSwapper";
import Link from "next/link";
import ChapterGlobe from "./_components/ChapterGlobe";
import LogoLooper from "./_components/LogoLooper";
import FriendshipImage from "./_components/FriendshipImage";
import { FaqAccordion } from "./_components/FaqAccordion";
import { CardHighlight } from "./_components/CardHighlight";

export default function Home() {
  return (
    <div className="min-h-screen w-full p-5 flex flex-col gap-15 mt-30 md:mt-20">
      <div className="flex flex-col-reverse lg:flex-row justify-between w-full gap-10 lg:mt-0 lg:px-30 xl:px-70 ">
        <div className="flex flex-col justify-center gap-3 items-center lg:items-start">
          <p className={`${bodyFont.className} text-5xl xl:text-7xl`}>Brotherhood</p>
          <p className={`${bodyFont.className} text-5xl xl:text-7xl`}>For</p>
          <p className={`${bodyFont.className} text-5xl xl:text-7xl`}>Armwrestling</p>
          <Button className="lg:self-start w-[140px] lg:w-[250px] bg-[#E8BF02] mt-4" asChild>
            <Link href="/register" >
              Join Us
            </Link>
          </Button>
        </div>
        <LogoSwapper
          images={[
            "/assets/logo.png",
            "/assets/este.png",
            "/assets/katuparan.png",
            "/assets/morning.png",
          ]}
          interval={5000}
          className="h-[200px] w-[200px]  lg:h-[300px] lg:w-[300px] xl:h-[400px] xl:w-[400px] self-center"
        />
      </div>

      <div className="px-0 lg:px-30 flex flex-col gap-15 h-max">
        <p className={`${headingFont.className} text-start lg:text-justify`}>
          <span className="font-bold mr-2">Titan Arms Brotherhood</span>
          is a distinguished brotherhood of disciplined armwrestlers who uphold respect both on and off the table. The organization is committed to promoting and expanding the sport of armwrestling in the Philippines, providing a safe and supportive environment for individuals who wish to explore the sport without the fear of injury. Titan Arms has established a structured pathway to ensure that every member develops a solid foundation in armwrestling fundamentals before participating in official table matches.
        </p>

        <div className="flex flex-col">
          <p className={`${headingFont.className} text-2xl font-semibold text-center mb-5`}>
            Friends to All, Enemy to none
          </p>
          <p className={`${headingFont.className} text-start lg:text-justify`}>
            Titan Arms upholds the highest standards of respect toward all individuals, both within and beyond the armwrestling community. Every member is guided and expected to treat others with the same respect and dignity they seek for themselves. This principle is firmly rooted in the organization’s Code of Conduct, which emphasizes respect and discipline as fundamental values that govern the behavior, attitude, and character of all members.
          </p>
        </div>

        <div className="w-full">
          <FriendshipImage />
          <p className={`${headingFont.className} text-start lg:text-justify mt-5`}>
            Titan Arms fosters lifelong friendships built on trust, camaraderie, and shared dedication to the sport. Within the organization, members experience a strong sense of brotherhood and unity that extends beyond competition. These snapshots capture meaningful moments and lasting memories formed through mutual support, discipline, and the bonds forged within the Titan Arms community.
          </p>
        </div>

        <div className="flex flex-col">
          <p className={`${bodyFont.className} text-3xl font-semibold text-center lg:text-start mb-5`}>
            Chapters
          </p>
          <div className="flex xl:justify-between">
            <ChapterGlobe />
            <p className={`${headingFont.className} text-start lg:text-justify hidden xl:block xl:w-[40%] px-7`}>
              Titan Arms currently has five active chapters. You are welcome to browse through each chapter to learn more about them.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <p className={`${bodyFont.className} text-3xl font-semibold text-center lg:text-start mb-5`}>
            Milestones
          </p>
          <div className="w-full flex flex-col gap-5 items-center lg:flex-row xl:gap-15">
            <CardHighlight />
          </div>
        </div>


        <div className="flex flex-col">
          <p className={`${headingFont.className} text-2xl font-semibold text-center mb-5`}>
            Frequently Asked Questions
          </p>
          <div className="w-full lg:w-[50%] mx-auto">
            <FaqAccordion />
          </div>
        </div>

        <div className="flex flex-col">
          <p className={`${bodyFont.className} text-3xl font-semibold text-center lg:text-start mb-5`}>
            Affiliations
          </p>
          <div className="w-full lg:w-[40%] mx-auto">
            <LogoLooper />
          </div>
        </div>


      </div>
    </div >
  )
}
