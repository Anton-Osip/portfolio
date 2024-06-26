import { createGlobalStyle } from 'styled-components'
import { theme } from './Theme'

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	margin: 0;
	font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
		'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
		'Helvetica Neue', sans-serif;
	color:${theme.colors.fontColor};
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

a {
	text-decoration: none;
}

ul {
	list-style: none;
}

button {
	background-color: unset;
	border: none;
}

header,
footer,
main,
section {
	background-color:${theme.colors.primaryBg};
}
`
