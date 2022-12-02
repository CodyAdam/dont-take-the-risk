interface Props {
	children: React.ReactNode
}

const Page = ({ children }: Props) => (
	<>
		<main className='h-screen w-screen overflow-hidden'>
			{children}
		</main>
	</>
)

export default Page
