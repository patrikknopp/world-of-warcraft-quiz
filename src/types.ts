export type Answer = {
    id: number;
    text: string;
    isCorrect: boolean;
}

export type Question = {
    id: number;
    text: string;
    answers: Answer[];
}

export type QuizData = {
    title: string;
    questions: Question[];
}