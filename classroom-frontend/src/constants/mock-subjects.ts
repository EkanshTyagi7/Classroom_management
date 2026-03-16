import { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        courseCode: "CS101",
        code: "CS101",
        name: "Introduction to Programming",
        department: "CS",
        description: "Builds core problem-solving skills through variables, control flow, functions, and introductory software design.",
        created_at: "2026-03-16T00:00:00.000Z",
    },
    {
        id: 2,
        courseCode: "MATH201",
        code: "MATH201",
        name: "Linear Algebra",
        department: "Math",
        description: "Covers matrices, vector spaces, linear transformations, and practical applications used across science and engineering.",
        created_at: "2026-03-16T00:00:00.000Z",
    },
    {
        id: 3,
        courseCode: "ENG210",
        code: "ENG210",
        name: "Academic Writing",
        department: "English",
        description: "Strengthens analytical reading, argument development, and clear academic writing for university-level coursework.",
        created_at: "2026-03-16T00:00:00.000Z",
    },
];
