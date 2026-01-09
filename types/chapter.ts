
type UpdateChapterState = {
    success: boolean | null
}

type FounderType = {
    nickname: string;
    _id?: string
}

type ChapterICustom = {
    _id: string;
    name: string;
    logo: string;
    logoFileKey: string;
    slogan: string;
    region: string;
    founder: FounderType
    establishedYear: Date;
    hqAddress?: string;
}