import backIcon from './statics/back-icon.svg'
import styled from 'styled-components'

export const Wrapper = styled.div`
	position: absolute;
	top: 29px;
	right: 22px;
	display: flex;
	align-items: center;
	width: 200px;
	z-index: 10;
	justify-content: space-between;
`

export const Text = styled.div`
	font: 50px Cuprum;
	color: ${({ theme }) => theme.color.title};
`

export const Icon = styled.div`
	width: 72px;
	height: 57px;

	background: url(${backIcon}) no-repeat center;
	background-size: cover;
`