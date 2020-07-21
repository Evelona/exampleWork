import bg from 'background'
import styled from 'styled-components'

export const Wrapper = styled.div`
	position: relative;
	height: 100%;
	width: 628px;
	background: url(${bg});
	background-size: cover;
	background-position: 0 0;
  	position:relative;

	&:after {
		height: 1000px;
		width: 68px;
		content:"";
		position:absolute;
		z-index: -1;
		
		box-shadow:0 0 10px rgba(0,0,0,0.4);
		top: 29px;
		bottom:0;
		
		right:0px;
		left:auto;
	}
	
	::-webkit-scrollbar {
		display: none;
	}
`
export const CategoryTitle = styled.div`
	padding-top: 135px;
	width: 412px;
	z-index: 10;
	font-size: 50px;
	width: 412.69px;
	height: 131px;
	text-align: center;
	margin: auto;
	color: ${({ theme }) => theme.color.title};
	white-space: pre-line;
	display: flex;
	align-items: center;
	justify-content: center;
`