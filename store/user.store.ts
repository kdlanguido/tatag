import { create } from "zustand"
import { persist } from "zustand/middleware"
import { UserI } from "@/model/User.model"

interface UserInitState {
    userProfile: UserI | null,
    setUserProfile: (userProfile: UserI | null) => void,
}

export const useUserStore = create<UserInitState>()(
    persist(
        (set) => ({
            userProfile: null,
            setUserProfile: (userProfile) => set({ userProfile }),
        }),
        {
            name: "UserStorage",
            partialize: (state) => ({}),
        }
    )
)