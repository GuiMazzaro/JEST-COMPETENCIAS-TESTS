import React from 'react'
import { render } from "@testing-library/react-native"
import { Teste } from '../../../componentes/Teste'

describe('Testes - Tela Teste', () =>{

    it('Placeholder "Nome"', () =>{

        //const { debug } = render(<Teste />)
        //debug()

        const { getByPlaceholderText } = render(<Teste />)
        const inputNome = getByPlaceholderText('Nome')
        expect(inputNome).toBeTruthy()

    })

    it('Placeholder "Sobrenome"', () =>{

        const { getByPlaceholderText } = render(<Teste />)
        expect(getByPlaceholderText("Sobrenome")).toBeTruthy()

    })

    it('Dados do usuário carregados', () =>{

        const { getByTestId } = render(<Teste />)
        
        const inputNome = getByTestId('input-nome')
        const inputSobrenome = getByTestId('input-sobrenome')

        expect(inputNome.props.value).toEqual("Zé")
        expect(inputSobrenome.props.value).toEqual("da Silva")

    })

    it('Teste de titulo de formulário', ()=>{

        const { getByTestId } =  render(<Teste/>)

        const textTitulo = getByTestId('text-titulo')

        expect(textTitulo.props.children).toContain("Testes com Jest")

    })

})