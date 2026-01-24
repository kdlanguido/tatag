"use client"

import { useBreakpoint } from '@/components/helper';
import InfiniteMenu from '@/components/InfiniteMenu';

export default function ChapterGlobe() {
    const items = [
        {
            image: '/assets/logo.png',
            link: '#',
            title: 'TATAG-Main',
            description: 'Titan Arms Taguig'
        },
        {
            image: '/assets/maydolong.jpg',
            link: '#',
            title: 'ESTA-Maydolong',
            description: 'Titan Arms Eastern Samar : Maydolong Chapter'
        },
        {
            image: '/assets/este.png',
            link: '#',
            title: 'ESTA-Llorente',
            description: 'Titan Arms Eastern Samar : Llorente Chapter'
        },
        {
            image: '/assets/morning.png',
            link: '#',
            title: 'TATAG-Morning Sun',
            description: 'Titan Arms Taguig : Morning Sun Chapter'
        },
        {
            image: '/assets/katuparan.png',
            link: '#',
            title: 'TATAG-Katuparan',
            description: 'Titan Arms Taguig : Katuparan Chapter'
        },

    ];

    return (
        <div className='relative h-[300px] w-full lg:h-[400px] xl:w-[60%]'>
            <InfiniteMenu items={items}
                scale={.8}
            />
        </div>
    )
}
