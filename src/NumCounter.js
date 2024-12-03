import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./redux/featurs/counterSlice/CounterSlice";  
import ItemPrice from "./ItemPrice";

const NumCounter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    function handleIncrementClick() {
        dispatch(increment());
    }

    function handleDecrementClick() {
        dispatch(decrement());
    }
    function NumRest() {
        dispatch(reset())       ;
    }

   
    return (
        <View>
            <Text>NumCounter</Text>
            <Button title="Increment" onPress={handleIncrementClick} />
            <Text style={{color:'black'}} >Count: {count}</Text>
            <Button title="Decrement" onPress={handleDecrementClick} />
            <View style={{marginTop:20}}>
                <Button title="Reset" onPress={NumRest} />
            </View>
            <ItemPrice/> 
    
        </View>
    );
};

export default NumCounter;
