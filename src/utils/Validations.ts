export const isValidateNationalCode = (nationalCode: string) => {
    if (!nationalCode) {
        return true;
    }
    let n = 0;
    const ld = parseInt(nationalCode.charAt(9));
    for (let i = 0; i < 10; i++) {
        if (i < 9) {
            n = n + parseInt(nationalCode.charAt(i)) * (10 - i);
        }
    }
    const m = n % 11;
    if (!((m == 0 && ld == 0) || (m == 1 && ld == 1) || (m > 1 && ld == 11 - m))) {
        return "کد ملی نا معتبراست !"
    }
    return true;
}

export const isValidPhoneNumber = (phoneNumber: string) => {
    const regEx = /^\d{11}$/;
    return regEx.test(phoneNumber) ? true : "شماره تماس نا معتبر است !";
}

export const isValidBankAccount = (phoneNumber: string) => {
    const regEx = /^\d{12,16}$/;
    return regEx.test(phoneNumber) ? true : "شماره حساب بانکی نامعتبر است !";
}
export const isValidShabaAccount = (phoneNumber: string) => {
    const regEx = /^(?:IR)(?=.{24}$)[0-9]*$/
    return regEx.test(phoneNumber) ? true : "شماره شبا نامعتبر است !";
}