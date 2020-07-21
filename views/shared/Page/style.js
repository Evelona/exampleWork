import { DURATION } from 'config'
import bg from '../../statics/background.webp'
import logo from '../../statics/logo.webp'
import styled from 'styled-components'

export const Background = styled.div`
	background: url(${bg}) center no-repeat;
	background-size: cover;
	z-index: 1;
	position: absolute;
	top: 0;
	left: 0;
	width: 1920px;
	height: 1080px;

	&.anim-enter {
		
		opacity: 0;
		*{
			touch-action: none;
			pointer-events: none;
			
		}
	}
	&.anim-enter-active {
		opacity: 1;
		transition:
			opacity ${DURATION.SLOW}ms ease;
	}
	&.anim-exit  {
		*{
			touch-action: none;
			pointer-events: none;
		}
		opacity: 1;
	}
	&.anim-exit-active {
	  opacity: 0;
	  transition: opacity ${DURATION.NORMAL}ms ease;
	}
`

export const Logo = styled.div`
	background: url(${logo}) 0 0 no-repeat;
	background-size: cover;
	position: absolute;
	top: 0;
	left: 0;
	width: 200px;
	height: 200px;
	z-index: 1000;
`