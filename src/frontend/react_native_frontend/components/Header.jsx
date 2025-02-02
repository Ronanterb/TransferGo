import { View,Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function Header({label, onPress}) {
    return (
        <View>
            <View style={styles.head}>
                <Text style={styles.text}>{label}</Text>

                <TouchableOpacity onPress={onPress}>
                    <MaterialIcons name="menu" size={30} color="#fff" />
                </TouchableOpacity>            
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        color: '#fff',
        fontSize: 24,
    },
    head: {
        alignItems: "center",
        flexDirection: 'row',
        padding: 20,
        backgroundColor: '#2137B2'
    }
})