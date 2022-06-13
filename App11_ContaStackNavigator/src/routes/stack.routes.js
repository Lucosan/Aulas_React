import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home'
import { Results } from '../screens/Results'

const { Screen, Navigator } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name='Home' component={Home} />
      <Screen name='Results' component={Results} />
    </Navigator>
  )
}