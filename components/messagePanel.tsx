import { Choice, Option } from '@/scenario/types'
import { Contact } from './contact'
import MaterialSymbolsSendRounded from './icones/MaterialSymbolsSendRounded'
import RiArrowLeftLine from './icones/RiArrowLeftLine'
import { Message } from './message'

type Props = {
	contacts: Contact[]
	selectedContact: string | null
	onClose: () => void
	onSelectChoice: (option: Option) => void
	choice: Choice | null
}

export const MessagePanel = ({
	contacts,
	selectedContact,
	onClose,
	choice,
	onSelectChoice,
}: Props) => {
	if (!selectedContact) return null
	const contact = contacts.find((c) => c.name === selectedContact)
	if (!contact) return null

	return (
		<div className=' mx-auto flex h-full w-full max-w-2xl flex-col '>
			<div className='flex h-20 w-full items-center gap-2 p-5'>
				<button
					onClick={() => onClose()}
					className='btn-ghost btn h-12 w-12 rounded-full px-0 md:hidden'
				>
					<RiArrowLeftLine className='h-6 w-6' />
				</button>
				<h1 className='text-xl font-medium'>{contact.name}</h1>
			</div>
			<div className='flex grow flex-col gap-5 overflow-y-auto p-5'>
				{contact.messages.map((message) => (
					<Message
						key={message.date.getTime()}
						message={message}
						contact={contact}
					/>
				))}
			</div>
			<div className='flex flex-col gap-5 p-5'>
				<div className='flex w-full flex-wrap gap-4'>
					{choice && (
						<>
							{choice.options.map((option) => (
								<button
									key={option.text}
									onClick={() => onSelectChoice(option)}
									className='btn-outline btn rounded-xl border-2'
								>
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
						className='input w-full grow rounded-full'
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
