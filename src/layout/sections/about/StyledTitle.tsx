import styled from 'styled-components'
import { theme } from '../../../styles/Theme'

export const StyledTitle = styled.h4`
	font-size: 42px;
	font-weight: 700;
	line-height: 52px;
	letter-spacing: -0.4px;
	margin-bottom: 38px;
	color: ${theme.colors.fontColor};
	@media ${theme.media.tablet} {
		font-size: 35px;
		line-height: 42px;
		margin-bottom: 15px;
	}
`
