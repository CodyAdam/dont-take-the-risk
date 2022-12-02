import { Contact, ContactBar } from '@/components/contact'
import { MessagePanel } from '@/components/messagePanel'
import Page from '@/components/page'
import { useState } from 'react'

const initialContact: Contact[] = [
	{
		name: 'John Doe',
		messages: [
			{
				fromMe: false,
				date: new Date(),
				content: 'Hello',
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
				date: new Date(),
				content: 'Hellolo',
				seen: false,
			},
		],
		avatarUrl: '/person2.jpg',
	},
]

const Index = () => {
	const [openMsg, setOpenMsg] = useState(true)
	const [contacts, setContacts] = useState(initialContact)
	const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
	return (
		<Page>
			<div className='flex h-full w-full overflow-hidden'>
				<div className='flex w-full shrink-0 flex-col bg-base-100 pt-20 md:w-[20rem] md:max-w-xl'>
					{contacts.map((contact) => (
						<ContactBar
							onClick={() => {
								setOpenMsg(true)
								setSelectedContact(contact)
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
						contact={selectedContact}
						onClose={() => setOpenMsg(false)}
					/>
				</div>
			</div>
		</Page>
	)
}

export default Index
