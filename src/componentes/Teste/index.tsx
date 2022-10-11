import React from "react";
import { View, Text, TextInput, Button } from "react-native";

export function Teste(){
    return(
        <View>
            <Text>Testes com Jest</Text>
            <TextInput
                testID="input-nome"
                placeholder="Nome"
                value="Zé"
            />
            <TextInput 
                testID="input-sobrenome"
                placeholder="Sobrenome"
                value="da Silva"
            />
            <Button 
                title="Salvar"
                onPress={() => {}}
            />
        </View> 
    )
}