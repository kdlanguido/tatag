
interface PageProps {
    params: Promise<{ id: string }>
}

export default async function page({ params }: PageProps) {

    const { id } = await params;

    return (
        <div>{id}</div>
    )
}
