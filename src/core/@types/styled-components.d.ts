import { } from 'styled-components';
import { ThemeProps as ThemeType } from '../ThemeProvider'
declare module 'styled-components' {
    /**
     * Add your props theme here
     */
    export interface CustomTheme { }
    // extends the global DefaultTheme
    export interface DefaultTheme extends ThemeType, CustomTheme {

    }

}