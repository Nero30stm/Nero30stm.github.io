//import phoneLib from 'google-libphonenumber';
import * as EmailValidator from 'email-validator';
import moment from 'moment';

//const phoneUtil = phoneLib.PhoneNumberUtil.getInstance();
const digit = /^\d+$/i;

export default class ValidationUtils {

    /*static isValidPhone = (inputNumber: string, country?: string, isValidIfEmpty?: boolean): boolean => {
        if (!inputNumber) {
            return !!isValidIfEmpty;
        }

        let isValid;
        try {
            let number;
            if (country) {
                number = phoneUtil.parseAndKeepRawInput(inputNumber, country);
            } else {
                number = phoneUtil.parse('+' + inputNumber);
            }

            isValid = phoneUtil.isValidNumber(number);
        } catch (e) {
            isValid = false;
        }

        return isValid;
    }*/

    static isValidMonth(value: string | number) {
        const month = value.toString();
        return !month.includes('_') && +month <= 12 && +month > 0;
    }

    static isValidYear(value: string | number) {
        const year = value.toString();
        return !year.includes('_') && +year >= +moment().format('YY');
    }

    static isValidEmail(email: string, isRequired?: boolean) {
        if (!isRequired && !email) {
            return true;
        }
        return EmailValidator.validate(email);
    }

    static isValidUsername(name: string) {
        const regexp = new RegExp(/^[а-яА-ЯёЁ\-']{2,25}$/uig);
        return regexp.test(name);
    }

    static isValidFullName(name: string) {
        const regexp = new RegExp(/^[a-zA-Z\-\s']{2,50}$/uig);
        return regexp.test(name);
    }

    static isValidPassengerName(name: string) {
        const regexp = new RegExp(/^[a-zA-Z\-]{2,25}$/uig);
        return regexp.test(name);
    }

    static isValidDocumentNumber(name: string) {
        const regexp = new RegExp(/^[A-ZА-ЯЁ0-9]{3,20}$/uig);
        return regexp.test(name?.toLocaleUpperCase());
    }

    static isValidLatinWithNumber(name: string) {
        const regexp = new RegExp(/^[a-zA-Z0-9]{1,}$/uig);
        return regexp.test(name);
    }

    static isValidPassword(name: string) {
        const regexp = new RegExp(/^[\s\S]{8,32}$/uig);
        return regexp.test(name);
    }

    static isDigit(str: string) {
        return digit.test(str);
    }

    static isLength(str: string, min: number, max?: number) {
        const surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
        const len = str.length - surrogatePairs.length;
        return len >= min && (typeof max === 'undefined' || len <= max);
    }
}