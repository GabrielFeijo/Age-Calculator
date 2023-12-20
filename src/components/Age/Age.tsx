import { Container, Row, Number, Text } from './styles';

interface IAgeData {
	day?: number;
	month?: number;
	year?: number;
}

const Age = ({ day, month, year }: IAgeData) => {
	return (
		<Container>
			<Row>
				<Number>{year ? year : '- -'}</Number>
				<Text>anos</Text>
			</Row>
			<Row>
				<Number>{month ? month : '- -'}</Number>
				<Text>meses</Text>
			</Row>
			<Row>
				<Number>{day ? day : '- -'}</Number>
				<Text>dias</Text>
			</Row>
		</Container>
	);
};

export default Age;
