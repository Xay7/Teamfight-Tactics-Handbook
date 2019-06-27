import { createStackNavigator, createAppContainer } from 'react-navigation';
import Homepage from './src/views/Homepage';
import Champions from './src/views/Champions';
import ChampionInfo from './src/views/ChampionInfo';
import Items from './src/views/Items';

const AppNavigator = createStackNavigator({
    Home: {
        screen: Homepage,
        navigationOptions: {
            header: null,
        },
    },
    Champions: Champions,
    ChampionInfo: ChampionInfo,
    Items: Items,
},
    {
        initialRouteName: 'Items',
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        },
        lazy: true
    });

const App = createAppContainer(AppNavigator);

export default App;