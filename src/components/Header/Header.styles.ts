import styled from 'styled-components'

export const HeaderStyled = styled.header`
    display: flex;
    width: 100%;
    max-height: 410px;
    border-bottom: 3px solid ${() => window.theme.primary};
    img {
        max-height: 400px;
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
    }
`
