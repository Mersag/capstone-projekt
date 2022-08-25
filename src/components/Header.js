import Link from 'next/link';
import {useRouter} from 'next/router';

export default function Header() {
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
}
