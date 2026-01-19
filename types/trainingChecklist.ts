import { TrainingChecklistI } from "@/model/TrainingChecklist.model";

export type TrainingChecklistICustom = Omit<TrainingChecklistI, 'approvedBy'> & {
    approvedBy?: {
        nickname: string
    }
}