import React from 'react'
import { render } from '@testing-library/react-native'
import 'jest-styled-components'
import { Conhecimento } from '.'

describe('Componente Conhecimento', ()=> {

    it('Verificar se o text descricao foi preenchido', ()=> {
        
        const { getByTestId } = render(
        <Conhecimento
            propsDescricao="JS"
            propsNivel="Avançado"
            propsExcluir={() => {}}
        />
        )

        const textDescricao =  getByTestId("text-descricao")

        expect(textDescricao.props.children).not.toEqual('')



    })


})