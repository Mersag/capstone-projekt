import styled from 'styled-components';

const StyledHeader = styled.header`
	position: fixed;
	z-index: 100;
	width: 100%;
	padding: 20px;
	background-color: #83c5be;
	color: white;
`;

export default function Header() {
	return (
		<StyledHeader>
			<h2>My Yoga Routine</h2>
		</StyledHeader>
	);
}
