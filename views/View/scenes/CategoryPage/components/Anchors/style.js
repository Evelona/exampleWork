import styled from 'styled-components'

export const Wrapper = styled.div`
	padding-top: 14px;
	width: 564px;
	height: 700px;
	margin: 0 auto;
	overflow-y: scroll;
	position: relative;
	mask-image: linear-gradient(to bottom, transparent, #000 5%, #000 90%, transparent 100%);

	::-webkit-scrollbar {
		display: none;
	}

`

export const AnchorWraapper = styled.div`
	position: relative;
	height: fit-content;
`

export const Separator = styled.div`
	width: 540px;
	margin: 0 auto;

	height: 2px;
	background: rgba(209,195,123,0.05);
   box-shadow: 0px 5px 4px rgba(0,0,0,0.25);
`

export const Label = styled.div`
	padding-top: 50px;
	width: 540px;
	margin: 0 auto;

	font: 49px Cuprum;
	padding-bottom: 45px;
	text-align: center;
	color: ${({ theme }) => theme.color.title};
	white-space: pre-line;
	`