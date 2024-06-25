import { auth } from "@clerk/nextjs/server"

const adminIds = [
    "user_2hjdcw1HcosvwSZUtOOCNHYvKjE"
]

export const getIsAdmin = async () => {
    const { userId } = await auth();

    if (!userId) {
        return false
    }

    return adminIds.indexOf(userId) !== -1
}