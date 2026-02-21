import {View, Text, StyleSheet, Button} from 'react-native'

export const Product = ({navigation}) =>{
    return <View style={styles.container}> 
        <Text>Bienvenido a mi tienda, soy Marcelo Salcedo</Text>
        <Text style={styles.prod1}>Pantalla</Text>
        <Text style={styles.prod2}>Teclado</Text>
        <Text style={styles.prod3}>CPU</Text>
        <Button
            title='HOME'
            onPress={()=>{
                navigation.navigate('WellcomeNav');
            }}
        />
    </View>

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f6ff00',
      alignItems: 'center',
      justifyContent: 'center',
    },

    prod1: {
        color:'#ef1212',
    },
    prod2: {
        color:'#1216ef',
    },
    prod3: {
        color:'#28ef12',
    }
  });