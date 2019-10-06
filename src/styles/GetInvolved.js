import styled from 'styled-components'

const GetInvolved = styled.section`
    position: relative;
    width: 100%;
    & > img {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
    }
    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        height: 40px;
        padding: 0 20px;
        margin-top: 20px;
        font-size: 24px;
        border-radius: 20px;
        background-color: hsl(145,15%,45%);
        color: white;
        transition: 0.1s all ease-in-out;
        position: relative;
        z-index: 100000;
        &:hover {
            background-color: rgba(255,255,255,0.3);
            transform: scale(1.05,1.05);
        }
    }
    .content {
        top: 0;
        left: 0;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
    .footer {
        bottom: 0;
        left: 0;
        position: absolute;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 10vw;
        background: rgba(86,122,101,0.78);
        img {
            width: 20vw;
        }
    }
`

export default GetInvolved
