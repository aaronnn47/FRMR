import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

export default ({ history })=>{
    return(
    <View>
        <Text style={styles.text}>FRMR</Text>
        <Button 
        title="Sign in here"
        onPress={()=>{
            history.push("/howItWorks")
        }}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 50
    }
})
