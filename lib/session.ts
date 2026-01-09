import { authClient } from "./auth-client"


const getActiveClientSession = async () => {
    const session = await authClient.getSession()
    return session
}

export { getActiveClientSession }