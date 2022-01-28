import styled from 'styled-components'

const Container = styled.div`
    font-family: 'Outfit', sans-serif;
    flex-shrink: 0;
`

const Footer = () => {

    const frontProfile = `https://www.frontendmentor.io/profile/JPedro-SG`

    return (
        <Container>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href={frontProfile}>JPedro-SG</a>.
        </Container>
    )
}

export default Footer