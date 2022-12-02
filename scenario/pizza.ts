import { Node } from "./types";

// Scenario de la discussion avec Marc le livreur de pizza
export const scenario: Node[] = [
    {
        id: 1,
        type: "msg",
        msg: "Bonjour, c'est bien vous la commande pour le 12 rue de la Paix ?",
        nextid: {
            default: {
                id: 2,
            },
        },
    },
    {
        id: 2,
        type: "choice",
        options: [
            {
                text: "Attendez, quoi? Mais qui êtes-vous ?",
                nextid: {
                    default: {
                        id: 3,
                    },
                },
            },
            {
                text: "Euh, il y a une erreur, je n'ai pas commandé de pizza.",
                nextid: {
                    default: {
                        id: 3,
                    },
                },
            },
            {
                text: "Oui, oui, c'est bien pour moi.",
                nextid: {
                    default: {
                        id: 4,
                    },
                },
            },
        ],
    },
    {
        id: 3,
        type: "msg",
        msg: "Et bien le livreur de pizza... et je vous apporte votre commande.",
        nextid: {
            default: {
                id: 2,
            },
        },
    },
    {
        id: 4,
        type: "msg",
        msg: "Je vous apporte votre pizza 4 fromage raclette.",
        nextid: {
            default: {
                id: 5,
            },
        },
    },
    {
        id: 5,
        type: "choice",
        options: [
            {
                text: "Chouette une pizza gratuite !",
                nextid: {
                    default: {
                        id: 6,
                    },
                },
            },
            {
                text: "Merci beaucoup !",
                nextid: {
                    default: {
                        id: 7,
                    },
                },
            },
        ]
    },
    {
        id: 6,
        type: "msg",
        msg: "Hein?",
        nextid: {
            default: {
                id: 8,
            },
        },
    },
    {
        id: 8,
        type: "choice",
        options: [
            {
                text: "Non, non, rien.",
                nextid: {
                    default: {
                        id: 7,
                    },
                },
            },
        ],
    },
    {
        id: 7,
        type: "msg",
        msg: "Et non, vous vous êtes fait pizzarnaquer !!!",
        nextid: {
            default: {
                id: 9,
            },
        },
    },
    {
        id: 9,
        type: "end",
    },
];