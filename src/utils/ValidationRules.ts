import ValidationUtils from './ValidationUtils';

export default class ValidationRules {

    static getValidationFailureMessage() {
        return ('Ошибка валидации. Проверьте заполненные поля');
    }

    static getRequireMessage() {
        return ('Обязательное поле');
    }

    static getInvalidDateMessage() {
        return ('Некорректная дата');
    }

    static getExpiredDocMessage() {
        return ("Date is incorrect. The document cannot be expired");
    }

    static getLengthRangeMessage(min: number, max: number) {
        return ('Length of the value must be greater then {{min}} and less then {{max}}', {min, max});
    }

    static gePassengerMessage() {
        return ('It must contain only Latin characters and be no more than 25 characters long');
    }

    static getInvalidPasswordMessage() {
        return ('Password must be between 8 and 32 characters');
    }

    static getCaptchaRequiredMessage() {
        return ('You must pass the CAPTCHA check');
    }

    static getInvalidIntMessage() {
        return ('Value must be an integer');
    }

    static getInvalidDocumentNumberMessage() {
        return ('Неверный номер документа');
    }

    static getInvalidRussianDocumentMessage() {
        return ('Invalid document number for a Russian passenger');
    }

    static getInvalidMessage(target?: string) {
        if (!target) {
            return ('Not valid');
        }
        return ('{{target}} is not valid', {target});
    }

    static getEmailMessage() {
        return ValidationRules.getInvalidMessage(('Email'));
    }

    static getPhoneMessage() {
        return ValidationRules.getInvalidMessage(('Phone'));
    }

    static getEqualMessage(target: string) {
        if (!target) {
            return ('Not equal');
        }
        return ('{{target}} not equal', {target});
    }

    static required(value: any) {
        if (!value) {
            return ValidationRules.getRequireMessage();
        }
        return null;
    }

    static isTrue(value: any) {
        if (!value) {
            return ValidationRules.getRequireMessage();
        }
        return null;
    }

    static lengthRange(value: any, min: number, max: number) {
        const length = value?.length || 0;
        if (length > max || length < min) {
            return ValidationRules.getLengthRangeMessage(min, max);
        }
        return null;
    }

    static onlyLatinWithNumbers(value: any) {
        if (!ValidationUtils.isValidLatinWithNumber(value)) {
            return ValidationRules.getInvalidMessage();
        }
        return null;
    }

    static password(value: string) {
        if (!ValidationUtils.isValidPassword(value)) {
            return ValidationRules.getInvalidPasswordMessage();
        }
        return null;
    }

    static passengerName(name: string) {
        if (name && !ValidationUtils.isValidPassengerName(name)) {
            return ValidationRules.gePassengerMessage();
        }
        return null;
    }

    static month(value: string | number) {
        if (!ValidationUtils.isValidMonth(value)) {
            return ValidationRules.getInvalidMessage(('Month'));
        }
        return null;
    }

    static year(value: string | number) {
        if (!ValidationUtils.isValidYear(value)) {
            return ValidationRules.getInvalidMessage(('Year'));
        }
        return null;
    }

    static equal(value: any, other: any, target?: string) {
        if (value !== other) {
            return ValidationRules.getEqualMessage(target);
        }
        return null;
    }

    static equalPass(value: any, other: any) {
        if (value !== other) {
            return ValidationRules.getInvalidMessage(('Fields not equal'));
        }
        return null;
    }

    static email(value: string) {
        if (!ValidationUtils.isValidEmail(value)) {
            return ValidationRules.getEmailMessage();
        }
        return null;
    }

    static phone(value: string) {
        if (!ValidationUtils.isValidPhone(value)) {
            return ValidationRules.getPhoneMessage();
        }
        return null;
    }

    static userName(value: string) {
        if (!ValidationUtils.isValidUsername(value)) {
            return ValidationRules.getInvalidMessage();
        }
        return null;
    }

    static fullUserName(value: string) {
        if (!ValidationUtils.isValidFullName(value)) {
            return ValidationRules.getInvalidMessage();
        }
        return null;
    }
}