import Layout from "../../components/layout"

enum Mode {
    Discover = "Discover"
}

export default function Discover() {
    return (
        <Layout mode={Mode.Discover}>
            Discover
        </Layout>
    )
}