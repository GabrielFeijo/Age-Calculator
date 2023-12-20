import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: #fff;
`;

export const Box = styled.View`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	width: 80%;
	max-width: 400px;
`;

export const Line = styled.View`
	background-color: #ccc;
	height: 1px;
	margin: 60px 0;
	width: 80%;
	max-width: 400px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Button = styled.Pressable`
	background-color: black;
	width: 80px;
	height: 80px;
	border-radius: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
