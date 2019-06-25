import { createStackNavigator, createAppContainer } from 'react-navigation';
import Homepage from './src/views/Homepage';
import Champions from './src/views/Champions';
import ChampionInfo from './src/views/ChampionInfo';

const AppNavigator = createStackNavigator({
    Home: {
        screen: Homepage,
        navigationOptions: {
            header: null,
        },
    },
    Champions: Champions,
    ChampionsInfo: ChampionInfo,
},
    {
        initialRouteName: 'Champions'
    });

const App = createAppContainer(AppNavigator);

export default App;