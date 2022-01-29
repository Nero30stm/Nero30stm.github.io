export type TSelectInput = {
    placeholder?: string;
    isValid?: boolean;
    value?: any;
    options?: any;
    onChange?: (value: any) => any;
    handleInputChange?: (value: any) => any
    handleloadOptions?: any,
};

export const colourStyles = {
    control: (styles:any) => ({ ...styles,
        backgroundColor: 'white',
        borderRadius: '10px',
        borderColor: 'transparent',
        height: '50px'
    }),
    menu: (styles: any) => ({ ...styles,
        overflow: 'auto'
    }),
    indicatorSeparator: (styles: any) =>({display: 'none'}),
    option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {

        return {

            ...styles,
        };
    },
};