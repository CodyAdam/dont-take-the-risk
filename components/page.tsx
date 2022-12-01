import Head from 'next/head'

interface Props {
	children: React.ReactNode
}

const Page = ({ children }: Props) => (
	<>
		<main className='mx-auto max-w-screen-md pt-20 pb-16 px-safe sm:pb-0'>
			<div className='p-6'>{children}</div>
		</main>
	</>
)

export default Page
