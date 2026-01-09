import { z } from "zod";

export const ChapterSchema = z.object({
    name: z.string().min(2, "Name is too short"),
    logo: z.string().min(2, "Logo must be a valid URL"),
    slogan: z.string().min(3, "Slogan is too short"),
    region: z.string().min(2, "Region is required"),
    chapterCode: z.string().min(2, "Region is required")
});

export const MemberSchema = z.object({
    nickName: z.string().min(2, "Nickname is too short").regex(/^[A-Za-z ]+$/, "Nickname must contain only letters (A–Z)"),
    email: z.string().email("Please enter a valid email"),
    fullName: z.string().min(2, "Full Name is too short").regex(/^[A-Za-z ]+$/, "Nickname must contain only letters (A–Z)"),
    chapter: z.string().min(2, "Chapter is too short"),
    memberStatus: z.string().min(2, "Member status is too short")
})

export const ApplicantTrainingSchema = z.object({
    title: z.string().min(2, "Title is too short"),
    description: z.string().min(2, "Description is too short"),
    orderNumber: z.number("Order Number Must be a valid number"),
    trainingCategory: z.string().min(2, "Training Category is too short")
});

export const BatchSchema = z.object({
    batchNo: z.string().min(2, "batch no is too short"),
    status: z.string().min(2, "status is too short"),
    pruebaDate: z.coerce.date({ error: "Date is required" }),
});