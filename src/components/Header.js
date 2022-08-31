import styled from 'styled-components';

const StyledHeader = styled.header`
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
