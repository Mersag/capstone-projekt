import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import styled from 'styled-components';

import icon1 from './images/yoga_icon_126356.png';
import icon2 from './images/yoga_icon_126445.png';

const StyledFooter = styled.footer`
	position: fixed;
	bottom: 0;
	width: 100%;
	background-color: #83c5be;
`;

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-evenly;
	padding: 10px;
	color: white;
`;

const StyledLink = styled.div`
	display: flex;
	align-items: center;
	padding: 2px 15px;
	border-radius: 3px;
	background-color: #006d77;
	color: white;
	text-decoration: none;

	&:active {
		color: ${({active = true}) => (active ? 'white' : '#ddbea8')};
		cursor: pointer;
	}
	&:hover {
		background-color: #008c99;
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
					<StyledLink active={router.asPath === '/index'}>
						<Image src={icon1} alt="butterfly" width={40} height={40}></Image>
						<a active={router.asPath === '/index'}>Home</a>
					</StyledLink>
				</Link>
				<Link href="/routine">
					<StyledLink active={router.asPath === '/routine'}>
						<Image src={icon2} alt="dog" width={40} height={40}></Image>Routine
					</StyledLink>
				</Link>
			</StyledNav>
		</StyledFooter>
	);
}
