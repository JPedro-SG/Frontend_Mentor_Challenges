import styled from 'styled-components'

const Container = styled.div`
  	flex-grow: 1;
    display: flex;
    flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Wrapper = styled.div`
    background: hsl(0, 0%, 100%);
    padding: 1.235rem;
    width: 300px; 
    border-radius: 16px;

	display: flex;
    flex-direction: column;
	justify-content: center;
	align-items: center;

    font-family: 'Outfit', sans-serif;
    
    p {
        color: hsl(220, 15%, 55%);
        text-align: center;
        max-width: 25ch;

        margin-bottom: 24px;
    }
`

const Image = styled.img`
    width: 100%;
    heght: auto;
    border-radius: 16px
`

const Title = styled.h1`
    margin: 24px auto;

    color: hsl(218, 44%, 22%);
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    line-height: 26px;
    font-family: 'Outfit', sans-serif;
`



const Card = (props) => {
    return (
        <Container>
            <Wrapper>
                <Image src={props.image} />
                <Title>{props.title}</Title>
                <p>
                    {props.info}
                </p>
            </Wrapper>
        </Container>
    )
}

export default Card