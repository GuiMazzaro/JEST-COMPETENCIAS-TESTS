import { StatusBar } from 'react-native';
import { Inicial } from './src/telas/Inicial';
import { ThemeProvider } from 'styled-components'
import tema from './src/global/estilos/tema'

export default function App() {
  return (
    <>      
      <StatusBar 
          barStyle="light-content" 
          backgroundColor="#000"
      />        
      <ThemeProvider theme={tema}>          
        <Inicial />
      </ThemeProvider>
    </>
  );
}
/*
Elementos básicos React Native
- Componentes JSX
- Props
- States
- Hooks (useState e useEffect)

Expo
- Instalação, configuração e utilização

Recursos do JavaScript
- Functions (passagem de parâmetros e retorno de valor)
- Arrays (manipulação de dados primitivos e objetos)
- Funções síncronas e assíncronas
- Tratamento de exceções

TypeScript
- Solicitações de tipagens
- Criação de tipo (interface)
- Criação e manipulação de objetos

Styled-Components
- Encapsulamento de CSS-in-JS
- Propriedades de estilos (attrs)
- Importação de compoentes (icones etc.)

AsyncStorage
- inserção e leitura (itens)
*/