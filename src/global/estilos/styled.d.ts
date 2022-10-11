import 'styled-components'
import tema from './tema' // Tema personalizado

declare module 'styled-components' {
    type ThemeType = typeof tema 
    export interface DefaultTheme extends ThemeType {} 
}