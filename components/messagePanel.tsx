import { Choice, Option } from '@/scenario/types'
import { LegacyRef, useEffect, useRef } from 'react'
import { Contact } from './contact'
import MaterialSymbolsSendRounded from './icones/MaterialSymbolsSendRounded'
import RiArrowLeftLine from './icones/RiArrowLeftLine'
import { Message } from './message'

type Props = {
	contacts: Contact[]
	selectedContact: string | null
	onClose: () => void
	onSelectChoice: (option: Option) => void
	onSelectChoiceMarc: (option: Option) => void
	choice: Choice | null
	choiceMarc: Choice | null
	isWriting?: boolean
}

export const MessagePanel = ({
	contacts,
	selectedContact,
	onClose,
	choice,
	choiceMarc,
	onSelectChoice,
	isWriting,
	onSelectChoiceMarc,
}: Props) => {
	const scrollDiv = useRef<null | HTMLDivElement>(null)
	useEffect(() => {
		//Scroll to bottom
		if (scrollDiv.current)
			scrollDiv.current.scrollTop = scrollDiv.current.scrollHeight
	})
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (choice && selectedContact == 'Sophie') {
				if (e.key === '1' && choice.options.length >= 1) {
					onSelectChoice(choice.options[0])
				} else if (e.key === '2' && choice.options.length >= 2) {
					onSelectChoice(choice.options[1])
				} else if (e.key === '3' && choice.options.length >= 3) {
					onSelectChoice(choice.options[2])
				} else if (e.key === '4' && choice.options.length >= 4) {
					onSelectChoice(choice.options[3])
				}
			}
		}
		window.addEventListener('keyup', onKey)
		//number allow user to select choice

		return () => {
			window.removeEventListener('keyup', onKey)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [choice])
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			//number allow user to select choice
			if (choiceMarc && selectedContact === 'Livreur de pizza') {
				if (e.key === '1' && choiceMarc.options.length >= 1) {
					onSelectChoiceMarc(choiceMarc.options[0])
				} else if (e.key === '2' && choiceMarc.options.length >= 2) {
					onSelectChoiceMarc(choiceMarc.options[1])
				} else if (e.key === '3' && choiceMarc.options.length >= 3) {
					onSelectChoiceMarc(choiceMarc.options[2])
				} else if (e.key === '4' && choiceMarc.options.length >= 4) {
					onSelectChoiceMarc(choiceMarc.options[3])
				}
			}
		}
		window.addEventListener('keyup', onKey)

		return () => {
			window.removeEventListener('keyup', onKey)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [choiceMarc])

	if (!selectedContact) return null
	const contact = contacts.find((c) => c.name === selectedContact)
	if (!contact) return null

	return (
		<div className=' mx-auto flex h-full w-full max-w-2xl flex-col'>
			<div className='flex h-20 w-full items-center gap-2 p-5'>
				<button
					onClick={() => onClose()}
					className='btn-ghost btn h-12 w-12 rounded-full px-0 md:hidden'
				>
					<RiArrowLeftLine className='h-6 w-6' />
				</button>
				<h1 className='text-xl font-medium'>{contact.name}</h1>
			</div>
			<div
				ref={scrollDiv}
				className='flex grow flex-col gap-5 overflow-y-auto p-5'
			>
				{contact.messages.map((message) => (
					<Message
						key={message.date.getTime()}
						message={message}
						contact={contact}
					/>
				))}
				{isWriting && (
					<Message
						contact={contact}
						isWriting
						message={{
							content: '',
							date: new Date(),
							fromMe: false,
							seen: false,
						}}
					/>
				)}
			</div>
			<div className='flex flex-col gap-5 p-5'>
				<div className='flex w-full max-w-2xl flex-wrap gap-4'>
					{selectedContact == 'Sophie' && choice && (
						<>
							{choice.options.map((option, index) => (
								<button
									key={option.text}
									onClick={() => {
										if (contact.name == 'Livreur de pizza')
											onSelectChoiceMarc(option)
										else onSelectChoice(option)
									}}
									className='border-1 no-uppercase btn-outline btn rounded-xl'
								>
									<span className='kbd mr-2 !text-base-content'>
										{index + 1}
									</span>
									{option.text}
								</button>
							))}
						</>
					)}
					{selectedContact == 'Livreur de pizza' && choiceMarc && (
						<>
							{choiceMarc.options.map((option, index) => (
								<button
									key={option.text}
									onClick={() => {
										if (contact.name == 'Livreur de pizza')
											onSelectChoiceMarc(option)
										else onSelectChoice(option)
									}}
									className='border-1 no-uppercase btn-outline btn rounded-xl'
								>
									<span className='kbd mr-2 !text-base-content'>
										{index + 1}
									</span>
									{option.text}
								</button>
							))}
						</>
					)}
				</div>
				<div className='flex gap-4'>
					<input
						type='text'
						placeholder='Type here'
						value={''}
						className='input pointer-events-none w-full grow rounded-full'
						onChange={() => {}}
					/>
					<button className='btn-primary btn h-12 w-12 rounded-full px-0'>
						<MaterialSymbolsSendRounded className='h-6 w-6' />
					</button>
				</div>
			</div>
		</div>
	)
}
