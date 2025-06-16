import { type QuizData } from "./types";

/* TEMPLATE: 

        {
            id: ,
            text: "",
            answers: [
                { id: 1, text: "", isCorrect: false },
                { id: 2, text: "", isCorrect: false },
                { id: 3, text: "", isCorrect: false },
                { id: 4, text: "", isCorrect: false },
            ],
        },

*/

export const quizData: QuizData = {
    title: "World of Warcraft Quiz",
    questions: [
        {
            id: 1,
            text: "Which race cannot be paladins in the Alliance?",
            answers: [
                { id: 1, text:"Humans", isCorrect: false},
                { id: 2, text:"Dwarves", isCorrect: false},
                { id: 3, text:"Night Elves", isCorrect: true},
                { id: 4, text:"Draenei", isCorrect:false}
            ],
        },
        {
            id: 2,
            text: "What is the capital city of the Horde in Kalimdor?",
            answers: [
                { id: 1, text: "Thunder Bluff", isCorrect: false},
                { id: 2, text: "Orgrimmar", isCorrect: true},
                { id: 3, text: "Undercity", isCorrect: false},
                { id: 4, text: "Silvermoon", isCorrect: false}
            ],
        },
        {
            id: 3,
            text: "Which class can transform into a bear, cat, or moonkin?",
            answers: [
                { id: 1, text: "Shaman", isCorrect: false },
                { id: 2, text: "Druid", isCorrect: true },
                { id: 3, text: "Hunter", isCorrect: false },
                { id: 4, text: "Rogue", isCorrect: false },
            ],
        },

        {
            id: 4,
            text: "What is the name of the Lich King’s legendary sword?",
            answers: [
                { id: 1, text: "Ashbringer", isCorrect: false },
                { id: 2, text: "Gorehowl", isCorrect: false },
                { id: 3, text: "Doomhammer", isCorrect: false },
                { id: 4, text: "Frostmourne", isCorrect: true },
            ],
        },

        {
            id: 5,
            text: 'Which raid introduced the "Corrupted Blood" plague incident?',
            answers: [
                { id: 1, text: "Blackwing Lair", isCorrect: false },
                { id: 2, text: "Ahn’Qiraj", isCorrect: false },
                { id: 3, text: "Zul’Gurub", isCorrect: true },
                { id: 4, text: "Naxxramas", isCorrect: false },
            ],
        },

        {
            id: 6,
            text: "Which expansion introduced the Pandaren as a playable race?",
            answers: [
                { id: 1, text: "Mists of Pandaria", isCorrect: true },
                { id: 2, text: "Wrath of the Lich King", isCorrect: false },
                { id: 3, text: "Legion", isCorrect: false },
                { id: 4, text: "Battle for Azeroth", isCorrect: false },
            ],
        },

        {
            id: 7,
            text: "What is the name of Thrall’s wolf companion?",
            answers: [
                { id: 1, text: "Hellscream", isCorrect: false },
                { id: 2, text: "Snowfang", isCorrect: false },
                { id: 3, text: "Frostwolf", isCorrect: true },
                { id: 4, text: "Ghostwolf", isCorrect: false },
            ],
        },

        {
            id: 8,
            text: 'Which dungeon features the infamous "Leeroy Jenkins" meme',
            answers: [
                { id: 1, text: "Deadmines", isCorrect: false },
                { id: 2, text: "Blackrock Spire", isCorrect: true },
                { id: 3, text: "Scholomance", isCorrect: false },
                { id: 4, text: "Stratholme", isCorrect: false },
            ],
        },

        {
            id: 9,
            text: "What was the original name of WoW during development?",
            answers: [
                { id: 1, text: "Warcraft Legends", isCorrect: false },
                { id: 2, text: "Azeroth Online", isCorrect: false },
                { id: 3, text: "Warcraft World", isCorrect: false },
                { id: 4, text: "Warcraft Adventures", isCorrect: true },
            ],
        },

        {
            id: 10,
            text: "What is the name of the titan inside Azeroth’s core?",
            answers: [
                { id: 1, text: "Eonar", isCorrect: false },
                { id: 2, text: "Azeroth", isCorrect: true },
                { id: 3, text: "Sargeras", isCorrect: false },
                { id: 4, text: "Aman’Thul", isCorrect: false },
            ],
        },

        {
            id: 11,
            text: "Which raid boss has a phase where players dance to avoid mechanics?",
            answers: [
                { id: 1, text: "Ragnaros", isCorrect: false },
                { id: 2, text: "Lich King", isCorrect: false },
                { id: 3, text: "Lady Vashj", isCorrect: false },
                { id: 4, text: 'Heigan the Unclean', isCorrect: true },
            ],
        },

        {
            id: 12,
            text: "Which class was added in The Burning Crusade?",
            answers: [
                { id: 1, text: "Death Knight", isCorrect: false },
                { id: 2, text: "Demon Hunter", isCorrect: false },
                { id: 3, text: "Monk", isCorrect: false },
                { id: 4, text: "None", isCorrect: true },
            ],
        },

        {
            id: 13,
            text: "Who was the original Aspect of the Green Dragonflight?",
            answers: [
                { id: 1, text: "Alexstrasza", isCorrect: false },
                { id: 2, text: "Ysera", isCorrect: true },
                { id: 3, text: "Nozdormu", isCorrect: false },
                { id: 4, text: "Malygos", isCorrect: false },
            ],
        },

        {
            id: 14,
            text: "What is the name of the murloc companion pet from Wrath of the Lich King?",
            answers: [
                { id: 1, text: "Mr. Pinchy", isCorrect: false },
                { id: 2, text: "Terky", isCorrect: false },
                { id: 3, text: "Snarly", isCorrect: false },
                { id: 4, text: "Murky", isCorrect: true },
            ],
        },

        {
            id: 15,
            text: "What is the new playable race in The War Within?",
            answers: [
                { id: 1, text: "Dracthyr", isCorrect: false },
                { id: 2, text: "Earthen (Dwarves)", isCorrect: true },
                { id: 3, text: "Nerubians", isCorrect: false },
                { id: 4, text: "Tuskarr", isCorrect: false },
            ],
        },

        {
            id: 16,
            text: "Which underground kingdom is a major zone in the expansion?",
            answers: [
                { id: 1, text: "Deepholm", isCorrect: false },
                { id: 2, text: "Undermine", isCorrect: false },
                { id: 3, text: "Azj-Kahet", isCorrect: true },
                { id: 4, text: "Gnomeregan", isCorrect: false },
            ],
        },

        {
            id: 17,
            text: "Who is the main antagonist of The War Within?",
            answers: [
                { id: 1, text: "Xal’atath", isCorrect: true },
                { id: 2, text: "Iridikron", isCorrect: false },
                { id: 3, text: "Alleria Windrunner", isCorrect: false },
                { id: 4, text: "The Primus", isCorrect: false },
            ],
        },

        {
            id: 18,
            text: 'What new activity is a solo/co-op "mini dungeon"?',
            answers: [
                { id: 1, text: "Torghast", isCorrect: false },
                { id: 2, text: "Island Expeditions", isCorrect: false },
                { id: 3, text: "Delves", isCorrect: true },
                { id: 4, text: "Horrific Visions", isCorrect: false },
            ],
        },

        {
            id: 19,
            text: "Where is the Alliance’s hub city located?",
            answers: [
                { id: 1, text: "Stormforge", isCorrect: false },
                { id: 2, text: "Dornogal", isCorrect: true },
                { id: 3, text: "Ironhold", isCorrect: false },
                { id: 4, text: "Khaz Algar", isCorrect: false },
            ],
        },

        {
            id: 20,
            text: "Which zone is not in The War Within?",
            answers: [
                { id: 1, text: "Isle of Dorn", isCorrect: false },
                { id: 2, text: "The Ringing Deeps", isCorrect: false },
                { id: 3, text: "Hallowfall", isCorrect: false },
                { id: 4, text: "Nazjatar", isCorrect: true },
            ],
        },

        {
            id: 21,
            text: "What cosmetic reward comes from Delves?",
            answers: [
                { id: 1, text: "Heritage Armor", isCorrect: false },
                { id: 2, text: "Warbound gear", isCorrect: true },
                { id: 3, text: "Titan Relics", isCorrect: false },
                { id: 4, text: "Nerubian wings", isCorrect: false },
            ],
        },

        {
            id: 22,
            text: "What class gets a San’layn-themed Hero Talent?",
            answers: [
                { id: 1, text: "Death Knight", isCorrect: true },
                { id: 2, text: "Warlock", isCorrect: false },
                { id: 3, text: "Priest", isCorrect: false },
                { id: 4, text: "Mage", isCorrect: false },
            ],
        },

        {
            id: 23,
            text: "Which character from Warcraft III returns?",
            answers: [
                { id: 1, text: "Kael’thas", isCorrect: false },
                { id: 2, text: "Maiev Shadowsong", isCorrect: false },
                { id: 3, text: "Anub’arak", isCorrect: true },
                { id: 4, text: "Garithos", isCorrect: false },
            ],
        },

        {
            id: 24,
            text: "What real-world culture inspires Hallowfall’s aesthetics?",
            answers: [
                { id: 1, text: "Byzantine", isCorrect: true },
                { id: 2, text: "Aztec", isCorrect: false },
                { id: 3, text: "Aztec", isCorrect: false },
                { id: 4, text: "Egyptian", isCorrect: false },
            ],
        },

        {
            id: 25,
            text: "What expansion follows The War Within?",
            answers: [
                { id: 1, text: "The Last Titan", isCorrect: false },
                { id: 2, text: "Lightfall", isCorrect: false },
                { id: 3, text: "Midnight", isCorrect: true },
                { id: 4, text: "Edge of Reality", isCorrect: false },
            ],
        },
    ]
}

/* TEMPLATE: 

        {
            id: ,
            text: "",
            answers: [
                { id: 1, text: "", isCorrect: false },
                { id: 2, text: "", isCorrect: false },
                { id: 3, text: "", isCorrect: false },
                { id: 4, text: "", isCorrect: false },
            ],
        },

*/