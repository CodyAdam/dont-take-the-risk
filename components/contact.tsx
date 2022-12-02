import { Message } from './message'
import Image from 'next/image'

export type Contact = {
	name: string
	messages: Message[]
	avatarUrl: string
}

type Props = {
	contact: Contact
	onClick: () => void
	className?: string
}

export const ContactBar = ({ contact, onClick, className }: Props) => {
	return (
		<div
			className={`${className} flex h-16 w-full items-center justify-between gap-3 px-6 cursor-pointer hover:bg-base-200`}
      onClick={onClick}
		>
			<div className='flex items-center gap-5'>
				<div className='avatar h-10 w-10'>
					<Image
						src={contact.avatarUrl}
						alt='avatar'
						layout='fill'
						className='rounded-full'
					/>
				</div>
				<div className='flex flex-col items-start gap-0'>
					<h1 className='text-lg font-medium'>{contact.name}</h1>
					<p className=' text-sm text-neutral'>{contact.messages[contact.messages.length - 1].content}</p>
				</div>
			</div>
			<div className='text-sm'>3 min ago</div>
		</div>
	)
}
