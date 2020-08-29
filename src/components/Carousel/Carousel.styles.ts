import styled from 'styled-components'

export const CarouselStyled = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 400px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: hsl(0, 0%, 90%);
    box-shadow: inset 0 0 10px black;
    i {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 40px;
        border-radius: 20px;
        font-size: 30px;
        color: ${() => window.theme.primary};
        background: hsla(0, 0%, 100%, 0.8);
        cursor: pointer;
        transition: 0.3s all ease-in-out;
        &:hover {
            transform: scale(1.1);
        }
    }
    .fa-arrow-right {
        right: 20px;
    }
    .fa-arrow-left {
        left: 20px;
    }
`
