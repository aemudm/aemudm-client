import styled from 'styled-components'

const Header = styled.header`
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

export default Header
