import { Node } from "./types";

// Scenario de la rencontre de Sophie et son coup de coeur
export const scenario: Node[] = [
    {
        id: 1,
        type: "msg",
        msg: "J'ai rencontré un mec super",
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
                text: "Ah ouais ?",
                nextid: {
                    default: {
                        id: 3,
                    },
                },
            },
            {
                text: "Tu vois je te l'avais dit",
                nextid: {
                    default: {
                        id: 3,
                    },
                },
            },
            {
                text: "Il est comment ?",
                nextid: {
                    default: {
                        id: 3,
                    },
                },
            },
        ],
    },
    {
        id: 3,
        type: "msg",
        msg: "Il est super",
        nextid: {
            default: {
                id: 4,
            },
        },
    },
    {
        id: 4,
        type: "delay",
        duration: 1000,
        nextid: {
            default: {
                id: 5,
            },
        },
    },
    {
        id: 5,
        type: "msg",
        msg: "je ne sais pas quoi faire",
        nextid: {
            conditional: [
                {
                    id: 8,
                    conditions:{
                        MARC: true,
                    }
                }
            ],
            default: {
                id: 6,
            },
        },
    },
    {
        id: 6,
        type: "choice",
        options: [
            {
                text: "Tu devrais le voir",
                nextid: {
                    default: {
                        id: 7,
                    },
                },
            },
            {
                text: "Montre lui tes pas de tango",
                nextid: {
                    default: {
                        id: 7,
                    },
                },
            },
        ],
    },
    {
        id: 8,
        type: "choice",
        options: [
            {
                text: "Tu devrais le voir",
                nextid: {
                    default: {
                        id: 7,
                    },
                },
            },
            {
                text: "Montre lui tes pas de tango",
                nextid: {
                    default: {
                        id: 7,
                    },
                },
            },
            {
                text: "Tu crois qu'il aime la pizza ? J'ai peut-être quelque chose pour toi",
                nextid: {
                    default: {
                        id: 9,
                    },
                },
            },
        ],
    },
    {
        id: 9,
        type: "msg",
        msg: "*Le coup de coeur de Sophie est particulièrement sous le charme*",
        nextid:{
            default:{
                id:10,
            }
        }
    },
    {
        id:7,
        type:"msg",
        msg:"*Le coup de coeur de Sophie a un faible pour elle*",
        nextid:{
            default:{
                id:10,
            }
        }
    },
    {
        id:10,
        type:"choice",
        options:[
            {
                text:"Je m'inquiète pour toi, tu peux s'assurer que ton coup de coeur n'a pas de mst ?",
                nextid:{
                    default:{
                        id:11,
                    }
                }
            },
            {
                text: "Amuse toi bien, avec ton nouvel ami",
                nextid:{
                    default:{
                        id:12,
                    }
                }
            }
        ]
    },
    {
        id:11,
        type:"delay",
        duration:3000,
        nextid:{
            default:{
                id:13,
            }
        }
    },
    {
        id:13,
        type:"msg",
        msg:"😥Il vient de me dire qu'il a le sida😥",
        nextid:{
            default:{
                id:14,
            }
        }
    },
    {
        id:14,
        type:"choice",
        options:[
            {
                text:"Tu as bien fais de lui demander",
                nextid:{
                    default:{
                        id:15
                    }
                }
            }
        ]
    },
    {
        id:15,
        type:"msg",
        msg:"Je ne sais pas quoi faire, je vais rentrer chez moi",
        nextid:{
            default:{
                id:16
            }
        }
    },
    {
        id:16,
        type:"choice",
        options:[
            {
                text:"Ne t'inquiète pas, le sida on n'en meurt plus",
                set:{
                    FINFO : true,
                },
                nextid:{
                    default:{
                        id:17
                    }
                }
            },
            {
                text:"Ne t'inquiète pas, la pillule protège du sida",
                set:{
                    FINFO : true,
                },
                nextid:{
                    default:{
                        id:17
                    }
                }
            },
            {
                text:"Il existe des moyens de se protéger du sida",
                nextid:{
                    default:{
                        id:18
                    }
                }
            }
        ]
    },
    {
        id:18,
        type:"msg",
        msg:"Quels moyens ?",
        nextid:{
            default:{
                id:19
            }
        }
    },
    {
        id:19,
        type:"choice",
        options:[
            {
                text:"Le préservatif, la PREP",
                nextid:{
                    default:{
                        id:17
                    }
                }
            },
            {
                text:"La pilule",
                set:{
                    FINFO : true,
                },
                nextid:{
                    default:{
                        id:17
                    }
                }
            },
            {
                text:"Il suffit juste d'éviter le sexe oral",
                set:{
                    FINFO : true,
                },
                nextid:{
                    default:{
                        id:17
                    }
                }
            }
        ]
    },
    {
        id:17,
        type:"msg",
        msg:"Oh, merci des conseils, tu sais à quel risque je m'expose?",
        nextid:{
            default:{
                id:20
            }
        }
    },
    {
        id:20,
        type:"choice",
        options:[
            {
                text:"Aucun, tu peux y aller",
                set:{
                    FRISQUE:true,
                    RNPROTEGE:true
                },
                nextid:{
                    default:{
                        id:25
                    }
                }
            },
            {
                text:"Tu peux deveir séropositive si tu ne te protège pas correctement",
                nextid:{
                    default:{
                        id:21
                    }
                }
            },
            {
                text:"Si tu as un rapport avec lui tu deviendra forcément séropositive",
                set:{
                    FRISQUE:true
                },
                nextid:{
                    default:{
                        id:21
                    }
                }
            }
        ]
    },
    {
        id:21,
        type:"msg",
        msg:"Merci pour tes conseils",
        nextid:{
            default:{
                id:22
            }
        }
    },
    {
        id:22,
        type:"delay",
        duration:3000,
        nextid:{
            default:{
                id:23
            }
        }
    },
    {
        id:23,
        type:"msg",
        msg:"*Sophie a un rapport protégé*",
        nextid:{
            default:{
                id:24
            }
        }
    },
    {
        id:24,
        type:"end",
    },
    {
        id:25,
        type:"msg",
        msg:"Merci pour tes conseils",
        nextid:{
            default:{
                id:26
            }
        }
    },
    {
        id:26,
        type:"delay",
        duration:3000,
        nextid:{
            default:{
                id:12
            }
        }
    },
    {
        id:12,
        type:"msg",
        msg:"*Sophie a un rapport non protégé*",
        nextid:{
            default:{
                id:27
            }
        }
    },
    {
        id:27,
        type:"delay",
        duration:3000,
        nextid:{
            default:{
                id:28
            }
        }
    },
    {
        id:28,
        type:"msg",
        msg:"Le coup de coeur de Sophie lui avoue être séropositif",
        nextid:{
            default:{
                id:29
            }
        }
    },
    {
        id:29,
        type:"choice",
        options:[
            {
                text:"*Ne rien ajouter*",
                set:{
                    SERO:true,
                    NPREV:true,
                },
                nextid:{
                    default:{
                        id:30
                    }
                }
            },
            {
                text:"Je m'inquiète pour toi, il faut que tu te prenne des dispositions après ce rapport",
                nextid:{
                    default:{
                        id:31
                    }
                }
            }
        ]
    },
    {
        id:30,
        type:"msg",
        msg:"*Sophie deviens séropositive*",
        nextid:{
            default:{
                id:24
            }
        }
    },
    {
        id:31,
        type:"msg",
        msg:"Quel genre de dispositions?",
        nextid:{
            default:{
                id:32
            }
        }
    },
    {
        id:32,
        type:"choice",
        options:[
            {
                text:"Aucune en fait",
                set:{
                    NPREV:true,
                    SERO:true,
                },
                nextid:{
                    default:{
                        id:30,
                    }
                }
            },
            {
                text:"Il faut que dans le doute tu prennes un traitement post-exposition et que tu te fasses dépister",
                nextid:{
                    default:{
                        id:33
                    }
                }
            },
            {
                text:"Il faut juste que tu te fasses dépister",
                set:{
                    NPREV:true,
                    SERO:true,
                },
                nextid:{
                    default:{
                        id:30
                    }
                }
            }
        ]
    },
    {
        id:33,
        type:"msg",
        msg:"Qu'est-ce que c'est le traitement post-exposition?",
        nextid:{
            default:{
                id:34
            }
        }
    },
    {
        id:34,
        type:"choice",
        options:[
            {
                text:"Un traitement qui te permet de ne pas être séropositive, tu peux y aller dès que tu as le temps ce mois-ci",
                set:{
                    NPREV:true,
                    SERO:true,
                },
                nextid:{
                    default:{
                        id:30
                    }
                },
            },
            {
                text:"Un traitement qui te permet de ne pas être séropositive, et qui dois être pris le plus tôt possible après le rapport",
                nextid:{
                    default:{
                        id:35
                    }
                }
            }
        ]
    },
    {
        id:35,
        type:"msg",
        msg:"*Sophie parvient à éviter la contamination par le VIH*",
        nextid:{
            default:{
                id:24
            }
        }
    }              
]