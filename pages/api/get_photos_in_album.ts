import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs"
import path from "path"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { path } = req.query;
    // console.log("root", path)
    try {
        let data = await visitDir(path as string, []);
        // console.log(data);
        res.status(200).json(data);
    } catch (err) {
        console.log(err)
        return res.status(500).send(err);
    }
    // return res.status(200).json([]);
}


const visitDir:string[][] = async (root: string, folder: string[]) => {
    //let dataFound: any[] = []

    let files = await fs.promises.readdir(path.join(root, ...folder))
    return await Promise.all(files.map(async (file) => {
        const route = path.join(root, ...folder, file);
        const stat = await fs.promises.stat(route)
        if (stat.isDirectory()) {
            console.log("directory found")
            let children:string[][] = await visitDir(root, [...folder, file]);
            return children.map((child) => ([...folder, ...child]))
        }
        return [file]
    }))
    
}