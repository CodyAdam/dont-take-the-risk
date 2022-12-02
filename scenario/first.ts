import { Node } from './types'

// Scenario de la première rencontre avec Sophie
export const scenario: Node[] = [
	{
		id: 1,
		type: 'msg',
		msg: 'Bonjour',
		nextid: {
			default: {
				id: 2,
			},
		},
	},
	{
		id: 2,
		type: 'choice',
		options: [
			{
				text: 'Salut',
				nextid: {
					default: {
						id: 3,
					},
				},
			},
			{
				text: 'Hey',
				nextid: {
					default: {
						id: 3,
					},
				},
			},
			{
				text: 'Oh, ça fait longtemps',
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
		type: 'msg',
		msg: 'Comment vas-tu ?',
		nextid: {
			default: {
				id: 4,
			},
		},
	},
	{
		id: 4,
		type: 'choice',
		options: [
			{
				text: 'Ça va',
				nextid: {
					default: {
						id: 5,
					},
				},
			},
			{
				text: 'Génial',
				nextid: {
					default: {
						id: 5,
					},
				},
			},
			{
				text: 'Pas au top',
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
		type: 'msg',
		msg: 'Chouette, moi je vais en soirée ce soir.',
		nextid: {
			default: {
				id: 7,
			},
		},
	},
	{
		id: 6,
		type: 'msg',
		msg: "Oh mince, si j'avais su, je t'aurais proposé de venir en soirée avec moi ce soir",
		nextid: {
			default: {
				id: 7,
			},
		},
	},
	{
		id: 7,
		type: 'choice',
		options: [
			{
				text: 'Que fais-tu dans la vie maintenant ?',
				nextid: {
					default: {
						id: 8,
					},
				},
			},
			{
				text: 'A quelle genre de soirée vas-tu ?',
				nextid: {
					default: {
						id: 9,
					},
				},
			},
			{
				text: 'Amuse-toi bien ce soir !',
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
		type: 'msg',
		msg: 'Je fais des études de droit',
		nextid: {
			default: {
				id: 11,
			},
		},
	},
	{
		id: 11,
		type: 'choice',
		options: [
			{
				text: 'Moi aussi, je fais des études de droit !',
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
		type: 'msg',
		msg: '😋',
		nextid: {
			default: {
				id: 13,
			},
		},
	},
	{
		id: 13,
		type: 'choice',
		options: [
			{
				text: "C'était vraiment génial le lycée avec toi !",
				nextid: {
					default: {
						id: 14,
					},
				},
			},
			{
				text: 'Tu as des nouvelles de Marc ?',
				set: {
					MARC: true,
				},
				nextid: {
					default: {
						id: 15,
					},
				},
			},
			{
				text: 'Tu fais du sport ?',
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
		type: 'msg',
		msg: 'Ouais la bonne époque. 🤣',
		nextid: {
			default: {
				id: 17,
			},
		},
	},
	{
		id: 17,
		type: 'delay',
		duration: 1000,
		nextid: {
			default: {
				id: 18,
			},
		},
	},
	{
		id: 18,
		type: 'msg',
		msg: 'Bon je dois aller à ma soirée moi.',
		nextid: {
			default: {
				id: 7,
			},
		},
	},
	{
		id: 15,
		type: 'msg',
		msg: "Humm, je crois qu'il livre des pizzas maintenant.",
		nextid: {
			default: {
				id: 17,
			},
		},
	},
	{
		id: 16,
		type: 'msg',
		msg: 'Ouais, je fais du sport, mais je ne suis pas très doué.',
		nextid: {
			default: {
				id: 19,
			},
		},
	},
	{
		id: 19,
		type: 'delay',
		duration: 1000,
		nextid: {
			default: {
				id: 20,
			},
		},
	},
	{
		id: 20,
		type: 'msg',
		msg: "C'est du patinage artistique mais je glisse tout le temps. :( ",
		nextid: {
			default: {
				id: 17,
			},
		},
	},
	{
		id: 9,
		type: 'msg',
		msg: 'Je vais aux 26 ans de ma cousine.',
		nextid: {
			default: {
				id: 21,
			},
		},
	},
	{
		id: 21,
		type: 'choice',
		options: [
			{
				text: 'Y aura du monde ?',
				nextid: {
					default: {
						id: 22,
					},
				},
			},
			{
				text: 'Tu sais danser ?',
				nextid: {
					default: {
						id: 23,
					},
				},
			},
			{
				text: 'Wesh la daronne.',
				nextid: {
					default: {
						id: 24,
					},
				},
			},
		],
	},
	{
		id: 22,
		type: 'msg',
		msg: 'Oui, il y aura beaucoup de monde.',
		nextid: {
			default: {
				id: 25,
			},
		},
	},
	{
		id: 25,
		type: 'delay',
		duration: 1000,
		nextid: {
			default: {
				id: 26,
			},
		},
	},
	{
		id: 26,
		type: 'msg',
		msg: 'Apparemment, il y aura des beaux gosses aussi.',
		nextid: {
			default: {
				id: 17,
			},
		},
	},
	{
		id: 23,
		type: 'msg',
		msg: 'Oui, je sais danser.',
		nextid: {
			default: {
				id: 27,
			},
		},
	},
	{
		id: 27,
		type: 'delay',
		duration: 1000,
		nextid: {
			default: {
				id: 28,
			},
		},
	},
	{
		id: 28,
		type: 'msg',
		msg: "J'ai pris des cours de tango.",
		nextid: {
			default: {
				id: 29,
			},
		},
	},
	{
		id: 29,
		type: 'delay',
		duration: 1000,
		nextid: {
			default: {
				id: 30,
			},
		},
	},
	{
		id: 30,
		type: 'msg',
		msg: 'Je te montrerai un jour.',
		nextid: {
			default: {
				id: 17,
			},
		},
	},
	{
		id: 24,
		type: 'msg',
		msg: 'Au moins, elle a copain elle.',
		nextid: {
			default: {
				id: 31,
			},
		},
	},
	{
		id: 31,
		type: 'choice',
		options: [
			{
				text: 'Ne te mets pas trop de pression.',
				nextid: {
					default: {
						id: 17,
					},
				},
			},
			{
				text: 'Je suis sur que tu trouveras un beau gosse ce soir.',
				nextid: {
					default: {
						id: 17,
					},
				},
			},
			{
				text: 'Un point pour toi.',
				nextid: {
					default: {
						id: 17,
					},
				},
			},
		],
	},
	{
		id: 11,
		type: 'msg',
		msg: "J'ai rencontré un mec super",
		nextid: {
			default: {
				id: 12,
			},
		},
	},
	{
		id: 12,
		type: 'choice',
		options: [
			{
				text: 'Ah ouais ?',
				nextid: {
					default: {
						id: 13,
					},
				},
			},
			{
				text: "Tu vois je te l'avais dit",
				nextid: {
					default: {
						id: 13,
					},
				},
			},
			{
				text: 'Il est comment ?',
				nextid: {
					default: {
						id: 13,
					},
				},
			},
		],
	},
	{
		id: 13,
		type: 'msg',
		msg: 'Il est super',
		nextid: {
			default: {
				id: 14,
			},
		},
	},
	{
		id: 14,
		type: 'delay',
		duration: 1000,
		nextid: {
			default: {
				id: 15,
			},
		},
	},
	{
		id: 15,
		type: 'msg',
		msg: 'je ne sais pas quoi faire',
		nextid: {
			conditional: [
				{
					id: 18,
					conditions: {
						MARC: true,
					},
				},
			],
			default: {
				id: 16,
			},
		},
	},
	{
		id: 16,
		type: 'choice',
		options: [
			{
				text: 'Tu devrais le voir',
				nextid: {
					default: {
						id: 17,
					},
				},
			},
			{
				text: 'Montre lui tes pas de tango',
				nextid: {
					default: {
						id: 17,
					},
				},
			},
		],
	},
	{
		id: 18,
		type: 'choice',
		options: [
			{
				text: 'Tu devrais le voir',
				nextid: {
					default: {
						id: 17,
					},
				},
			},
			{
				text: 'Montre lui tes pas de tango',
				nextid: {
					default: {
						id: 17,
					},
				},
			},
			{
				text: "Tu crois qu'il aime la pizza ? J'ai peut-être quelque chose pour toi",
				nextid: {
					default: {
						id: 19,
					},
				},
			},
		],
	},
	{
		id: 19,
		type: 'msg',
		msg: '*Le coup de coeur de Sophie est particulièrement sous le charme*',
		nextid: {
			default: {
				id: 110,
			},
		},
	},
	{
		id: 17,
		type: 'msg',
		msg: '*Le coup de coeur de Sophie a un faible pour elle*',
		nextid: {
			default: {
				id: 110,
			},
		},
	},
	{
		id: 10,
		type: 'delay',
		duration: 3000,
		nextid: {
			default: {
				id: 100,
			},
		},
	},
	{
		id: 100,
		type: 'choice',
		options: [
			{
				text: "Je m'inquiète pour toi, tu peux s'assurer que ton coup de coeur n'a pas de mst ?",
				nextid: {
					default: {
						id: 111,
					},
				},
			},
			{
				text: 'Amuse toi bien, avec ton nouvel ami',
				nextid: {
					default: {
						id: 112,
					},
				},
			},
		],
	},
	{
		id: 111,
		type: 'delay',
		duration: 3000,
		nextid: {
			default: {
				id: 113,
			},
		},
	},
	{
		id: 113,
		type: 'msg',
		msg: "😥Il vient de me dire qu'il a le sida😥",
		nextid: {
			default: {
				id: 114,
			},
		},
	},
	{
		id: 114,
		type: 'choice',
		options: [
			{
				text: 'Tu as bien fais de lui demander',
				nextid: {
					default: {
						id: 115,
					},
				},
			},
		],
	},
	{
		id: 115,
		type: 'msg',
		msg: 'Je ne sais pas quoi faire, je vais rentrer chez moi',
		nextid: {
			default: {
				id: 116,
			},
		},
	},
	{
		id: 116,
		type: 'choice',
		options: [
			{
				text: "Ne t'inquiète pas, le sida on n'en meurt plus",
				set: {
					FINFO: true,
				},
				nextid: {
					default: {
						id: 117,
					},
				},
			},
			{
				text: "Ne t'inquiète pas, la pillule protège du sida",
				set: {
					FINFO: true,
				},
				nextid: {
					default: {
						id: 117,
					},
				},
			},
			{
				text: 'Il existe des moyens de se protéger du sida',
				nextid: {
					default: {
						id: 118,
					},
				},
			},
		],
	},
	{
		id: 118,
		type: 'msg',
		msg: 'Quels moyens ?',
		nextid: {
			default: {
				id: 119,
			},
		},
	},
	{
		id: 119,
		type: 'choice',
		options: [
			{
				text: 'Le préservatif, la PREP',
				nextid: {
					default: {
						id: 117,
					},
				},
			},
			{
				text: 'La pilule',
				set: {
					FINFO: true,
				},
				nextid: {
					default: {
						id: 117,
					},
				},
			},
			{
				text: "Il suffit juste d'éviter le sexe oral",
				set: {
					FINFO: true,
				},
				nextid: {
					default: {
						id: 117,
					},
				},
			},
		],
	},
	{
		id: 117,
		type: 'msg',
		msg: "Oh, merci des conseils, tu sais à quel risque je m'expose?",
		nextid: {
			default: {
				id: 120,
			},
		},
	},
	{
		id: 120,
		type: 'choice',
		options: [
			{
				text: 'Aucun, tu peux y aller',
				set: {
					FRISQUE: true,
					RNPROTEGE: true,
				},
				nextid: {
					default: {
						id: 125,
					},
				},
			},
			{
				text: 'Tu peux devenir séropositive si tu ne te protège pas correctement',
				nextid: {
					default: {
						id: 121,
					},
				},
			},
			{
				text: 'Si tu as un rapport avec lui tu deviendra forcément séropositive',
				set: {
					FRISQUE: true,
				},
				nextid: {
					default: {
						id: 121,
					},
				},
			},
		],
	},
	{
		id: 121,
		type: 'msg',
		msg: 'Merci pour tes conseils',
		nextid: {
			default: {
				id: 122,
			},
		},
	},
	{
		id: 122,
		type: 'delay',
		duration: 3000,
		nextid: {
			default: {
				id: 123,
			},
		},
	},
	{
		id: 123,
		type: 'msg',
		msg: '*Sophie a un rapport protégé*',
		nextid: {
			default: {
				id: 124,
			},
		},
	},
	{
		id: 124,
		type: 'end',
	},
	{
		id: 125,
		type: 'msg',
		msg: 'Merci pour tes conseils',
		nextid: {
			default: {
				id: 126,
			},
		},
	},
	{
		id: 126,
		type: 'delay',
		duration: 3000,
		nextid: {
			default: {
				id: 112,
			},
		},
	},
	{
		id: 112,
		type: 'msg',
		msg: '*Sophie a un rapport non protégé*',
		nextid: {
			default: {
				id: 127,
			},
		},
	},
	{
		id: 127,
		type: 'delay',
		duration: 3000,
		nextid: {
			default: {
				id: 128,
			},
		},
	},
	{
		id: 128,
		type: 'msg',
		msg: 'Le coup de coeur de Sophie lui avoue être séropositif',
		nextid: {
			default: {
				id: 129,
			},
		},
	},
	{
		id: 129,
		type: 'choice',
		options: [
			{
				text: '*Ne rien ajouter*',
				set: {
					SERO: true,
					NPREV: true,
				},
				nextid: {
					default: {
						id: 130,
					},
				},
			},
			{
				text: "Je m'inquiète pour toi, il faut que tu te prenne des dispositions après ce rapport",
				nextid: {
					default: {
						id: 131,
					},
				},
			},
		],
	},
	{
		id: 130,
		type: 'msg',
		msg: '*Sophie deviens séropositive*',
		nextid: {
			default: {
				id: 124,
			},
		},
	},
	{
		id: 131,
		type: 'msg',
		msg: 'Quel genre de dispositions?',
		nextid: {
			default: {
				id: 132,
			},
		},
	},
	{
		id: 132,
		type: 'choice',
		options: [
			{
				text: 'Aucune en fait',
				set: {
					NPREV: true,
					SERO: true,
				},
				nextid: {
					default: {
						id: 130,
					},
				},
			},
			{
				text: 'Il faut que dans le doute tu prennes un traitement post-exposition et que tu te fasses dépister',
				nextid: {
					default: {
						id: 133,
					},
				},
			},
			{
				text: 'Il faut juste que tu te fasses dépister',
				set: {
					NPREV: true,
					SERO: true,
				},
				nextid: {
					default: {
						id: 130,
					},
				},
			},
		],
	},
	{
		id: 133,
		type: 'msg',
		msg: "Qu'est-ce que c'est le traitement post-exposition?",
		nextid: {
			default: {
				id: 134,
			},
		},
	},
	{
		id: 134,
		type: 'choice',
		options: [
			{
				text: 'Un traitement qui te permet de ne pas être séropositive, tu peux y aller dès que tu as le temps ce mois-ci',
				set: {
					NPREV: true,
					SERO: true,
				},
				nextid: {
					default: {
						id: 130,
					},
				},
			},
			{
				text: 'Un traitement qui te permet de ne pas être séropositive, et qui dois être pris le plus tôt possible après le rapport',
				nextid: {
					default: {
						id: 135,
					},
				},
			},
		],
	},
	{
		id: 135,
		type: 'msg',
		msg: '*Sophie parvient à éviter la contamination par le VIH*',
		nextid: {
			default: {
				id: 124,
			},
		},
	},
]
