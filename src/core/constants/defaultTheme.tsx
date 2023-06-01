import { ThemeProps } from "./ThemeProvider";
import { themeHelper } from "./utils/themeHelper";

const defaultTheme: ThemeProps = {
    mobileFirst: false,
    color: {
        primary: themeHelper.generatePatlete('#5f0000', '#ad0a0a', '#390101', 'white'),
        secondary: themeHelper.generatePatlete('#5f0000', '#ad0a0a', '#390101', 'white'),
        error: themeHelper.generatePatlete('red', 'red', '#390101', 'white'),
        info: themeHelper.generatePatlete('#5f0000', '#ad0a0a', '#390101', 'white'),
        success: themeHelper.generatePatlete('#5f0000', '#ad0a0a', '#390101', 'white'),
        warning: themeHelper.generatePatlete('#5f0000', '#ad0a0a', '#390101', 'white'),
        gray: themeHelper.generatePatlete('#5f0000', '#ad0a0a', '#390101', 'white'),
    },
    fieldSize: {
        small: {
            fontSize: '1rem',
            height: 24
        },
        middle: {
            fontSize: '1.4rem',
            height: 32
        },
        large: {
            fontSize: '1.6rem',
            height: 40
        }
    },
    space: {
        small: 8,
        middle: 16,
        large: 32
    },
    component: {
        // Badge: {},
        // Breadcrumb: {},
        Button: {
            className: 'cbi',
        },
        FormItem: {},
        // Checkbox: {},
        // Datepicker: {},
        // Drawer: {},
        Dropdown: {},
        Form: {},
        // FormItem: {},
        // Header: {},
        // Icon: {},
        Input: {},
        // Message: {},
        // Model: {},
        // Radio: {},
        // Richtext: {},
        // Select: {},
        // Sidebar: {},
        // Skeleton: {},
        // Switch: {},
        // Tab: {},
        // TabContent: {},
        // Table: {},
        // TabTitle: {},
        // Tag: {},
        // Textarea: {},
        // Tooltip: {},
    },
    layout: {
        column: 12,
        colGap: 30,
        rowGap: 0,
        container: 1440,
        responsive: {
            xxl: themeHelper.generateLayout(12, 1400),
            xl: themeHelper.generateLayout(12, 1100),
            lg: themeHelper.generateLayout(12, 768),
            md: themeHelper.generateLayout(12, 640),
            sm: themeHelper.generateLayout(12, 320),

        }
    },
    transition: {},
    renderEmpty: () => <div>...Loading</div>,
    responsive: {
        100: {

        }
    }
}



export default defaultTheme