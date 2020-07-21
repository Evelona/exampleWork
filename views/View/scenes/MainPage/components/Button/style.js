import buttonBg from '../../statics/button-bg.webp'
import styled from 'styled-components'

export const Wrapper = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 352px;
	height: 95px;
	left: 784px;
	top: 872px;

	background: url(${buttonBg}) center;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
	border-radius: 25px;
`

export const Label = styled.p`
	margin: 0;
	font: 60px Alice;
	color: ${({ theme }) => theme.color.title};
	text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`