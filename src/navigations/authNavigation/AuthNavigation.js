import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../../screens/Signin";
import Login from "../../screens/login";
import Otpscreen from "../../screens/otp";

const AuthNavigation = ()=> {
    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
                <Stack.Screen name="SignIn" component={SignIn}  />
                <Stack.Screen name="OTPScreen" component={Otpscreen}  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AuthNavigation;