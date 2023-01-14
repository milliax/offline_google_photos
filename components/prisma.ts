import { PrismaClient } from '@prisma/client'

export default (dbURL: string) => {
    return new PrismaClient({
        datasources: {
            db: {
                url: dbURL
            }
        },
        log: process.env.NODE_ENV === "development" ? ["query", "info"] : []
    })
}