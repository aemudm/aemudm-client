import styled, { css } from 'styled-components'

const Card = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 5px;
    background: hsla(0, 100%, 100%, 0.8);
    ${(props) => props.cardCount === 2 && css`
            max-width: calc(50% - 20px);
    `}
    ${(props) => props.cardCount >= 3 && css`
            max-width: calc(33% - 20px);
    `}
    ${(props) => props.cardCount === 4 && css`
            max-width: calc(50% - 20px);
    `}
    ${props => props.cover && css`
        .image-list {
            padding: 10px 0;
            img {
                width: calc(100% - 20px);
                height: auto;
            }
        }
        p {
            padding: 0 10px 10px 10px !important;
        }
        
    `}
    .image-list {
        transition: 0.3s opacity ease-in-out;
        visibility: visible;
        opacity: 1;
    }
    transition: 0.3s all ease-in-out;
    .image-list {
        padding: 20px 0 10px 0;
    }
    .scrollbar-container {
        height: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .scroll-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &.scroll {
        span {
            display: flex;
        }
        &:hover {
            transform: scale(1.05);
            box-shadow: 0px 0px 5px ${(props) => props.background === 'beige' ? 'hsl(0, 0%, 50%)' : 'white'};
            .image-list {
                transition: none;
                opacity: 0;
                visibility: hidden;
                padding: 0;
                
            }
            .scroll-wrapper {
                transition: 0.3s all ease-in-out;
                transform: translateY(-100px);
            }
        }
        height: 150px;
        & > a {
            height: 150px;
        }
    }
    
    &.link {
        cursor: pointer;
        transition: 0.3s all ease-in-out;
        &:hover {
            transform: scale(1.05);
            box-shadow: 0px 0px 5px ${(props) => props.background === 'beige' ? 'hsl(0, 0%, 50%)' : 'white'};
        }
        &>a {
            display: flex;
            align-items: center;
            flex-direction: column;
            width: 100%;
            text-decoration: none;
        }
    }
    h3 {
        padding: 30px 0 20px 0;
        font-size: 20px;
        font-weight: bold;
        color: ${() => window.theme.primary};
    }
    h4 {
        padding: 20px 0;
        font-size: 18px;
        font-weight: bold;
        color: ${() => window.theme.primary};
    }
    p {
        padding: 0 20px 20px 20px;
        color: hsl(0, 0%, 50%);
        text-align: center;
        line-height: 150%;
    }
    span {
        display: none;
        padding: 0 20px 20px 20px;
        color: hsl(0, 0%, 60%);
        font-size: 14px;
        text-align: center;
        line-height: 125%;
    }
    &:not(.link) a {
        display: flex;
        align-items: center;
        height: 30px;
        padding: 0 20px;
        margin-bottom: 30px;
        border-radius: 15px;
        background: ${() => window.theme.primary};
        color: white;
        text-decoration: none;
        transition: 0.3s all ease-in-out;
        &:hover {
            background-color: hsl(0, 0%, 45%, 0.30);
            transform: scale(1.05,1.05);
        }
    }

    a > img, & > img {
        width: 100%;
        border-bottom: 5px solid ${() => window.theme.primary}
    }
    
    @media screen and (max-width: 700px) {
       ${(props) => props.cardCount >= 3 && css`
            max-width: calc(50% - 20px);
       `} 
    }
    @media screen and (max-width: 600px) {
        ${(props) => props.cardCount === 2 && css`
            max-width: 100%;
       `} 
    }
    @media screen and (max-width: 500px) {
        ${(props) => props.cardCount >= 3 && css`
            max-width: 100%;
       `} 
    }
`
export default Card
