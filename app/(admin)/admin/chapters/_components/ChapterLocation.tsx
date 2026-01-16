import { GoogleMapsEmbed } from '@next/third-parties/google'

export default function ChapterLocation({ hqAddress }: { hqAddress: string }) {
    return (
        <GoogleMapsEmbed
            apiKey={process.env.GOOGLE_MAPS_EMBED ?? ""}
            height={250}
            width="100%"
            mode="place"
            q={hqAddress}
        />
    )
}