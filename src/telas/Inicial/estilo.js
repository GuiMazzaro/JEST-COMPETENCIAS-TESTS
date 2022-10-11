import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import {Picker} from '@react-native-picker/picker'
// import RadioForm from 'react-native-simple-radio-button'

// Estilos Inicial

export const Conteiner = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.cores.fundo_escuro };
`

export const Titulo = styled.Text`
  background-color: ${({ theme }) => theme.cores.titulo };
  color: ${({ theme }) => theme.cores.texto };
  font-size: 24px;
  font-weight: bold;
  padding-top: 12px;
  text-align: center;
`

export const SubTitulo = styled.Text`
  background-color: ${({ theme }) => theme.cores.titulo };
  color: ${({ theme }) => theme.cores.mensagem };
  font-size: 16px;
  padding-bottom: 12px;
  text-align: center;
`

export const Campo = styled.TextInput.attrs({
  placeholder: "Informe a competência",
  placeholderTextColor: '#034780'
})`
  margin-top: 36px;
  height: 56px;
  background-color: ${({ theme }) => theme.cores.campo_escuro };
  border-radius: 5px;
  color: ${({ theme }) => theme.cores.texto };
  padding: 16px;
  font-size: 18px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.cores.campo_claro };
`

export const AdicaoCompetencia = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 18px;
  margin-bottom: 18px;
`

export const Niveis = styled(Picker).attrs({
  dropdownIconColor: '#fff'
})``

export const Botao = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.cores.campo_claro };
  align-items: center;
  justify-content: center;
`

export const SemCompetencias = styled.Text`
  color:${({ theme }) => theme.cores.mensagem };
  font-size: 16px;
  text-align: center;
  margin-top: 12px;
`

export const Lista = styled.FlatList`
  margin-top: 18px;
`

export const Icone = styled(MaterialIcons)`
  color: ${({ theme }) => theme.cores.texto };
  font-weight: bold;
  font-size: 28px;
`

/*
export const Niveis = styled(RadioForm).attrs({
  buttonColor: '#034780',
  labelColor: '#034780',
  selectedButtonColor: '#0565b3',
  selectedLabelColor: '#0565b3',
  labelStyle: { 
    fontSize: 18, 
    marginTop: 6, 
    marginBottom: 12 
  }
})``
*/
