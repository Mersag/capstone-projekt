import Link from 'next/link';
import {useRouter} from 'next/router';
import styled from 'styled-components';

const StyledFooter = styled.footer`
	position: fixed;
	bottom: 0;
	width: 100%;
	background-color: #83c5be;
`;

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-evenly;
	padding: 15px;
	color: white;
`;

const StyledLink = styled.a`
	padding: 5px 20px;
	background: ${({active}) => {
		return active ? '#781830' : 'transparent';
	}};
	color: white;
	text-decoration: none;

	&:hover {
		color: white;
	}

	&:visited {
		color: white;
	}
`;

export default function Footer() {
	const router = useRouter();
	return (
		<StyledFooter>
			<StyledNav>
				<Link href="/">
					<StyledLink active={router.asPath === '/'}>Asana Home</StyledLink>
				</Link>
				<Link href="/routine">
					<StyledLink active={router.asPath === '/routine'}>Asana Routine</StyledLink>
				</Link>
			</StyledNav>
		</StyledFooter>
	);
}
