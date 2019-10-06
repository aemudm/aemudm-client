import styled, { css } from 'styled-components'

import b1 from '../images/background1.jpg'
import b2 from '../images/background2.jpg'
import b3 from '../images/background3.jpg'

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background-image: url(${(props) => ({ beige: b1, green: b2, books: b3 }[props.background])});
    background-position: center;
    ${(props) => props.background !== 'books' && 'background-attachment: fixed;'}
    
    ${(props) => props.background === 'books' && 'background-size: cover'}
    background-repeat: repeat;
    & > .wrapper {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
        max-width: 800px;
        padding: 40px 20px 20px 20px;
    }
    h1 {
        text-align: center;
        padding: 50px 0 10px 0;
        font-size: 36px;
        font-weight: bold;
        ${(props) => props.background === 'beige' && css`
            color: ${() => window.theme.primary}
        `}
        ${(props) => (props.background === 'green' || props.background === 'books') && css`
            color: white;
        `}
    }
`

export default Section
