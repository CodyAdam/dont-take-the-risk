import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang='fr'>
				<Head />
				<body className='overflow-hidden'>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
export default MyDocument
