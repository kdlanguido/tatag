import React from 'react'
import { Alegreya_SC, Alumni_Sans } from 'next/font/google'
import Image from 'next/image'

const alegreyaSC = Alegreya_SC({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

const alumniSans = Alumni_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

export default function page() {

  const data = {
    idNo: 'TATAG-001-001',
    fullName: 'King Dranreb Languido',
    nickName: 'Boss Dran',
    batch: 'Pioneer',
    memberSince: '06/30/2023',
  }


  const Banner = () => {
    return (<div className='mt-5 flex justify-between items-start'>
      <Image
        src="/assets/logo.png"
        alt="Titan Arms Seal"
        width={200}
        height={200}
        className="h-[120px] w-auto"
      />

      <div className="flex flex-col items-center text-center">
        <span className={`text-[#E8BF01] tracking-widest text-[27px] ${alegreyaSC.className}`}>
          Titan Arms Brotherhood
        </span>
        <span className={`text-[30px] text-[#E8BF01] tracking-wide ${alegreyaSC.className}`}>
          Titan Arms Taguig
        </span>
        <span className={`text-xl text-[#E8BF01] tracking-wide ${alegreyaSC.className}`}>
          Main Chapter
        </span>
      </div>

      <Image
        src="/assets/id/dxu.png"
        alt="Titan Arms Seal"
        width={200}
        height={200}
        className="h-[120px] w-auto"
      />
    </div>)
  }

  const Details = () => {
    return (<div className='mt-5 flex justify-between'>
      <Image
        src="/assets/id/sample.jpg"
        alt="Titan Arms Seal"
        width={200}
        height={200}
        className="h-[160px] w-[160px] object-cover border"
      />

      <div className="flex flex-col items-start text-center gap-3">
        <span className={`text-[#E8BF01] text-xl tracking-wide ${alumniSans.className}`}>
          ID No : {data.idNo}
        </span>
        <span className={`text-[#E8BF01] text-xl tracking-wide ${alumniSans.className}`}>
          Full name : {data.fullName}
        </span>
        <span className={`text-[#E8BF01] text-xl tracking-wide ${alumniSans.className}`}>
          Nickname : {data.nickName}
        </span>

        <div className='flex gap-3'>
          <span className={`text-[#E8BF01] text-xl tracking-wide ${alumniSans.className}`}>
            Batch : {data.batch}
          </span>
          <span className={`text-[#E8BF01] text-xl tracking-wide ${alumniSans.className}`}>
            Member Since : {data.memberSince}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <Image
          src="/assets/logo.png"
          alt="Titan Arms Seal"
          width={200}
          height={200}
          className="h-[140px] w-auto "
        />
        <span className={` text-[#E8BF01] text-xs ${alegreyaSC.className}`} >Chapter Seal</span>
      </div>
    </div>)
  }

  return (
    <div className="h-[410px] w-[750px] overflow-hidden bg-[url('/assets/id/card-bg.jpg')] bg-no-repeat bg-cover animate-spin-slow px-8 rounded flex flex-col gap-3 m-5">
      <Banner />
      <Details />
      <h1 className={`text-[#E8BF01] text-3xl tracking-widest mx-auto mt-3 ${alegreyaSC.className}`}>MEMBER IDENTIFICATION CARD</h1>
    </div>
  )
}
