import firstHero from './statics/red-hero.webp'
import fortress from './statics/fortress.webp'
import secondHero from './statics/blue-hero.webp'
import styled from 'styled-components'

const photo = {
	area: firstHero,
	city: fortress,
	population: secondHero
}

export const Wrapper = styled.div`
	width: 499px;
	height: 750px;
	border-radius: 25px;
	overflow: hidden;
	position: relative;
	box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.3);
	
`

export const Photo = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 499px;
	height: 543px;
	background: url(${({ type }) => photo[type]}) 0 0 no-repeat;
`

export const Label = styled.div`
	width: 412.69px;
	z-index: 10;
	position: absolute;
	font-size: 50px;
	width: 412.69px;
	height: 131px;
	left: 44px;
	top: 568px;
	text-align: center;
	margin: auto;
	color: ${({ theme }) => theme.color.title};
	white-space: pre-line;
	display: flex;
	align-items: center;
	justify-content: center;
`