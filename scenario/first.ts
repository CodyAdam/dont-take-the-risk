import { Node } from "./types";

// Scenario de la première rencontre avec Sophie
export const scenario: Node[] = [
    {
        id: 1,
        type: "msg",
        msg: "Bonjour",
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
                text: "Salut",
                nextid: {
                    default: {
                        id: 3,
                    },
                },
            },
            {
                text: "Hey",
                nextid: {
                    default: {
                        id: 3,
                    },
                },
            },
            {
                text: "Oh, ça fait longtemps",
                nextid : {
                    default : {
                        id: 3,
                    }
                }
            }
        ],
    },
    {
        id: 3,
        type: "msg",
        msg: "Comment vas-tu ?",
        nextid: {
            default: {
                id: 4,
            },
        },
    },
    {
        id: 4,
        type: "choice",
        options: [
            {
                text: "Ça va",
                nextid: {
                    default: {
                        id: 5,
                    },
                },
            },
            {
                text: "Génial",
                nextid: {
                    default: {
                        id: 5,
                    },
                },
            },
            {
                text: "Pas au top",
                nextid: {
                    default: {
                        id: 6,
                    },
                },
            },
        ],
    },
    {
        id: 5,
        type: "msg",
        msg: "Chouette, moi je vais en soirée ce soir.",
        nextid: {
            default: {
                id: 7,
            },
        },
    },
    {
        id: 6,
        type: "msg",
        msg: "Oh mince, si j'avais su, je t'aurais proposé de venir en soirée avec moi ce soir",
        nextid: {
            default: {
                id: 7,
            },
        },
    },
    {
        id: 7,
        type: "choice",
        options: [
            {
                text: "Que fais-tu dans la vie maintenant ?",
                nextid: {
                    default: {
                        id: 8,
                    },
                },
            },
            {
                text: "A quelle genre de soirée vas-tu ?",
                nextid: {
                    default: {
                        id: 9,
                    },
                },
            },
            {
                text: "Amuse-toi bien ce soir !" ,
                nextid: {
                    default: {
                        id: 10,
                    },
                },
            },
        ],
    },
    {
        id: 8,
        type: "msg",
        msg: "Je fais des études de droit",
        nextid: {
            default: {
                id: 11,
            },
        },
    },
    {
        id: 11,
        type: "choice",
        options: [
            {
                text: "Moi aussi, je fais des études de droit !",
                nextid: {
                    default: {
                        id: 12,
                    },
                },
            },
            {
                text: "Waouh, c'est génial.",
                nextid: {
                    default: {
                        id: 12,
                    },
                },
            },
            {
                text: "Pour arrêter d'aller de travers ?",
                nextid: {
                    default: {
                        id: 12,
                    },
                },
            },
        ],
    },
    {
        id: 12,
        type: "msg",
        msg: "😋",
        nextid: {
            default: {
                id: 13,
            },
        },
    },
    {
        id: 13,
        type: "choice",
        options:[
            {
                text:"C'était vraiment génial le lycée avec toi !",
                nextid: {
                    default: {
                        id: 14,
                    },
                },
            },
            {
                text:"Tu as des nouvelles de Marc ?",
                nextid: {
                    default: {
                        id: 15,
                    },
                },
            },
            {
                text:"Tu fais du sport ?",
                nextid: {
                    default: {
                        id: 16,
                    },
                },
            },
        ],
    },
    {
        id: 14,
        type: "msg",
        msg: "Ouais la bonne époque. 🤣",
        nextid:{
            default: {
                id: 17,
            },
        }
    },
    {
        id: 17,
        type: "delay",
        duration: 1000,
        nextid: {
            default: {
                id: 18,
            },
        },
    },
    {
        id: 18,
        type: "msg",
        msg:"Bon je dois aller à ma soirée moi.",
        nextid: {
            default: {
                id: 7,
            },
        },
    },
    {
        id: 15,
        type: "msg",
        msg: "Humm, je crois qu'il livre des pizzas maintenant.",
        nextid: {
            default: {
                id: 17,
            },
        },
    },
    {
        id: 16,
        type: "msg",
        msg: "Ouais, je fais du sport, mais je ne suis pas très doué.",
        nextid: {
            default: {
                id: 19,
            },
        },
    },
    {
        id: 19,
        type: "delay",
        duration: 1000,
        nextid: {
            default: {
                id: 20,
            },
        },
    },
    {
        id: 20,
        type: "msg",
        msg: "C'est du patinage artistique mais je glisse tout le temps. :( ",
        nextid: {
            default: {
                id: 17,
            },
        },
    },
    {
        id: 9,
        type: "msg",
        msg: "Je vais aux 26 ans de ma cousine.",
        nextid: {
            default: {
                id: 21,
            },
        },
    },
    {
        id: 21,
        type: "choice",
        options: [
            {
                text: "Y aura du monde ?",
                nextid: {
                    default: {
                        id: 22,
                    },
                },
            },
            {
                text: "Tu sais danser ?",
                nextid:{
                    default:{
                        id:23,
                    },
                },
            },
            {
                text:"Wesh la daronne.",
                nextid:{
                    default:{
                        id:24,
                    },
                },
            }
        ],
    },
    {
        id: 22,
        type:"msg",
        msg:"Oui, il y aura beaucoup de monde.",
        nextid:{
            default:{
                id:25
            }
        }
    },
    {
        id: 25,
        type:"delay",
        duration: 1000,
        nextid:{
            default:{
                id:26
            }
        }
    },
    {
        id: 26,
        type:"msg",
        msg:"Apparemment, il y aura des beaux gosses aussi.",
        nextid:{
            default:{
                id:17
            }
        }
    },
    {
        id: 23,
        type:"msg",
        msg:"Oui, je sais danser.",
        nextid:{
            default:{
                id:27
            }
        }
    },
    {
        id:27,
        type:"delay",
        duration: 1000,
        nextid:{
            default:{
                id:28
            }
        }
    },
    {
        id: 28,
        type:"msg",
        msg:"J'ai pris des cours de tango.",
        nextid:{
            default:{
                id:29
            }
        }
    },
    {
        id: 29,
        type:"delay",
        duration:1000,
        nextid:{
            default:{
                id:30
            }
        }
    },
    {
        id:30,
        type:"msg",
        msg:"Je te montrerai un jour.",
        nextid:{
            default:{
                id:17,
            }
        }
    },
    {
        id:24,
        type:"msg",
        msg:"Au moins, elle a copain elle.",
        nextid:{
            default:{
                id: 31,
            }
        }
    },
    {
        id:31,
        type:"choice",
        options:[
            {
                text:"Ne te mets pas trop de pression.",
                nextid:{
                    default:{
                        id:17,
                    }
                }
            },
            {
                text:"Je suis sur que tu trouveras un beau gosse ce soir.",
                nextid:{
                    default:{
                        id:17,
                    }
                }
            },
            {
                text:"Un point pour toi.",
                nextid:{
                    default:{
                        id:17,
                    }
                }
            },
        ]
    },
    {
        id:10,
        type:"end"
    }
]
