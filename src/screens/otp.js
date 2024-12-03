import React, { useRef,useState,useEffect } from "react";

import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";


const Otpscreen = ()=>{
  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();
  const et5 = useRef();

const [f1 ,setf1] = useState('');
const [f2 ,setf2] = useState('');
const [f3 ,setf3] = useState('');
const [f4 ,setf4] = useState('');
const [f5 ,setf5] = useState('');
const [count, setcount] = useState(60);
//   useEffect(()=>{
//   const interval = setInterval(() => {

//     if (count === 0) {
//         clearInterval(interval);
//     }
//     else {
//         setcount(count-1);
//     }
//      setcount(count-1);
//    },1000);
//    return()=>{
//     clearInterval(interval);
//    }
//   },[count])

const otpVaild= () =>{
    let otp ='96321';
    let enterOtp = f1+f2+f3+f4+f5;
    if(otp == enterOtp){
        Alert.alert("Otp is matched")
    }
    else{
        Alert.alert("Otp is not matched")
    }
}
    return(
        <>
         <View style={styles.container}>
             <Text style={styles.otpHead}>Verification Otp</Text>
             <Text style={styles.otpMail}>Your Verification otp number sent on this @@@@@@@@@@@@@@ Email Adsrees please check type Here:</Text>
              <View style={styles.otpInputBox}>
                <TextInput ref={et1} style={[styles.otpInput,{borderColor:f1.length == 1 ? "blue":"black"}]}  
                 keyboardType="number-pad"
                 maxLength={1}
                 value={f1}
                 onChangeText={text=>{
                  setf1(text)
                  if(text.length===1){
                    et2.current.focus();
                  }
                 }}
                />
                <TextInput  ref={et2} style={[styles.otpInput,{borderColor:f2.length == 1 ? "blue":"black"}]} 
                 keyboardType="number-pad"
                 maxLength={1}
                 value={f2}
                 onChangeText={text=>{
                  setf2(text);
                  if(text.length===1){
                    et3.current.focus();
                  }
                  else if(text.length <=1){
                    et1.current.focus();
                  }
                 }}
                />
                <TextInput ref={et3} style={[styles.otpInput,{borderColor:f3.length == 1 ? "blue":"black"}]}
                 keyboardType="number-pad"
                 maxLength={1}
                 value={f3}
                 onChangeText={text=>{
                  setf3(text)
                  if(text.length===1){
                    et4.current.focus();
                  }
                  else if(text.length <=1){
                    et2.current.focus();
                  }
                 }}
                />
                <TextInput ref={et4} style={[styles.otpInput,{borderColor:f4.length == 1 ? "blue":"black"}]}
                 keyboardType="number-pad"
                 maxLength={1}
                 value={f4}
                 onChangeText={text=>{
                  setf4(text);
                  if(text.length===1){
                    et5.current.focus();
                  }
                  else if(text.length <=1){
                    et3.current.focus();
                  }
                 }}
                />
                <TextInput ref={et5} style={[styles.otpInput,{borderColor:f5.length == 1 ? "blue":"black"}]}
                
                keyboardType="number-pad"
                 maxLength={1}
                 value={f5}
                 onChangeText={text=>{
                  setf5(text);
                  if(text.length <=0){
                    et4.current.focus();
                  }
                 }}
                 />
              </View>
              
                <TouchableOpacity style={styles.otpresendBtn} 
                  disabled={
                    f1 !==''&& f2 !=='' && f1!=='' && f3 !==''&& f4 !==''  && f5!==''? false:true
                  }
                >
                    <Text style={{textAlign:'right',marginRight:30,fontSize:15,fontWeight:'600',letterSpacing:1}}>Resend OTP </Text>
                </TouchableOpacity>
            
                <TouchableOpacity onPress={otpVaild} style={[styles.verifyOTP,{backgroundColor: f1 !==''&& f2 !=='' && f1!=='' && f3 !==''&& f4 !==''  && f5!==''? "blue":"#a59c9c"}]}>
                    <Text style={{fontSize:25,fontWeight:'500',textAlign:'center',color:'#ffffff',}}>Verify OTP</Text>
                </TouchableOpacity>
         </View>
        </>
    )
};

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20,
   
  },
  otpHead:{
    fontSize:40,
    fontWeight:'bold',
    marginBottom:20,
    color:'purple',
  },
  otpMail:{
    fontSize:18,
    marginBottom:20,
    color:'black',
    lineHeight:30,
    fontWeight:'400',
  },
  otpInputBox:{
    flexDirection:'row',
    margin:30,
  },
  otpInput:{
    width:50,
    height:50,
    borderWidth:1,
    borderColor:'black',
    paddingHorizontal:10,
    marginHorizontal:5,
    fontSize:25,fontWeight:'600',
    borderRadius:10,
    textAlign:'center',
  },
  otpresendBtn:{
    textAlign:'right',
    marginRight:0,
    marginBottom:10,
    fontFamily:'Helvetica',
    padding:10,
    width:'100%',

  },
  verifyOTP:{
    width:'80%',
    backgroundColor:'blue',
    padding:10,
    borderRadius:10,
    marginTop:10,
    marginBottom:20,
  }
})
export default Otpscreen;