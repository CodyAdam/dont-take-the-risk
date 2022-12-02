import { Contact } from './contact'
import MaterialSymbolsSendRounded from './icones/MaterialSymbolsSendRounded'
import { Message } from './message'

type Props = {
	contact: Contact | null
}

export const MessagePanel = ({ contact }: Props) => {
	if (!contact) return null

	return (
		<div className=' mx-auto flex h-full w-full max-w-xl flex-col '>
			<div className='h-20'></div>
			<div className='grow'>
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
