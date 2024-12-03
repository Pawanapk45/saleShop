import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setField, setError, clearErrors, setSubmitStatus } from "./redux/featurs/formSlice/FormSlice";

const Form = () => {
  const { name, email, password, errors, submitStatus } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleChange = (field, value) => {
    dispatch(setField({ field, value }));
  };

  const validateForm = () => {
    let valid = true;
    dispatch(clearErrors());

    if (name.trim() === '') {
      dispatch(setError({ field: 'name', message: 'Name is required' }));
      valid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      dispatch(setError({ field: 'email', message: 'Invalid email format' }));
      valid = false;
    }
    if (password.length < 6) {
      dispatch(setError({ field: 'password', message: 'Password must be at least 6 characters' }));
      valid = false;
    }

    return valid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      dispatch(setSubmitStatus('Success'));
      // Proceed with form submission, like API call, etc.
    } else {
      dispatch(setSubmitStatus('Failed'));
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ color: 'black' }}>Form Example</Text>

      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={(value) => handleChange('name', value)}
        style={{ color: 'black', backgroundColor: 'lightgray', margin: 10 }}
      />
      {errors.name ? <Text style={{ color: 'red' }}>{errors.name}</Text> : null}

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(value) => handleChange('email', value)}
        style={{ color: 'black', backgroundColor: 'lightgray', margin: 10 }}
      />
      {errors.email ? <Text style={{ color: 'red' }}>{errors.email}</Text> : null}

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(value) => handleChange('password', value)}
        style={{ color: 'black', backgroundColor: 'lightgray', margin: 10 }}
      />
      {errors.password ? <Text style={{ color: 'red' }}>{errors.password}</Text> : null}

      <Button title="Submit" onPress={handleSubmit} />

      {submitStatus ? <Text style={{ color: submitStatus === 'Success' ? 'green' : 'red' }}>{submitStatus}</Text> : null}
    </View>
  );
};

export default Form;
