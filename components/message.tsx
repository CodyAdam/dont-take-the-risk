import { Contact } from './contact'
import Image from 'next/image'
import MaterialSymbolsCheckSmall from './icones/MaterialSymbolsCheckSmall'
import { formatDate } from '@/utils/date-helper'
import EosIconsThreeDotsLoading from './icones/EosIconsThreeDotsLoading'

export type Message = {
	fromMe: boolean
	date: Date
	content: string
	seen: boolean
}

type Props = {
	message?: Message
	contact: Contact
	isWriting?: boolean
}

export const Message = ({ message, contact, isWriting }: Props) => {
	if (isWriting)
		return (
			<div
				className={`flex items-center justify-${false ? 'end' : 'start'} gap-3`}
			>
				{!false && (
					<div className='avatar h-10 w-10 shrink-0 self-start'>
						<Image
							src={
								contact ? contact.avatarUrl : 'https://i.pravatar.cc/150?img=1'
							}
							alt='avatar'
							layout='fill'
							className='rounded-full'
						/>
					</div>
				)}
				<div className={`flex flex-col items-${false ? 'end' : 'start'} gap-1`}>
					<div
						className={`flex items-center gap-2 rounded-[1rem] px-4 py-2 ${
							false
								? 'justify-start bg-primary text-primary-content'
								: 'justify-end bg-base-100 text-neutral'
						}`}
					>
						<p className='flex'>
							<EosIconsThreeDotsLoading className='h-6 w-6' />
						</p>
					</div>
				</div>
			</div>
		)

	if (!message) return null

	return (
		<div
			className={`flex items-center justify-${
				message.fromMe ? 'end' : 'start'
			} gap-3`}
		>
			{!message.fromMe && (
				<div className='avatar h-10 w-10 shrink-0 self-start'>
					<Image
						src={
							contact ? contact.avatarUrl : 'https://i.pravatar.cc/150?img=1'
						}
						alt='avatar'
						layout='fill'
						className='rounded-full'
					/>
				</div>
			)}
			<div
				className={`flex flex-col items-${
					message.fromMe ? 'end' : 'start'
				} gap-1`}
			>
				<div
					className={`flex items-center gap-2 rounded-[1rem] px-4 py-2 ${
						message.fromMe
							? 'justify-start bg-primary text-primary-content'
							: 'justify-end bg-base-100 text-neutral'
					}`}
				>
					<p>{message.content}</p>
				</div>
				<p
					className={`flex flex-nowrap gap-1 text-xs text-neutral ${
						message.fromMe ? 'justify-end' : ''
					}`}
				>
					{message.seen && (
						<MaterialSymbolsCheckSmall className='h-4 w-4 shrink-0' />
					)}
					{formatDate(message.date, true)}
				</p>
			</div>
		</div>
	)
}
