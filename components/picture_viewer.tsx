import { useEffect, useState } from "react"

export default function Picutures({ mode }: { mode: string }) {
    const [albums, setAlbums] = useState<any[] | []>([]);

    const fetch_info = async () => {
        const res = await fetch("/api/get_albums")
        const json = await res.json();
        // console.log(json)
        setAlbums(json)
    }

    useEffect(() => {
        fetch_info()
    }, [])

    return (
        <div>
            {albums.map((album)=>(
                <div key={album.name}>{album.name}</div>
            ))}
        </div>
    )
}