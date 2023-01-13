import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/layout";
import Link from "next/link"

enum Mode {
  Photos = "Photos"
}

export default function Home() {
  const rootPathRef = useRef<string>("");
  const [rootPath, setRootPathRef] = useState<string>("");
  const [photoURL, setPhotoURL] = useState<string[][]>();

  const setRootPath = (value: string) => {
    setRootPathRef(value)
    rootPathRef.current = value;
  }

  const getAllPhotos = async () => {
    const root = rootPathRef.current
    if (root === "")
      return
    const urlWithParams = `/api/get_photos_in_folder?${new URLSearchParams({
      path: rootPathRef.current
    })}`
    console.log(root)
    const res = await fetch(urlWithParams)
    const paths = await res.json()
    setPhotoURL(paths)
    // console.log(paths)
  }

  const storageUpdated = () => {
    setRootPath(localStorage.getItem("root") ?? "")
    console.log("detected updated")
  }

  useEffect(() => {
    if (rootPathRef.current !== "") {
      getAllPhotos()
    }
  }, [rootPath])

  useEffect(() => {
    storageUpdated()
    window.addEventListener("itemInserted", storageUpdated);
    return () => {
      window.removeEventListener("itemInserted", storageUpdated);
    }
  }, [])

  return (
    <Layout mode={Mode.Photos}>
      <div className="grid grid-cols-3 w-full gap-3">
        {photoURL && photoURL.map(url => (
          <Link key={`${url}`} className="aspect-video hover:shadow-lg cursor-pointer" href={`/detail/${"path"}`}>
            {/* TODO: variable "path" is not specify */}
            <CustomImage root={rootPath} paths={url} />
          </Link>
        ))}
      </div>
    </Layout>
  )
}


function CustomImage({ paths, root }: { paths: string[] | string, root: string | null }) {
  if (root === null) {
    return <></>
  }
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