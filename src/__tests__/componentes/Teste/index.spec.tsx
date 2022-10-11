import React from 'react'
import { render } from "@testing-library/react-native"

import { Teste } from '../../../componentes/Teste'

test('Placeholder "Nome"', () =>{

    //const { debug } = render(<Teste />)
    //debug()

    const { getByPlaceholderText } = render(<Teste />)
    const inputNome = getByPlaceholderText('Nome')
    expect(inputNome).toBeTruthy()

})

test('Dados do usuário carregados', () =>{

    const { getByTestId } = render(<Teste />)
    
    const inputNome = getByTestId('input-nome')
    const inputSobrenome = getByTestId('input-sobrenome')

    expect(inputNome.props.value).toEqual("Zé")
    expect(inputSobrenome.props.value).toEqual("da Silva")

})