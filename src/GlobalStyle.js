import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		font-size: 16px;
	}

	body {
		margin: 0;
		color:#006D77;
		font-size: 1rem;
	}

	main {
		padding-bottom:50px;
	}
`;
