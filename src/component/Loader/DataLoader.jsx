export const DataLoader = async() => {
    const quizeDats = await fetch('https://openapi.programming-hero.com/api/quiz');
    const quizeData = await quizeDats.json();

    return quizeData
};
