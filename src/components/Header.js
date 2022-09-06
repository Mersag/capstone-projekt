import styled from 'styled-components';

const StyledHeader = styled.header`
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
			<h4>My Yoga Routine</h4>
		</StyledHeader>
	);
}
