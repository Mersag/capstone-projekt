import Link from 'next/link';

export default function Header() {
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
		</header>
	);
}
