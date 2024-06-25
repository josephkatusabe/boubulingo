import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
    try {
        console.log("seeding database");
        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);
        await db.delete(schema.userSubscription);

        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "Swahili",
                imageSrc: "/flags/ke.svg",
            },
            {
                id: 2,
                title: "Luganda",
                imageSrc: "/flags/ug.svg",
            },
            {
                id: 3,
                title: "Kirundi",
                imageSrc: "/flags/bi.svg",
            },
            {
                id: 4,
                title: "French",
                imageSrc: "/flags/fr.svg",
            },
            {
                id: 5,
                title: "English",
                imageSrc: "/flags/us.svg",
            },
        ]);

        await db.insert(schema.units).values([
            {
                id: 1,
                courseId: 1,
                title: "Unit 1",
                description: "Learn the basics of Swahili greetings",
                order: 1,
            },
            {
                id: 2,
                courseId: 1,
                title: "Unit 2",
                description: "Learn the basics of introducing oneself in Swahili",
                order: 2,
            }
        ]);

        await db.insert(schema.lessons).values([
            {
                id: 1,
                unitId: 1,
                order: 1,
                title: "Greetings 1",
            },
            {
                id: 2,
                unitId: 1,
                order: 2,
                title: "Greetings 2",
            },
            {
                id: 3,
                unitId: 1,
                order: 3,
                title: "Greetings 3",
            },
            {
                id: 4,
                unitId: 1,
                order: 4,
                title: "Greetings 4",
            },
            {
                id: 5,
                unitId: 1,
                order: 5,
                title: "Greetings 5",
            },
            {
                id: 6,
                unitId: 2,
                order: 1,
                title: "Introduction 1",
            },
            {
                id: 7,
                unitId: 2,
                order: 2,
                title: "Introduction 2",
            },
            {
                id: 8,
                unitId: 2,
                order: 3,
                title: "Introduction 3",
            },
            {
                id: 9,
                unitId: 2,
                order: 4,
                title: "Introduction 4",
            },
            {
                id: 10,
                unitId: 2,
                order: 5,
                title: "Introduction 5",
            }
        ]);

        await db.insert(schema.challenges).values([
            { id: 1, lessonId: 1, type: "SELECT", order: 1, question: 'Which one of these is "hello"?' },
            { id: 2, lessonId: 1, type: "ASSIST", order: 2, question: "hello" },
            // { id: 3, lessonId: 1, type: "SELECT", order: 3, question: 'Which one of these is "good morning"?' },
            // { id: 4, lessonId: 1, type: "ASSIST", order: 4, question: "good morning" },
            // { id: 5, lessonId: 1, type: "SELECT", order: 5, question: 'Which one of these is "good night"?' },
            // Similar challenges for the rest of the lessons
            // ...
            { id: 6, lessonId: 2, type: "SELECT", order: 1, question: 'Which one of these is "how are you"?' },
            // { id: 7, lessonId: 2, type: "ASSIST", order: 2, question: "how are you" },
            // { id: 8, lessonId: 2, type: "SELECT", order: 3, question: 'Which one of these is "I am fine"?' },
            // { id: 9, lessonId: 2, type: "ASSIST", order: 4, question: "I am fine" },
            // { id: 10, lessonId: 2, type: "SELECT", order: 5, question: 'Which one of these is "see you later"?' },
            // // Similar challenges for the rest of the lessons
            // // ...
            { id: 11, lessonId: 6, type: "SELECT", order: 1, question: 'Which one of these is "the man"?' },
            { id: 12, lessonId: 6, type: "ASSIST", order: 2, question: "the man is" },
            // { id: 13, lessonId: 6, type: "SELECT", order: 3, question: 'Which one of these is "I am from"?' },
            // { id: 14, lessonId: 6, type: "ASSIST", order: 4, question: "I am from" },
            // { id: 15, lessonId: 6, type: "SELECT", order: 5, question: 'Which one of these is "nice to meet you"?' },
            // Similar challenges for the rest of the lessons
            // ...
        ]);

        // Insert challenge options for each challenge
        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 1,
                imageSrc: "/man.svg",
                correct: true,
                text: "hello",
                audioSrc: "/ke_hello.mp3"
            },
            {
                challengeId: 1,
                imageSrc: "/woman.svg",
                correct: false,
                text: "goodbye",
                audioSrc: "/ke_bye.mp3"
            },
            {
                challengeId: 1,
                imageSrc: "/robot.svg",
                correct: false,
                text: "thank you",
                audioSrc: "/ke_thankyou.mp3"
            },
            // More options for each challenge
            // ...
            {
                challengeId: 6,
                imageSrc: "/man.svg",
                correct: true,
                text: "hello",
                audioSrc: "/ke_hello.mp3"
            },
            {
                challengeId: 6,
                imageSrc: "/woman.svg",
                correct: false,
                text: "goodbye",
                audioSrc: "/ke_bye.mp3"
            },
            {
                challengeId: 11,
                imageSrc: "/robot.svg",
                correct: false,
                text: "ya roboti",
                audioSrc: "/ke_robot.mp3"
            },
            {
                challengeId: 11,
                imageSrc: "/man.svg",
                correct: true,
                text: "ya mwanaume",
                audioSrc: "/ke_man.mp3"
            },
            {
                challengeId: 11,
                imageSrc: "/woman.svg",
                correct: false,
                text: "ya mwanamke",
                audioSrc: "/ke_bye.mp3"
            },
            {
                challengeId: 11,
                imageSrc: "/robot.svg",
                correct: false,
                text: "thank you",
                audioSrc: "/ke_thankyou.mp3"
            },
            {
                challengeId: 12,
                imageSrc: "/man.svg",
                correct: true,
                text: "hello",
                audioSrc: "/ke_hello.mp3"
            },
            {
                challengeId: 12,
                imageSrc: "/woman.svg",
                correct: false,
                text: "goodbye",
                audioSrc: "/ke_bye.mp3"
            },
            {
                challengeId: 12,
                imageSrc: "/robot.svg",
                correct: false,
                text: "thank you",
                audioSrc: "/ke_thankyou.mp3"
            }
        ]);

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 2,
                correct: true,
                text: "hello",
                audioSrc: "/ke_hello.mp3"
            },
            {
                challengeId: 2,
                correct: false,
                text: "goodbye",
                audioSrc: "/ke_bye.mp3"
            },
            {
                challengeId: 2,
                correct: false,
                text: "thank you",
                audioSrc: "/ke_thankyou.mp3"
            },
            // More options for each challenge
            // ...
        ]);

        // Continue inserting challenge options for other challenges similarly...

        console.log("seeding finished");
    } catch (error) {
        console.error(error);
        throw new Error("Failed to Seed the database");
    }
}

main();
