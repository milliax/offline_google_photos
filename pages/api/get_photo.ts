import type { NextApiRequest, NextApiResponse } from "next"
import path from "path"
import fs from "fs"

// interface NNextApiRequest extends NextApiRequest {
//     location: string[],
//     root: string,
// }

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Buffer>
) {
    const { root, location } = req.query;
    let filePath: string;
    if (typeof location === "string") {
        filePath = path.join((root as string), location)
    } else {
        filePath = path.join((root as string), ...(location as string[]));
    }
    // console.log("file path", filePath)
    const imageBuffer = fs.readFileSync(filePath)

    res.setHeader("Content-Type", "image/jpg")
    res.send(imageBuffer)
}