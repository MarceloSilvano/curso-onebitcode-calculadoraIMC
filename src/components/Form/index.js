import React, {useState} from "react";
import {View, Text, TextInput, Button} from "react-native";
import ResultImc from "./ResultImc";

export default function Form(){

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [menssageImc, setMenssageImc] = useState("Preencha o peso e altura");
    const [imc, setImc] = useState(null);
    const [TextButton, setTextButton] = useState("Calcular");

    function imcCalculator(){
        var imc = weight/(height*height)
        return setImc(imc.toFixed(2));
    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMenssageImc("Seu IMC: ");
            setTextButton("Calcular Novamente")
            return
        }
        setImc(null);
        setTextButton("Calcular");
        setMenssageImc("Preencha o peso e altura");
    }

    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput 
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.75" 
                keyboardType="numeric"
                />

                <Text>Peso</Text>
                <TextInput 
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 75"
                keyboardType="numeric"
                />

                <Button title="Calcular"
                onPress={()=> validationImc() }
                />
            </View>
            <ResultImc menssageResultImc={menssageImc} resultImc={imc}/>
        </View>
    );
}