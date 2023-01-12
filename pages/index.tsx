import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/layout";

enum Mode {
  Photos = "Photos"
}

export default function Home() {
  const rootPath = "C:\\Users\\maxch\\OneDrive - chsivir\\Pictures\\橋本環奈";
  const [photoURL, setPhotoURL] = useState<string[][]>([["573cd2d66a78dffcdddcbf502cd55a81.jpg"]]);

  const getAllPhotos = async () => {
    const res = await fetch(`/api/get_photos_in_album?${new URLSearchParams({
      path: rootPath
    })}`)
    const paths = await res.json()
    setPhotoURL(paths)
    // console.log(paths)
  }

  useEffect(() => {
    getAllPhotos()
  }, [])

  return (
    <Layout mode={Mode.Photos}>
      <div className="grid grid-cols-3 w-full gap-3">
        {photoURL.map(url => (
          <div key={`${url}`} className="aspect-video">
            <CustomImage root={rootPath} paths={url} />
          </div>
        ))}
      </div>
    </Layout>
  )
}


function CustomImage({ paths, root }: { paths: string[] | string, root: string }) {
  const [imageURL, setImageURL] = useState<string>("");

  const updateImageURL = async () => {
    const params = new URLSearchParams()
    params.append("root", root);

    if (typeof paths === "string") {
      params.append("location", paths)
    } else {
      paths.forEach(dir => {
        params.append("location", dir);
      })
    }
    const urlWithParams = `/api/get_photo?${params.toString()}`
    // const res = await fetch(urlWithParams)
    setImageURL(urlWithParams)
  }
  useEffect(() => {
    updateImageURL()
  }, [])

  return (
    <img src={imageURL} loading="lazy" className="object-fill" />
  )
}