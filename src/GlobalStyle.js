import {createGlobalStyle} from 'styled-components';
export const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font: inherit;
	font-size: 100%;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote::before, blockquote::after,
q::before, q::after {
	content: '';
	content: none;
}
table {
	border-spacing: 0;
	border-collapse: collapse;

}

/* poppins-regular - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/poppins-v20-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/poppins-v20-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/poppins-v20-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/poppins-v20-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/poppins-v20-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/poppins-v20-latin-regular.svg#Poppins') format('svg'); /* Legacy iOS */
}

	*,
	*::before,
	*::after {
		box-sizing: border-box;

	}

	html {
		font-size: 16px;
	}
	* body {
		margin:0;
		padding-bottom:100px;
		color:#785c5b;
		font-family: "poppins", sans-serif;
		font-size: 1.6rem;
	}

	main {
		padding-bottom:50px;
	}
`;
