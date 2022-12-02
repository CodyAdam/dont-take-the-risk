import { Contact } from './contact'
import MaterialSymbolsSendRounded from './icones/MaterialSymbolsSendRounded'
import RiArrowLeftLine from './icones/RiArrowLeftLine'
import { Message } from './message'

type Props = {
	contact: Contact | null
	onClose: () => void
}

export const MessagePanel = ({ contact, onClose }: Props) => {
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
				{contact.messages.map((message) => (
					<Message
						key={message.date.getTime()}
						message={message}
						contact={contact}
					/>
				))}
				{contact.messages.map((message) => (
					<Message
						key={message.date.getTime()}
						message={message}
						contact={contact}
					/>
				))}
				{contact.messages.map((message) => (
					<Message
						key={message.date.getTime()}
						message={message}
						contact={contact}
					/>
				))}
				{contact.messages.map((message) => (
					<Message
						key={message.date.getTime()}
						message={message}
						contact={contact}
					/>
				))}
				{contact.messages.map((message) => (
					<Message
						key={message.date.getTime()}
						message={message}
						contact={contact}
					/>
				))}
				{contact.messages.map((message) => (
					<Message
						key={message.date.getTime()}
						message={message}
						contact={contact}
					/>
				))}
				{contact.messages.map((message) => (
					<Message
						key={message.date.getTime()}
						message={message}
						contact={contact}
					/>
				))}
				{contact.messages.map((message) => (
					<Message
						key={message.date.getTime()}
						message={message}
						contact={contact}
					/>
				))}
				{contact.messages.map((message) => (
					<Message
						key={message.date.getTime()}
						message={message}
						contact={contact}
					/>
				))}
			</div>
			<div className='flex gap-5 p-5'>
				<input
					type='text'
					placeholder='Type here'
					className='input w-full rounded-full'
				/>
				<button className='btn-primary btn h-12 w-12 rounded-full px-0'>
					<MaterialSymbolsSendRounded className='h-6 w-6' />
				</button>
			</div>
		</div>
	)
}
