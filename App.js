import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './components/PatientModule/Dashboard';
import PateintType from './components/PatientModule/Patient';
import PatientDetails from './components/PatientModule/PatientDetails';
import SucessAdding from './components/PatientModule/Sucess';
// import Texts from './components/PatientModule/text'
// import Home from './components/Home';
// import Signin from './components/Signin';
// import Signup from './components/Signup';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  // const Stack = createNativeStackNavigator();

  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='HomeScreen'>
    //     <Stack.Screen name='HomeScreen' component={Home}/>
    //     <Stack.Screen name='login' component={Signin}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
     <>
      <PatientDetails/>
      {/* <Dashboard/> */}
      {/* <Texts/> */}
     
     </>
  );
}


