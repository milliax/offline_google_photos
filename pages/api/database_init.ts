import { NextApiRequest, NextApiResponse } from "next";
import Prisma from "../../components/prisma"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { root } = req.query
    if(root === undefined)
        return res.status(422)
    const prisma = Prisma(typeof root === "string" ? root : root[0])
    
    return res.status(200);
}