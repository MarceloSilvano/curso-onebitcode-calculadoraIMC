import React from "react";
import {View, Text} from "react-native";

export default function ResultImc(props){
    return(
        <View>
            <Text>{props.menssageResultImc}</Text>
            <Text>{props.resultImc}</Text>
        </View>
    );
}