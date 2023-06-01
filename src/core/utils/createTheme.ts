import _ from 'lodash'
import { ThemeProps } from 'ui'
import defaultTheme from '../defaultTheme'

/**
 *
 * @param themeOption: Optional theme to extends default props
 * @returns ThemeProps: Full attribute theme data
 * @see [createTheme](https://mui.com/api/date-picker/)
 */
export const createTheme = (themeOption: Optional<ThemeProps>) => {
	return _.defaultsDeep(themeOption, defaultTheme) as ThemeProps
}
