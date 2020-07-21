import arrow from '../statics/arrow.png'
import closeBtn from '../statics/close-btn.png'
import styled from 'styled-components'

const Button = styled.div`
	width: 100px;
	height: 150px;
	position: absolute;
	top: calc(50% - 50px);
	background: url(${arrow}) center no-repeat;
	background-size: contain;
	opacity: ${({ blocked }) => blocked ? 0 : 1};
	pointer-events: ${({ blocked }) => blocked ? 'none' : 'auto'};
`

export const ButtonNext = styled(Button)`
	right: 80px;
`
export const ButtonPrev = styled(Button)`
	left: 80px;
	transform: rotate(180deg);
`

export const CloseButton = styled.div`
	position: absolute;
	right: 45px;
	top: 33px;
	width: 60px;
	height: 60px;
	font-size: 50px;
	text-align: center;
	line-height: 53px;
	color: red;
	background: url(${closeBtn}) center no-repeat;
	background-size: contain;
`