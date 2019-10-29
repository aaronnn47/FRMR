import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
export default ({history})=>{
    return(
    <View style={styles.main}>
        <Text style={styles.text}>This is how!</Text>
        <Button 
            title="take me back"
            onPress={()=>{
                history.push("/")
            }}
        />
    </View>
    )
}

const styles= StyleSheet.create({
    text: {
        fontSize: 50,
    },
    // main:{
    //     backgroundColor: 'green',
    //     flex: 1
    // }
})