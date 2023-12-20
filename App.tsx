import {
	Poppins_400Regular,
	Poppins_400Regular_Italic,
	Poppins_700Bold,
	Poppins_700Bold_Italic,
	Poppins_800ExtraBold,
	Poppins_800ExtraBold_Italic,
	useFonts,
} from '@expo-google-fonts/poppins';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Calculator from './src/screens/Calculator/Calculator';
import Home from './src/screens/Home/Home';

const Stack = createNativeStackNavigator();

const myOptions = {
	title: 'React Native',
	headerTintColor: '#864CFF',
	headerStyle: {
		backgroundColor: '#151515',
	},
};

export default function App() {
	let [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_400Regular_Italic,
		Poppins_700Bold,
		Poppins_700Bold_Italic,
		Poppins_800ExtraBold,
		Poppins_800ExtraBold_Italic,
	});
	if (!fontsLoaded) {
		return null;
	}
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home'>
				<Stack.Screen
					name='Home'
					component={Home}
					options={{
						...myOptions,
						title: 'Home',
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name='Calculator'
					component={Calculator}
					options={{ ...myOptions, title: 'Calculator', headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
