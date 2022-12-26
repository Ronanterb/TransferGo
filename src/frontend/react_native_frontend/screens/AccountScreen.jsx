import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Header from "../components/Header";


const AccountScreen = ({navigation}) => {
    return (
        <View>
            <Header label={"Account"} {...navigation} />
            <View style={styles.align}>
                    <Text>Current balance</Text>
                    <Text>0000</Text>                    
            </View>

            <View style={styles.align}>
                <Text>Last transaction</Text>
                <Text>15-06-22</Text>
            </View>
            <TouchableOpacity style={styles.btn}>
                <Text style={{color: "#fff"}}>Change password</Text>
                <MaterialIcons name="arrow-forward-ios"  size={22} color="#fff"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Text style={{color: "#fff"}}>Forgot password</Text>
                <MaterialIcons name="arrow-forward-ios"  size={22} color="#fff"/>
            </TouchableOpacity>
        </View>
    )
}

export default AccountScreen;

const styles = StyleSheet.create({

    align: {
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: '#ccc',
        borderRadius: 10,
        marginBottom: 5,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    btn: {
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#2137B2',
        color: "#fff",
        padding: 20,
        borderRadius: 10,
        marginBottom: 5,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
      },
})