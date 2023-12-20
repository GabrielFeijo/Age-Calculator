import { Container, Box, Line, Button } from './styles';
import React, { useState } from 'react';
import Input from '../../components/Input/Input';
import { Feather } from '@expo/vector-icons';
import Age from '../../components/Age/Age';
import {
	differenceInBusinessDays,
	differenceInDays,
	differenceInMonths,
	differenceInYears,
	parse,
} from 'date-fns';
import { Keyboard } from 'react-native';

const Calculator = () => {
	const [errors, setErrors] = useState({ day: '', month: '', year: '' });
	const [date, setDate] = useState({ day: '', month: '', year: '' });
	const [result, setResult] = useState({
		day: 0,
		month: 0,
		year: 0,
	});

	const handleInputChange = (inputName: string, value: string) => {
		setDate((prevState) => ({
			...prevState,
			[inputName]: value,
		}));

		setErrors((prevErrors) => ({
			...prevErrors,
			[inputName]: '',
		}));
	};

	const isNumeric = (value: string): boolean => {
		return /^\d+$/.test(value);
	};

	const isValidDay = (day: number): boolean => {
		return day >= 1 && day <= 31;
	};

	const isValidMonth = (month: number): boolean => {
		return month >= 1 && month <= 12;
	};

	const isPastYear = (year: number): boolean => {
		const currentYear = new Date().getFullYear();
		return year <= currentYear;
	};

	const calculate = () => {
		const { day, month, year } = date;

		const newErrors = { day: '', month: '', year: '' };

		Keyboard.dismiss();

		// Validação de campos obrigatórios
		if (!day) {
			newErrors.day = 'Campo obrigatório!';
		}

		if (!month) {
			newErrors.month = 'Campo obrigatório!';
		}

		if (!year) {
			newErrors.year = 'Campo obrigatório!';
		}

		const numericDay = parseInt(day, 10);
		const numericMonth = parseInt(month, 10);
		const numericYear = parseInt(year, 10);

		// Validação de dia válido
		if (!isValidDay(numericDay) || !isNumeric(day)) {
			newErrors.day = 'Dia inválido.';
		}

		// Validação de mês válido
		if (!isValidMonth(numericMonth) || !isNumeric(month)) {
			newErrors.month = 'Mês inválido.';
		}

		// Validação de ano no passado
		if (!isPastYear(numericYear) || !isNumeric(year)) {
			newErrors.year = 'Ano inválido.';
		}

		// Atualiza o estado de erros
		setErrors(newErrors);

		// Se houver erros, não continua para exibir os dados
		if (Object.values(newErrors).some((error) => error !== '')) {
			return;
		}

		const birthDate = parse(
			`${numericYear}-${numericMonth}-${numericDay}`,
			'yyyy-MM-dd',
			new Date()
		);
		const today = new Date();
		const years = differenceInYears(today, birthDate);
		const months = differenceInMonths(today, birthDate) % 12;
		const days = today.getDate() - numericDay;

		setResult({
			year: years,
			month: months,
			day: days,
		});
	};

	return (
		<Container>
			<Box>
				<Input
					label='Dia'
					placeholder='DD'
					value={date.day}
					maxLength={2}
					onChange={(e) => handleInputChange('day', e)}
					error={errors.day}
				/>
				<Input
					label='Mês'
					placeholder='MM'
					value={date.month}
					maxLength={2}
					onChange={(e) => handleInputChange('month', e)}
					error={errors.month}
				/>
				<Input
					label='Ano'
					placeholder='YYYY'
					value={date.year}
					maxLength={4}
					onChange={(e) => handleInputChange('year', e)}
					error={errors.year}
				/>
			</Box>
			<Line>
				<Button onPress={calculate}>
					<Feather
						name='check'
						size={44}
						color='white'
					/>
				</Button>
			</Line>

			<Age
				day={result.day}
				month={result.month}
				year={result.year}
			></Age>
		</Container>
	);
};

export default Calculator;
