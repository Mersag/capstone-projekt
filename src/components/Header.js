import Link from 'next/link';
import {useRouter} from 'next/router';

const Header = () => {
	const router = useRouter();
	return (
		<header>
			<nav>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/routine">
					<a>Routine</a>
				</Link>
			</nav>
			<button onClick={() => router.back()}>zurück</button>
		</header>
	);
};
export default Header;
