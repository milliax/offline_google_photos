// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from "node:fs"
import path from "path"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<fs.Dirent[] | string>
) {
  //const image_path = path.join(process.env.NODE_ENV_IMAGE_DIR,)

  fs.readdir(process.env.NODE_ENV_IMAGE_DIR, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.log(err)
      return res.status(502).send("Internal Error")
    } else {
      const toReturn:fs.Dirent[] = files.filter((album)=>{
        return !album.name.startsWith("Photos from")
      })


      return res.status(200).json(toReturn);
    }
  })
}
