import { DURATION } from 'config'
import styled from 'styled-components'

const dots = {
	left: '11px',
	right: '-11px'
}

export const Wrapper = styled.div`
	opacity: ${({ isCurrent }) => isCurrent ? 1 : 0};
	position: absolute;
	top: 45%;
	width: 570px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	transition: opacity ${DURATION.NORMAL}ms ease-out;
`

export const Dot = styled.div`
	width: 8px;
	height: 8px;
	
   background: rgba(245,244,240,0.1);
   box-shadow: ${({ direction }) => dots[direction]} 4px 7px rgba(0,0,0,0.25);
`