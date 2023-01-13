import { useEffect } from "react";
import { useRouter } from "next/router"

export default function DetailedImage({ props }: { props: DataType }) {
    const router = useRouter();

    useEffect(() => {
        router.back();
    }, [])

    return (
        <div>

        </div>
    )
}

interface DataType {

}

import { GetServerSideProps } from "next"

const getServerSideProps: GetServerSideProps<DataType> = async (context) => {
    const { uuid } = context.params!;
    console.log(uuid)
    return {
        props: {

        }
    }
}