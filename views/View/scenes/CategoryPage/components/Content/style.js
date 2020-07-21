import { ANCHOR_CONTENT_PADDING } from 'config'
import bg from 'background'
import styled from 'styled-components'

export const Wrapper = styled.div`
	position: relative;
	box-sizing: border-box;
	height: 100%;
	width: 824px;
	margin-left: 10px;
	background: url(${bg});
	background-size: cover;
	background-position: -638px 0;
	position:relative;
	padding: 0 0 0 89px;

	&:after  // Тень за блоком
		{
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
`

export const Wrap = styled.div`
	padding-top: ${ANCHOR_CONTENT_PADDING};
	box-sizing: border-box;
	overflow-y: scroll;
	width: 592px;
	height: 100%;
	mask-image: linear-gradient(to bottom,transparent 0,#000 10%,#000 90%,transparent 99%);
	
	::-webkit-scrollbar {
		display: none;
	}
	
	color: ${({ theme }) => theme.color.title};
`

export const Text = styled.div`
	font: 24px Cuprum;
	width: 592px;
	white-space: pre-line;
	padding-bottom: 90px;
	text-indent: 1.5em;

	p {
		margin: 0;
	}

	ul {
		margin: 0;
		text-indent: 1em;
		white-space: normal;

		margin-top: -20px;
	}

`

export const Title = styled.div`
	font-size: 50px;
	width: 592px;
	padding-bottom: 35px;
`

export const SectionWrapper = styled.div``