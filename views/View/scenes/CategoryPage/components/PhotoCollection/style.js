import styled from 'styled-components'

export const Wrapper = styled.div`
	flex: 1;
	overflow-y: scroll;
	mask-image: linear-gradient(to bottom, transparent, #000 25%, #000 80%, transparent 100%);
	
	::-webkit-scrollbar {
		display: none;
	}
`

export const Bar = styled.div`
	width: 80%;
	padding-top: 158px;
	margin: auto;
	display: flex;
	justify-content: center;
	flex-direction: column;
	
	::-webkit-scrollbar {
		display: none;
	}
`

export const Photo = styled.img`
	display: inline-block;
	max-width: 338px;
	margin: 0 auto 60px auto;

	:first-child {
		padding-top: 30px;
	}

	:last-child {
		padding-bottom: 50px;
	}
`