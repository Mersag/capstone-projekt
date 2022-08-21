import {useRouter} from 'next/router';

const Header = () => {
	const router = useRouter();
	return (
		<header>
			<button onClick={() => router.back()}>zurück</button>
			<nav></nav>
		</header>
	);
};
export default Header;
