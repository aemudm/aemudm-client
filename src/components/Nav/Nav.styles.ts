import styled from 'styled-components'

export const NavStyled = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 100;
    height: 50px;
    width: 100%;
    padding: 0 20px;
    top: 0;
    left: 0;
    box-shadow: 0 0 5px hsl(0, 0%, 50%);
    background: white;
    img {
        height: 40px;
    }
    a {
        display: flex;
        align-items: center;
        height: 50px;
        padding: 0 10px;
        text-decoration: none;
        &:hover {
            background: hsl(0, 0%, 95%);
        }
        &.active {
            background: ${() => window.theme.primary};
            color: white;
        }
    }
    .wrapper {
        display: flex;
    }
    i {
        display: none;
    }
    @media screen and (max-width: 700px) {
        i {
            display: flex;
            color: hsl(0, 0%, 50%);
            font-size: 25px;
            border-radius: 3px;
            padding: 3px 5px;
            border: 1px solid hsl(0, 0%, 50%);
            transition: 0.1s all ease-in-out;
            &:hover {
                border: 1px solid ${() => window.theme.primary};
                color: ${() => window.theme.primary};
            }
        }
        .wrapper {
            display: none;
            background: white;
            flex-direction: column;
            position: absolute;
            top: 50px;
            left: 0;
            width: 100%;
            &.active {
                display: flex;
            }
        }
        a {
            width: 100%;
            justify-content: center;
        }
    }
`

