import { Contact } from '@/components/contact'
import { negativeDate } from '@/utils/date-helper'
import { Node } from './types'

// Mock scenario
// Rencontre avec Sophie : "Salut, ça va ?"
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
				text: 'Coucou',
				nextid: {
					default: {
						id: 3,
					},
				},
			},
			{
				text: 'Bonjour',
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
				text: 'Bien',
				nextid: {
					default: {
						id: 5,
					},
				},
			},
			{
				text: 'Mal',
				nextid: {
					default: {
						id: 6,
					},
				},
			},
			{
				text: 'Comme un lundi',
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
		msg: "C'est cool",
		nextid: {
			default: {
				id: 7,
			},
		},
	},
	{
		id: 6,
		type: 'msg',
		msg: 'Dommage',
		nextid: {
			default: {
				id: 1,
			},
		},
	},
	{
		id: 7,
		type: 'end',
	},
]

export const initialContact: Contact[] = [
	{
		name: 'John Doe',
		messages: [
			{
				fromMe: false,
				date: negativeDate(13),
				content: 'Hellodwajdiaw\ndawjidjwaoijd\njdiwa',
				seen: true,
			},
		],
		avatarUrl: '/person1.jpg',
	},
	{
		name: 'Maelito kevin',
		messages: [
			{
				fromMe: true,
				date: negativeDate(3, 1),
				content: 'Hellolo',
				seen: false,
			},
		],
		avatarUrl: '/person2.jpg',
	},
]
