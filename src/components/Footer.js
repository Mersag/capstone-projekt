import Link from 'next/link';
import {useRouter} from 'next/router';
import styled from 'styled-components';

const StyledFooter = styled.footer`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 60px;
	background: #f01878;
`;

const StyledNav = styled.nav`
	display: flex;
	padding: 15px;
	background-color: #f01878;
	color: white;
`;

const StyledLink = styled.a`
	padding: 0 200px;
	background: ${({active}) => {
		return active ? '#781830' : 'transparent';
	}};
	color: white;
	text-decoration: none;

	&:hover {
		color: #4878ff;
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
					<StyledLink active={router.asPath === '/' ? true : false}>
						Asana Home
					</StyledLink>
				</Link>
				<Link href="/routine">
					<StyledLink active={router.asPath === '/routine' ? true : false}>
						Asana Routine
					</StyledLink>
				</Link>
			</StyledNav>
		</StyledFooter>
	);
}
