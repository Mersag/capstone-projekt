import Image from 'next/image';
import styled from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	position: sticky;
	z-index: 100;
	top: 0;
	padding: 20px;
	background-color: #83c5be;
	color: white;
`;

export default function Header() {
	return (
		<StyledHeader>
			<Image width={100} height={50} src="/images/pigeon pose.png" alt="Logo"></Image>
			<h2>My Yoga Routine</h2>
		</StyledHeader>
	);
}
