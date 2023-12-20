import { Button, Container, Title, Text, Image } from './styles';

const Home = (props: { navigation: { navigate: (arg0: string) => any } }) => {
	return (
		<Container>
			<Image source={require('../../../assets/calculator.png')} />
			<Title>Bem vindo(a) ao Calculador de Idades</Title>

			<Button onPress={() => props.navigation.navigate('Calculator')}>
				<Text>Começar agora</Text>
			</Button>
		</Container>
	);
};

export default Home;
