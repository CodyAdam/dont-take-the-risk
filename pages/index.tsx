import { Contact, ContactBar } from '@/components/contact'
import { MessagePanel } from '@/components/messagePanel'
import Page from '@/components/page'
import { initialContact } from '@/scenario/mock'
import { scenario } from '@/scenario/first'
import { Choice, Condition, NextId, Node, Option } from '@/scenario/types'
import { useEffect, useState } from 'react'
import { scenarioMarc } from '@/scenario/pizza'

const DELAY = 3000 // const DELAY = 0
const Index = () => {
	const [openMsg, setOpenMsg] = useState(true)
	const [contacts, setContacts] = useState(initialContact)
	const [selectedContact, setSelectedContact] = useState<string | null>(
		'Sophie'
	)
	const [mainNode, setMainNode] = useState<Node | null>(scenario[0])
	const [marcNode, setMarcNode] = useState<Node | null>(scenarioMarc[0])
	const [choice, setChoice] = useState<Choice | null>(null)
	const [choiceMarc, setChoiceMarc] = useState<Choice | null>(null)
	const [vars, setVars] = useState<Condition>({})
	const [isWriting, setIsWriting] = useState(false)
	const [showEnd, setShowEnd] = useState(false)
	useEffect(() => {
		const marc = contacts.find((c) => c.name === 'Livreur de pizza')
		if (marc && marc.messages.length === 0) {
			playMarc()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [contacts])
	
	useEffect(() => {
		if (
			vars['MARC'] &&
			contacts.find((c) => c.name === 'Livreur de pizza') === undefined
		) {
			setContacts((contacts) => [
				...contacts,
				{
					name: 'Livreur de pizza',
					messages: [],
					avatarUrl: '/person2.jpg',
				},
			])
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [vars])

	useEffect(() => {
		play()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [mainNode])

	useEffect(() => {
		// if mark in contact
		if (contacts.find((c) => c.name === 'Livreur de pizza')) {
			playMarc()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [marcNode])

	useEffect(() => {
		const contact = contacts.find((c) => c.name === selectedContact)
		if (contact) setSelectedContact(contact.name)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [contacts])

	const play = () => {
		if (!mainNode) {
			setShowEnd(true)
			return
		}

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
			goWithDelay(mainNode.nextid, DELAY)
		} else if (mainNode.type == 'choice') {
			setChoice(mainNode)
		} else if (mainNode.type == 'delay') {
			setTimeout(() => {
				goWithDelay(mainNode.nextid, DELAY)
			}, mainNode.duration * 2)
		}
	}

	const playMarc = () => {
		if (!marcNode) return
		const marcIndex = contacts.findIndex((c) => c.name === 'Livreur de pizza')

		if (marcNode.type == 'end') {
			setMarcNode(null)
		} else if (marcNode.type == 'msg') {
			const newContacts = contacts
			newContacts[marcIndex] = {
				...newContacts[marcIndex],
				messages: [
					...newContacts[marcIndex].messages,
					{
						fromMe: false,
						date: new Date(),
						content: marcNode.msg,
						seen: false,
					},
				],
			}
			setContacts(newContacts)
			goWithDelay(marcNode.nextid, DELAY, true)
		} else if (marcNode.type == 'choice') {
			setChoiceMarc(marcNode)
		} else if (marcNode.type == 'delay') {
			setTimeout(() => {
				goWithDelay(marcNode.nextid, DELAY, true)
			}, marcNode.duration * 2)
		}
	}

	const goToNextNode = (nextId: NextId, marc?: boolean) => {
		if (nextId.conditional) {
			nextId.conditional.forEach((cond) => {
				let valid = false
				Object.keys(cond.conditions).forEach((key) => {
					if (vars[key] === cond.conditions[key]) valid = true
				})
				if (valid) {
					const nextNode = (marc ? scenarioMarc : scenario).find(
						(node) => node.id == cond.id
					)
					if (!nextNode) {
						console.log('Node not found :' + cond.id)
					}
					console.log('-> ' + cond.id)
					if (marc) setMarcNode(nextNode ? nextNode : null)
					else setMainNode(nextNode ? nextNode : null)
					return
				}
			})
		}
		const nextNode = (marc ? scenarioMarc : scenario).find(
			(node) => node.id == nextId.default.id
		)
		if (!nextNode) {
			console.log('Node not found :' + nextId.default.id)
		}
		console.log('-> ' + nextId.default.id)
		if (marc) setMarcNode(nextNode ? nextNode : null)
		else setMainNode(nextNode ? nextNode : null)
		return
	}

	const selectChoice = (option: Option, marc?: boolean) => {
		if (showEnd) return
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
		goWithDelay(option.nextid, DELAY)
	}
	const selectChoiceMarc = (option: Option) => {
		if (showEnd) return
		if (option.set) {
			setVars({ ...vars, ...option.set })
		}
		const marcIndex = contacts.findIndex((c) => c.name === 'Livreur de pizza')

		const newContacts = contacts
		newContacts[marcIndex] = {
			...newContacts[marcIndex],
			messages: [
				...newContacts[marcIndex].messages,
				{
					fromMe: true,
					date: new Date(),
					content: option.text,
					seen: false,
				},
			],
		}
		setChoiceMarc(null)
		setContacts(newContacts)
		goWithDelay(option.nextid, DELAY, true)
	}

	const goWithDelay = (nextId: NextId, delay: number, marc?: boolean) => {
		const targetNode = (marc ? scenarioMarc : scenario).find(
			(node) => node.id == nextId.default.id
		)
		if (targetNode && targetNode.type == 'msg') setIsWriting(true)
		setTimeout(
			() => {
				setIsWriting(false)
				goToNextNode(nextId, marc)
			},
			targetNode && targetNode.type == 'msg' ? delay : 0
		)
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
						isWriting={isWriting}
						contacts={contacts}
						selectedContact={selectedContact}
						onSelectChoice={selectChoice}
						choiceMarc={choiceMarc}
						onSelectChoiceMarc={selectChoiceMarc}
						choice={choice}
						onClose={() => setOpenMsg(false)}
					/>
				</div>
				<input
					type='checkbox'
					id='my-modal'
					className='modal-toggle'
					checked={showEnd}
					onChange={() => {}}
				/>
				<div className='modal'>
					<div className='modal-box'>
						<h3 className='py-4 text-3xl font-bold'>
							Merci d&apos;avoir jou?? ?? ce jeu !
						</h3>
						{Object.keys(vars).length == 0 ? (
							<p className='py-4 font-semibold text-green-500'>
								C&apos;est un sans faute
							</p>
						) : (
							<p className='pt-4 text-xl font-semibold text-red-500'>
								Vous avez fait les ??rreurs suivantes :
							</p>
						)}
						<div className='[&>p]:text-md pb-5 pt-2 pl-4'>
							{Object.keys(vars).map((key) => {
								if (key == 'SERO')
									return (
										<p key={key}>
											- Vous n&apos;avez pas r??ussi ?? empecher la contamination
											de sophie par le VIH
										</p>
									)
								if (key == 'FINFO')
									return (
										<p key={key}>
											- Vous avez donn?? des fausses informations ?? Sophie
										</p>
									)
								if (key == 'FRISQUE')
									return (
										<p key={key}>
											- Vous avez menti ?? Sophie sur les risques qu&apos;elle
											encourait
										</p>
									)
								if (key == 'RNPROTEGE')
									return (
										<p key={key}>
											- Vous n&apos;avez pas donn?? les bonnes consigne ?? Sophie
											pour qu&apos;elle se prot??ge
										</p>
									)
								if (key == 'NPREV')
									return (
										<p key={key}>
											- Vous n&apos;avez pas permis ?? Sophie de se prot??ger en
											amont de ce rapport
										</p>
									)
								if (key == 'MARC')
									return (
										<p key={key}>
											- Vous avez trouver l&apos;easter eggs (Marc)
										</p>
									)
							})}
						</div>
						<p className='py-4 text-xs [&>a]:font-semibold [&>a]:text-blue-500'>
							Fait avec ?????? par <a href='https://codyadm.com'>Cody ADAM</a>,{' '}
							<a href='https://mael.app/'>Mael KERICHARD</a> et{' '}
							<a href='https://github.com/Thomega35'>Thomas DELAPART</a>
						</p>
						<p className='py-4 text-xs [&>a]:font-semibold [&>a]:text-blue-500'>
							<a href='https://github.com/CodyAdam/dont-take-the-risk'>
								Github
							</a>
						</p>
					</div>
				</div>
			</div>
		</Page>
	)
}

export default Index
