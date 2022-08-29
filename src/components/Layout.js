import Footer from './Footer';
import Header from './Header';

export default function Layout({children}) {
	return (
		<>
			<Header />
			<main
				style={{
					paddingBottom: '40px',
				}}
			>
				{children}
			</main>
			<Footer />
		</>
	);
}
