import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const SignupScreen: React.FC = () => {
  const [fullname, setFullName] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [emailadd, setEmailAdd] = useState('');
  const[password, setPassword] = useState('');
 const [submitted, setSubmitted] = useState(false);

  const handleSignup = () => {
     if (fullname && emailadd  &&  phonenumber  && password ) {
       setSubmitted(true);
     } else {
       alert('Please fill out all fields.');
     }
   };
  const handleClear = () => {
    setFullName('');
     setEmailAdd('');
    setPhoneNumber('');
     setPassword('');
    setSubmitted(false);
  };

   return (
     <View style={styles.container}>
       <Text style={styles.title}>Sign Up</Text>
 
       <TextInput
         placeholder="Full Name"
         value={fullname}
         onChangeText={setFullName}
         style={styles.input}
         keyboardType="email-address"
       />
        <TextInput
         placeholder="Email Address"
         value={emailadd}
         onChangeText={setEmailAdd}
         style={styles.input}
       
       />

        <TextInput
         placeholder="Phone Number"
         value={phonenumber}
         onChangeText={setPhoneNumber}
         style={styles.input}
   
       />
 
       <TextInput
         placeholder="Password"
         value={password}
         onChangeText={setPassword}
         style={styles.input}
         secureTextEntry
       />
 
       <Pressable style={styles.button} onPress={handleSignup}>
         <Text style={styles.buttonText}>Sign up</Text>
       </Pressable>
         <Pressable style={[styles.button, styles.clearButton]} onPress={handleClear}>
            <Text style={styles.buttonText}>Clear</Text>
          </Pressable>
   
 
     
 
        {submitted && (
           <View style={styles.output}>
             <Text style={styles.outputTitle}>Submitted Information:</Text>
             <Text>Full Name: {fullname}</Text>
               <Text>Email Address: {emailadd}</Text>
              <Text>Phone Number: {phonenumber}</Text>
             <Text>Password: {password}</Text>
           
           </View>
         )}
       
 
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
    marginTop:-300,
    justifyContent: 'center',
    
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
   clearButton: {
    marginTop: 20,
    backgroundColor: '#ff5c5c', 
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },

  output: {
    backgroundColor: '#baa2a2ff',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  outputTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});