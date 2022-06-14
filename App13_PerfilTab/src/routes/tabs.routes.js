import { MaterialIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Experiência } from '../screens/Experiência'
import { Formacao } from '../screens/Formação'
import { Pessoal } from '../screens/Pessoal'

const { Screen, Navigator } = createBottomTabNavigator()

export function AppRoutes() {
  return (
    <Navigator style={{flex: 1}}>
      <Screen name='Pessoal' component={Pessoal} options={{ 
        tabBarIcon: ({color,size}) => (
          <MaterialIcons name='person' color={'#09d'} size={24}/>
        )
      }} />
       <Screen name='Experiência' style={{color:'#09d'}} component={Experiência} options={{ 
        tabBarIcon: () => (
          <MaterialIcons name='work' color={'#09d'} size={24}/>
        )
      }} />
       <Screen name='Formação' component={Formacao} options={{ 
        tabBarIcon: ({color,size}) => (
          <MaterialIcons name='school' color={'#09d'} size={24}/>
        )
      }} />
    </Navigator>
  )
}