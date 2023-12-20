import React, { useState } from 'react';
import { Label, TInput, Error } from './styles';
import { TextInput, View } from 'react-native';

interface ITextInputData {
	label: string;
	maxLength?: number;
	placeholder?: string;
	value?: string;
	onChange: (e: string) => void;
	error?: string;
}

const Input = ({
	label,
	error,
	maxLength,
	placeholder,
	value,
	onChange,
}: ITextInputData) => {
	return (
		<View>
			<Label style={error ? { color: 'red' } : null}>{label}</Label>
			<TInput
				keyboardType='numeric'
				placeholder={placeholder}
				value={value}
				maxLength={maxLength}
				onChangeText={(e) => onChange(e)}
				style={error ? { borderColor: 'red' } : null}
			/>
			{error && <Error>{error}</Error>}
		</View>
	);
};

export default Input;
