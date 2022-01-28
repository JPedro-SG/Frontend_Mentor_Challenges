import styled from 'styled-components'
import Card from './Card';

import qrCodeImg from './assets/images/image-qr-code.png'
import Footer from './Footer';

const Container = styled.div`
  	background: hsl(212, 45%, 89%);
  	width: 100vw;
  	height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const App = () => {

	const title = `
		Improve your front-end skills 
		by building projects
	`

	const info = `
		Scan the QR code to visit Frontend Mentor 
		and take your coding skills to the next level
	`

  return (
    <div className="App">
      	<Container>
        	<Card info={info} title={title} image={qrCodeImg} />
			<Footer />
      	</Container>
    </div>
  );
}

export default App;
