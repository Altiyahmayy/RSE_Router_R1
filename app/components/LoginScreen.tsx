import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleLogin = () => {
    if (email && password ) {
      setSubmitted(true);
    } else {
      alert('Please fill out all fields.');
    }
  };
  const handleClear = () => {
    setEmail('');
     setPassword('');
    setSubmitted(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>

      <TextInput
        placeholder="Email or phone number"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>
      <Text style={styles.or}>OR</Text>

      <Pressable style={styles.fb} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login with Facebook</Text>
      </Pressable>
       <Pressable style={[styles.button, styles.clearButton]} onPress={handleClear}>
            <Text style={styles.buttonText}>Clear</Text>
          </Pressable>
       {submitted && (
          <View style={styles.output}>
            <Text style={styles.outputTitle}>Submitted Information:</Text>
            <Text>Email: {email}</Text>
            <Text>Password: {password}</Text>
          
          </View>
        )}
      

    </View>



  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#001f3f',
    color: 'white',
  },
  title: {
    fontSize: 32,
    marginBottom: 40,
    fontWeight: 'bold',
    alignSelf:'flex-start',
    marginTop:-300,
    color:'white',
    
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 15,
    color: 'white',
  },
  button: {
    backgroundColor: 'pink',
    paddingVertical: 14,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
   clearButton: {
    backgroundColor: '#ff5c5c', // Red button for clear
    marginTop: 15,
  },
  or:{
    textAlign:'center',
    marginTop: 50,
    color: 'white',
  },
  fb:{
    textAlign:"center",
    backgroundColor:'blue',
    marginTop: 15,
    color:'white',
    paddingVertical: 14,
    borderRadius: 20,
  },

   output: {
    marginTop: 20,
    backgroundColor: '#f1f1f1cf',
    padding: 15,
    borderRadius: 8,
  },
  outputTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});