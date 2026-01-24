"use client"

import LogoLoop from '@/components/LogoLoop'

export default function LogoLooper() {
    const logos = [
        { src:'/assets/armphils.jpg', title: "ArmPhils", href: "#" },
        { src:'/assets/fal.png', title: "Filipino Armwrestling League", href: "#" },
        { src:'/assets/id/dxu.png', title: "Delta Xi Upsilon Fraternity", href: "#" },
    ]
    return (
        <LogoLoop
            logos={logos}
            speed={50}
            direction="left"
            logoHeight={120}
            gap={150}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="transparent"
            ariaLabel="Brotherhood partners"
            
        />
    )
}
