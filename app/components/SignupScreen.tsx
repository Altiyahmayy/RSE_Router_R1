import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const SignupScreen: React.FC = () => {
  const [fullname, setFullName] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [emailadd, setEmailAdd] = useState('');
  const[password, setPassword] = useState('');

  const handleSignup = () => {
    if (password !== password) {
      alert('Passwords do not match!');
      return;
    }
    // Add your signup logic here
    console.log('Signing up with:', emailadd, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Account</Text>

      <TextInput
        placeholder="Full Name"
        value={fullname}
        onChangeText={setFullName}
        style={styles.input}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Phone Number"
        value={phonenumber}
        onChangeText={setPhoneNumber}
        style={styles.input}
        secureTextEntry
      />

      <TextInput
        placeholder="E-mail Address"
        value={emailadd}
        onChangeText={setEmailAdd}
        style={styles.input}
        secureTextEntry
      />

       <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />
      <Pressable style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#001f3f',
  },
  title: {
    color: 'white',
    fontSize: 32,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    alignSelf:'flex-start',
    marginTop:-400,
    
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 16,
    paddingHorizontal: 12,
    color:'white',
  },
  button: {
    backgroundColor: 'pink',
    paddingVertical: 14,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});