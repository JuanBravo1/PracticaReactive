import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Logo = () => (
  <Image source={require('./assets/disney_logo.png')} style={styles.logo} />
);

const EmailInput = () => (
  <TextInput
    style={styles.input}
    placeholder="Correo electrónico"
  />
);


const LoginButton = () => (
  <TouchableOpacity style={styles.loginButton}>
    <Text style={styles.loginButtonText}>CONTINUAR</Text>
  </TouchableOpacity>
);

const Mensaje= ()=>(
  <Text style={styles.mensajeStyle}>¿Primera vez en Disney+?</Text>
);

const Susbc= ()=>(
   <Text style={styles.subText}>SUSCRIBIRME</Text>
);

export default function App() {
  return (
    <View style={styles.container}>
      <Logo />
      <EmailInput />
      <LoginButton />
      <Mensaje/>
      <Susbc/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1C29',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },

  mensajeStyle: {
    color: '#9698A3',
    fontSize: 18,
    marginBottom: 20,
    alignSelf: 'baseline',
    paddingTop: 50,
    paddingLeft: 50,
  },

  subText: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
    alignSelf: 'baseline',
    paddingTop: 20,
    paddingLeft: 50,
  },

  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  input: {
    height: 80,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#31333F',
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
    color: '#9698A3',
  },
  loginButton: {
    backgroundColor: '#0072D2',
    padding: 10,
    width: '80%',
    alignItems: 'center',
    borderRadius: 5,
    paddingTop:15,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },


});
