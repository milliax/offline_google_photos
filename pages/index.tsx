import React from "react";
import Layout from "../components/layout";

enum Mode {
  Photos = "Photos",
  Discover = "Discover",
  Share = "Share",
  Star = "Star",
  Album = "Album",
  Archieve = "Archieve",
  Trash = "Trash",
}

export default function Home() {
  return (
    <Layout mode={Mode.Photos}>
      
    </Layout>
  )
}
