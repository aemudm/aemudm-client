import styled from 'styled-components'

const ImageList = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: calc(100% - 50px);
    flex-shrink: 0;
    img {
        height: 40px;
        object-fit: cover;
    }
`

export default ImageList
