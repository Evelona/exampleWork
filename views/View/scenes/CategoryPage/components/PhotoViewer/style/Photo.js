import { DURATION } from 'config'
import styled from 'styled-components'

const LEFT = 'left'
const defaultPhotoWidth = 968
const defaultPhotoHeight = 800

export const Photo = styled.div`
	position: absolute;
   height: ${({ photoHeight }) => photoHeight ? photoHeight : defaultPhotoHeight}px;
	width: ${({ photoWidth }) => photoWidth ? photoWidth : defaultPhotoWidth}px;
	background: url(${({ url }) => url}) center no-repeat;
	background-size: contain;
	top: 85px;

	transition:
			opacity ${DURATION.NORMAL}ms,
			transform ${DURATION.NORMAL}ms;
	&.enter {
		transform: translateX(${({ animDirection, photoWidth }) => animDirection === LEFT ? photoWidth : -photoWidth}px);
		touch-action: none;
		pointer-events: none;
		opacity: 0;
	}
	&.enter-active {
		transform: translateX(0);
		opacity: 1;
		
	}
	&.exit  {
		transform: translateX(0);
		pointer-events: none;
		touch-action: none;
		opacity: 1;
	}
	&.exit-active {
	transform: translateX(${({ animDirection, photoWidth }) => animDirection === LEFT ? -photoWidth : photoWidth}px);
		opacity: 0;
	}
`