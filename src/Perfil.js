import React from 'react'
import { View, Text, StyleSheet, Image, TextInput} from 'react-native'

export default function Perfil() {
  return (
    <View style={css.container}>
      <View style={css.logo}>
        <Image source={require('../assets/img/logo.png')}/>
      </View>
      <View style={css.underc}>
        <Image source={require('../assets/img/editar.png')}/>
        <Image source={require('../assets/img/perfilm.png')} style={css.perfil}/>
        <View style={css.boxinput}>
            <TextInput 
            style={css.input} 
            placeholder='Insira o e-mail'
            keyboardType='default'
            />
            <TextInput style={css.input} 
            placeholder='Insira a senha'
            keyboardType='default'
            />
        </View>
      </View>
    </View>
  )
}

const css = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    display: 'flex',
    top: 20
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  underc: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 60
  },
  perfil: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 25
  },
  input: {
    marginTop: 30,
    color: 'black', // Cor do texto
    height: 45,
    fontSize: 16,
    textAlign: "left",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 160,
},
})

