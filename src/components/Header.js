import {useRouter} from 'next/router';

export default function Header() {
	const router = useRouter();
	return (
		<header>
			<button onClick={() => router.back()}>zurück</button>
		</header>
	);
}
