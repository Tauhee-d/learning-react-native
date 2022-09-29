
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import PateintDetail from './components/OutPatient/PateintDetail'
import ReasonInPatient from './components/MakeInPatient/ReasonInPatient';
import Successfull from './components/MakeInPatient/Sucessfull';
import BillPayment from './components/MakePayment/BillPayment'
import PaymentSucessfull from './components/MakePayment/PaymentSucessfull';
import Dashboard from './components/Dashboard';
import PateintType from './components/AddPatient/Patient';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PatientDetails from './components/AddPatient/PatientDetails';
import SucessAdding from './components/AddPatient/Sucess';
import SearchForPatient from './components/OutPatient/SearchForPatient';
import Sucessfull from './components/MakeInPatient/Sucessfull';
import ReasonDischarge from './components/DischargePatient/ReasonDischarge'
import SucessfullDischarge from './components/DischargePatient/SucessfullDischarge'

import { View } from 'react-native';
import Temp from './components/AddPatient/temp';

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    // <View>
    //  <Temp/>
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown: false}} >
        <Stack.Screen  name='HomeScreen' component={Home} />
        <Stack.Screen  name='SigninScreen' component={Signin}/>
        <Stack.Screen name='SignupScreen' component={Signup}/>
        <Stack.Screen name='Dashboard' component={Dashboard}/>
        <Stack.Screen name='Select Patient Type' component={PateintType}/>
        <Stack.Screen name='Enter Pateint Details' component={PatientDetails}/>
        <Stack.Screen name='Sucessfull' component={SucessAdding}/>
        <Stack.Screen name='Search For Patient' component={SearchForPatient}/>
        <Stack.Screen name='Patient Details' component={PateintDetail}/>
        <Stack.Screen name='Reason In Patient' component={ReasonInPatient}/>
        <Stack.Screen name='Sucessfully' component={Sucessfull}/>
        <Stack.Screen name='Discharge Patient' component={ReasonDischarge}/>
        <Stack.Screen name='Sucessfull Discharge' component={SucessfullDischarge}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
  
    //  <>
    //  <Apitest/>
    //  </> 
  



 