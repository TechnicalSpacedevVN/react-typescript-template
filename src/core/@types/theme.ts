/**
 * Những giá trị mà bạn có thể sử dụng để điều chỉnh kích thước
 */
export type UnitSize = number | `${number}${'px' | '%' | 'rem' | 'em' | 'wh' | 'vh'}`

/**
 * Kích thước component dùng cho toàn bộ component
 */
export type NameSize = 'large' | 'middle' | 'small'

/**
 * Kích thước của một component
 */
export type GeneralSize = NameSize | UnitSize

/**
 * Những nơi có thể dùng để lưu trữ data
 */
export type DriverStorage = 'url' | 'localStorage' | 'sessionStorage' | 'redux' | 'cookie' | 'indexDB'

/**
 * Size màn hình, mặc định là md
 */
export type ScreenSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

/**
 * Tất cả config của Theme
 */
export interface ThemeProps {
	/**
	 * Constant dùng chung cho toàn bộ hệ thống
	 */
	token: {
		color: {}
	}

	/**
	 * Default những props mặc định trong component
	 */
	component: {}
}
