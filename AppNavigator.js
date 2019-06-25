import { createStackNavigator, createAppContainer } from 'react-navigation';
import Homepage from './src/views/Homepage';

const AppNavigator = createStackNavigator({
    Home: { screen: Homepage },
});

const App = createAppContainer(AppNavigator);

export default App;