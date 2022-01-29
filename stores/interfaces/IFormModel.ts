import FieldModel from "../form/FieldModel";

export default interface IFormModel {
    isValid: boolean;
    validate: () => boolean;
    fields: { [key: string]: FieldModel<any> }
    reset: () => void;
    resetValidation: () => void;
    disabled: boolean;
    setDisabled: (disabled: boolean) => void;
}