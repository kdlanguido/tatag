import { create } from "zustand"
import { persist } from "zustand/middleware"
import { UserI } from "@/model/User.model"

interface ChapterState {
    createChapterSelectedFounder: UserI | null,
    chapterFounderFieldIsOpen: boolean,
    chapterLogoEditIsOpen: boolean,

    setChapterSelectedFounder: (createChapterSelectedFounder: UserI | null) => void,
    toggleChapterFounderFieldIsOpen: () => void
    toggleChapterLogoEditIsOpen: () => void
}

export const useChapterStore = create<ChapterState>()(
    persist(
        (set) => ({
            createChapterSelectedFounder: null,
            chapterFounderFieldIsOpen: false,
            chapterLogoEditIsOpen: false,

            setChapterSelectedFounder: (createChapterSelectedFounder) => set({ createChapterSelectedFounder }),

            toggleChapterFounderFieldIsOpen: () =>
                set((state) => ({
                    chapterFounderFieldIsOpen: !state.chapterFounderFieldIsOpen,
                })),

            toggleChapterLogoEditIsOpen: () =>
                set((state) => ({
                    chapterLogoEditIsOpen: !state.chapterLogoEditIsOpen,
                }))
        }),
        {
            name: "UserStorage",
            partialize: (state) => ({}),
        }
    )
)