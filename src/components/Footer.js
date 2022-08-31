import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import styled from 'styled-components';

import icon1 from './images/yoga_icon_126356.png';

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

const StyledLink = styled.div`
	display: flex;
	padding: 5px 20px;
	background-color: #006d77;
	color: white;
	text-decoration: none;

	&:hover {
		color: #e29578;
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
					<StyledLink>
						<a active={router.asPath === '/'}>
							<Image src={icon1} alt={'butterfly'} width={40} height={40}></Image>
							Asana Home
						</a>
					</StyledLink>
				</Link>
				<Link href="/routine">
					<StyledLink active={router.asPath === '/routine'}>Asana Routine</StyledLink>
				</Link>
			</StyledNav>
		</StyledFooter>
	);
}
