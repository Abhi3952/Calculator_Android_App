import React from 'react'

import { Image,StyleSheet,View } from 'react-native'

 import calculator from "./assests/calaculator.png"
const introScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.inner}>
        <Image  source={calculator}  style={styles.innerimg} />
        </View>
    </View>

)
}


const styles= StyleSheet.create({

    container:{

       display:'flex',
       flexDirection:'column',

       height:'100%',

       backgroundColor: 'grey',

       alignItems:'center',
        justifyContent:'center',

        width:'100'

    },

    inner:{

         width:100,
         height:100,
         backgroundColor:'inherit'


    },

    innerimg:{

        width:100,
        height:100


        
    }
})


export default introScreen


