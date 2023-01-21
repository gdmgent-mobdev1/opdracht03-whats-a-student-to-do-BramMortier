// ------------------------------------------- //
// module imports
import { newPasswordInput, passwordSecurityBars } from "./constants";
// ------------------------------------------- //

export const notEmpty = (str: string): boolean => {
    return str !== "";
};

export const isNumber = (value: number | string | boolean): boolean => {
    return typeof value === "number";
};

export const safeLength = (minlength: number, str: string) => {
    return !(str.length < minlength);
};

export const validateEmail = (email: string): boolean => {
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

export const checkPasswordSecurity = () => {
    let password = newPasswordInput.value;

    if (password.length == 0) {
        updatePasswordSecurity(0);
        return;
    }

    if (password.length < 8) {
        updatePasswordSecurity(1);
        return;
    }

    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;
    let hasSpecial = false;

    for (let i = 0; i < password.length; i++) {
        let c = password.charAt(i);
        if (c >= "A" && c <= "Z") {
            hasUppercase = true;
        } else if (c >= "a" && c <= "z") {
            hasLowercase = true;
        } else if (c >= "0" && c <= "9") {
            hasNumber = true;
        } else {
            hasSpecial = true;
        }
    }

    let score = 0;

    if (hasUppercase) score++;
    if (hasLowercase) score++;
    if (hasNumber) score++;
    if (hasSpecial) score++;

    if (score >= 3) {
        updatePasswordSecurity(3);
        return;
    } else if (score == 2) {
        updatePasswordSecurity(2);
        return;
    } else {
        updatePasswordSecurity(1);
        return;
    }
};

export const updatePasswordSecurity = (passwordStrength: number) => {
    let securityBarArr = Array.from(passwordSecurityBars.children) as HTMLElement[];

    securityBarArr.forEach((bar: HTMLElement, index: number) => {
        if (passwordStrength <= index) {
            bar.classList.remove("form__security-bar--active");
        } else {
            bar.classList.add("form__security-bar--active");
        }
    });
};
