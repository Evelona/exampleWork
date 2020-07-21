import styled from 'styled-components'

export const StyledHeading = styled.h2`
	font: 70px Cuprum;
	margin: 0;
	text-align: center;
	width: 988px;

	position: absolute;
	top: ${(props) => props.y};
	left: 476px;

	color: ${({ theme }) => theme.color.title};
	text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`