import { Message } from './message'
import Image from 'next/image'
import { formatDate } from '@/utils/date-helper'

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
			className={`${className} flex h-16 w-full cursor-pointer items-center justify-between gap-3 px-6 hover:bg-base-200/30`}
			onClick={onClick}
		>
			<div className='flex min-w-0 items-center gap-5'>
				<div className='avatar h-10 w-10 shrink-0'>
					<Image
						src={contact.avatarUrl}
						alt='avatar'
						layout='fill'
						className='rounded-full'
					/>
				</div>
				<div className='flex min-w-0 flex-col items-start gap-0 overflow-hidden'>
					<h1 className='overflow-hidden min-w-0 text-ellipsis whitespace-nowrap text-lg font-medium'>
						{contact.name}
					</h1>
					<p className=' overflow-hidden min-w-0 text-ellipsis whitespace-nowrap text-sm text-neutral'>
						{/* last message content if there is one else ask the user to say hello (strip if too long)*/}
						{contact.messages.length > 0
							? contact.messages[contact.messages.length - 1].content
							: 'Say hello!'}
					</p>
				</div>
			</div>
			<div className='shrink-0 text-xs text-neutral'>
				{/* formatDate(date) of the last message if there is any else dont put anything */}
				{contact.messages.length > 0 &&
					formatDate(contact.messages[contact.messages.length - 1].date)}
			</div>
		</div>
	)
}
