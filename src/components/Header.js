import Link from 'next/link';
import styled from 'styled-components';

const NaviHeader = styled.header`
	display: flex;
	padding: 15px;
	background-color: #f01878;
	color: white;

	& a {
		padding: 0 100px;
		color: white;
		text-decoration: none;
	}
	& a:hover {
		color: blanck;
	}
	& a:active {
		color: #4878ff;
	}
	& a:visited {
		color: white;
	}
`;

export default function Header() {
	return (
		<NaviHeader>
			<nav>
				<Link href="/">
					<a>Asana Home</a>
				</Link>
				<Link href="/routine">
					<a>Asana Routine</a>
				</Link>
			</nav>
		</NaviHeader>
	);
}
