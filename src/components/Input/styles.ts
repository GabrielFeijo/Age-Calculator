import styled from 'styled-components/native';

export const TInput = styled.TextInput`
	border-width: 1px;
	border-color: #ccc;
	border-radius: 10px;
	width: 100px;
	padding: 15px;
	color: #181818;
	font-family: Poppins_700Bold;
	font-size: 24px;
`;

export const Label = styled.Text`
	color: #a6a6a6;
	text-transform: uppercase;
	font-family: Poppins_700Bold;
	letter-spacing: 3px;
	margin: 5px 0;
`;

export const Error = styled.Text`
	color: red;
	font-family: Poppins_400Regular;
	font-size: 10px;
`;
