'use client';

import { useRef } from 'react';
import { toPng } from 'html-to-image';
import { Alegreya_SC, Alumni_Sans } from 'next/font/google';
import { formatDateToString } from '@/lib/helpers';
import { Button } from '@/components/ui/button';

const alegreyaSC = Alegreya_SC({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
});

const alumniSans = Alumni_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
});

interface IDCardProps {
    session: any;
    profile: any;
    batch: any;
    chapter: any;
}

export default function IdCard({ session, profile, batch, chapter }: IDCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    const userImage = session?.user.image
        ? session.user.image.replace('s96-c', 's400-c')
        : '/assets/dummy.png';

    const handleDownload = async () => {
        if (!cardRef.current) return;
        await document.fonts.ready;
        const dataUrl = await toPng(cardRef.current, { cacheBust: true });
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = `${profile.nickname}-ID.png`;
        link.click();
    };

    const Banner = () => (
        <div className='mt-5 flex justify-between items-start'>
            <img
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
                <div className={`text-[25px] text-[#E8BF01] tracking-wide w-[300px] text-center flex flex-col ${alegreyaSC.className}`}>
                    {chapter.name}
                    {chapter.name.toLowerCase() === 'titan arms taguig' && <span>Main Chapter</span>}
                </div>
            </div>
            <img
                src="/assets/id/dxu.png"
                alt="Titan Arms Seal"
                width={200}
                height={200}
                className="h-[120px] w-auto"
            />
        </div>
    );

    const Details = () => (
        <div className='mt-5 flex justify-between items-start'>
            <img
                src={userImage}
                alt="Member Photo"
                width={150}
                height={150}
                className="w-auto h-[150px] object-cover border"
            />

            <div className="flex flex-col items-start gap-3">
                <span className={`text-[#E8BF01] text-xl tracking-wide uppercase ${alumniSans.className}`}>
                    ID No: TATAG - {profile._id?.slice(19)}
                </span>
                <span className={`text-[#E8BF01] text-xl tracking-wide ${alumniSans.className}`}>
                    Full name: {session?.user.name}
                </span>
                <span className={`text-[#E8BF01] text-xl tracking-wide capitalize ${alumniSans.className}`}>
                    Nickname: {profile.nickname}
                </span>
                <div className='flex gap-3'>
                    <span className={`text-[#E8BF01] text-xl tracking-wide ${alumniSans.className}`}>
                        Batch: {batch.name}
                    </span>
                    <span className={`text-[#E8BF01] text-xl tracking-wide ${alumniSans.className}`}>
                        Member Since: {formatDateToString(profile.membership.memberSince)}
                    </span>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <img
                    src="/assets/logo.png"
                    alt="Chapter Seal"
                    width={200}
                    height={200}
                    className="h-[140px] w-auto"
                />
                <span className={`text-[#E8BF01] text-xs ${alegreyaSC.className}`}>Chapter Seal</span>
            </div>
        </div>
    );

    return (
        <div className='p-5 flex flex-col gap-5'>
            <div className="overflow-x-auto w-full">
                <div className="inline-flex gap-4">
                    <div
                        ref={cardRef}
                        className="relative flex-shrink-0 h-[410px] w-[750px] rounded overflow-hidden"
                    >
                        <img
                            src="/assets/id/card-bg.webp"
                            className="absolute inset-0 w-full h-full object-cover"
                            crossOrigin="anonymous"
                        />

                        <div className="relative z-10 px-8 flex flex-col gap-3">
                            <Banner />
                            <Details />
                            <h1 className={`text-[#E8BF01] text-3xl tracking-widest mx-auto mt-3 ${alegreyaSC.className}`}>
                                MEMBER IDENTIFICATION CARD
                            </h1>
                        </div>
                    </div>

                </div>
            </div>


            <Button
                className='w-50'
                onClick={handleDownload}
            >
                Download ID Card
            </Button>
        </div>
    );
}
