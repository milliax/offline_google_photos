import Layout from "../../components/layout";

enum Mode {
    Photos = "Photos",
    Discover = "Discover",
    Share = "Share",
    Star = "Star",
    Album = "Album",
    Archieve = "Archieve",
    Trash = "Trash",
  }

export default function Staring(){
    return(
        <Layout mode={Mode.Star}>
            Star
        </Layout>
    )
}