import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: #864cff;
`;

export const Title = styled.Text`
	color: white;
	font-size: 30px;
	font-family: Poppins_700Bold;
	text-align: center;
	padding: 0 20px;
	margin: 40px 0;
`;

export const Button = styled.Pressable`
	padding: 10px 20px;
	border-radius: 10px;
	border: 2px solid white;
`;

export const Text = styled.Text`
	font-family: Poppins_700Bold;
	color: white;
`;

export const Image = styled.Image`
	width: 300px;
	height: 162px;
`;
