import styled, { css } from 'styled-components'

const HexagoneCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: relative;
    width: 100%;
    height: 115px;
    margin-left: 50px;
    padding: 15px 15px 15px 65px;
    margin-bottom: 20px;
    border-radius: 5px;
    background: hsla(0, 100%, 100%, 0.8);
    h5 {
        font-size: 18px;
        font-weight: bold;
        color: ${() => window.theme.primary}
    }
    h6 {
        font-size: 14px;
        font-weight: bold;
        color: ${() => window.theme.secondary}
    }
    p {
        font-size: 15px;
    }
    ${(props) => props.cardCount >= 2 && css`
            max-width: calc(50% - 70px);
    `}
    
    @media screen and (max-width: 700px) {
        ${(props) => props.cardCount >= 2 && css`
            max-width: 100%;
       `} 
    }
    
`

export default HexagoneCard
