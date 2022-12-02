import { Contact, ContactBar } from '@/components/contact'
import { MessagePanel } from '@/components/messagePanel'
import Page from '@/components/page'
import { initialContact, scenario } from '@/scenario/mock'
import { Choice, Condition, NextId, Node, Option } from '@/scenario/types'
import { useEffect, useState } from 'react'

const Index = () => {
	const [openMsg, setOpenMsg] = useState(true)
	const [contacts, setContacts] = useState(initialContact)
	const [selectedContact, setSelectedContact] = useState<string | null>(null)
	const [mainNode, setMainNode] = useState<Node | null>(scenario[0])
	const [choice, setChoice] = useState<Choice | null>(null)
	const [vars, setVars] = useState<Condition>({})

	useEffect(() => {
		play()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [mainNode])

	useEffect(() => {
		const contact = contacts.find((c) => c.name === selectedContact)
		if (contact) setSelectedContact(contact.name)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [contacts])

	const play = () => {
		if (!mainNode) return

		if (mainNode.type == 'end') {
			setMainNode(null)
		} else if (mainNode.type == 'msg') {
			const newContacts = contacts
			newContacts[0] = {
				...newContacts[0],
				messages: [
					...newContacts[0].messages,
					{
						fromMe: false,
						date: new Date(),
						content: mainNode.msg,
						seen: false,
					},
				],
			}
			setContacts(newContacts)
			goToNextNode(mainNode.nextid)
		} else if (mainNode.type == 'choice') {
			setChoice(mainNode)
		} else if (mainNode.type == 'delay') {
			setTimeout(() => {
				goToNextNode(mainNode.nextid)
			}, mainNode.duration)
		}
	}

	const goToNextNode = (nextId: NextId) => {
		if (nextId.conditional) {
			nextId.conditional.forEach((cond) => {
				let valid = false
				Object.keys(cond.conditions).forEach((key) => {
					if (vars[key] === cond.conditions[key]) valid = true
				})
				if (valid) {
					const nextNode = scenario.find((node) => node.id == cond.id)
					if (!nextNode) {
						console.log('Node not found :' + cond.id)
					}
					console.log('-> ' + cond.id)
					setMainNode(nextNode ? nextNode : null)
					return
				}
			})
		}
		const nextNode = scenario.find((node) => node.id == nextId.default.id)
		if (!nextNode) {
			console.log('Node not found :' + nextId.default.id)
		}
		console.log('-> ' + nextId.default.id)
		setMainNode(nextNode ? nextNode : null)
		return
	}

	const selectChoice = (option: Option) => {
		if (option.set) {
			setVars({ ...vars, ...option.set })
		}
		const newContacts = contacts
		newContacts[0] = {
			...newContacts[0],
			messages: [
				...newContacts[0].messages,
				{
					fromMe: true,
					date: new Date(),
					content: option.text,
					seen: false,
				},
			],
		}
		setChoice(null)
		setContacts(newContacts)
		goToNextNode(option.nextid)
	}

	return (
		<Page>
			<div className='flex h-full w-full overflow-hidden'>
				<div className='flex w-full shrink-0 flex-col bg-base-100 pt-20 md:w-[20rem] md:max-w-xl'>
					{contacts.map((contact) => (
						<ContactBar
							onClick={() => {
								setOpenMsg(true)
								setSelectedContact(contact.name)
							}}
							contact={contact}
							key={contact.name}
						/>
					))}
				</div>
				<div
					className='absolute flex h-full w-full grow flex-col bg-base-200 transition-all md:relative md:w-auto md:!translate-x-0'
					style={{ translate: openMsg ? '0' : '100%' }}
				>
					<MessagePanel
						contacts={contacts}
						selectedContact={selectedContact}
						choice={choice}
						onSelectChoice={selectChoice}
						onClose={() => setOpenMsg(false)}
					/>
				</div>
			</div>
		</Page>
	)
}

export default Index
