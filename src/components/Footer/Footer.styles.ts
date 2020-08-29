import styled from 'styled-components'

export const FooterStyled = styled.footer`
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 100;
    width: 100%;
    height: 90px;
    padding-top: 10px;
    background: white;
    box-shadow: 0 0 5px hsl(0, 0%, 50%);
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 5px;
    }
    a {
        margin: 0 5px;
    }
    img {
        width: 40px;
    }
`
