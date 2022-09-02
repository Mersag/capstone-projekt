import styled, {css} from 'styled-components';

const StyledNavLink = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px 20px;
	border-radius: 3px;
	background-color: #006d77;
	cursor: pointer;
	${({active}) =>
		active &&
		css`
			background: #785c5b;
			color: white;
		`};
`;

export default StyledNavLink;
