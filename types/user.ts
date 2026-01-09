type RegisterUserState = {
    emailErrorMsg: string;
    nicknameErrorMsg: string;
    success: boolean;
};

type ProfileUpdateInitState = {
    weight: string;
    nickname: string;
    success: boolean;
};

type CreateMembershipUpdateInitState = {
    success: boolean;
    status: number;
    previousBatchId: string;
    previousChapterId: string
}

type SubmitClubApplicationInitState = {
    success: boolean;
    status: number;
}

type GenericInitState = {
    success: boolean | null
}

type MemberShipUpdateLogCustomType = {
    _id?: string;
    batchId: string;
    userId: {
        email: string,
        nickname: string
    };
    status: string;
    createdAt?: Date;
    updatedAt?: Date;
    cancelReason?: string;
}

type MembershipI = {
    chapterId: string,
    batchId: string,
    memberStatus: string,
    memberLevel: string,
    memberSince: Date,
    createdAt?: Date,
    updatedAt?: Date
}

interface MembershipIWithBatchName extends MembershipI {
    batchName: string
}

interface UserIUI {
    _id?: string,
    email: string,
    nickname: string,
    weight: string,
    membership: MembershipI,

}

interface ApplicantInformationI extends UserIUI {
    chapter: ChapterICustom
}