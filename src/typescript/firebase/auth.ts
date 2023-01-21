// ------------------------------------------- //
// module imports
import {
    Auth,
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithRedirect,
    UserCredential,
} from "firebase/auth";
import { Timestamp } from "firebase/firestore";
import { accountUsername, dashboardPage, loginForm, loginFormErrors, loginPage, signUpForm, signUpFormErrors } from "../lib/constants";
import { navigate } from "../lib/router";
import { notEmpty, safeLength, validateEmail } from "../lib/validation";
import { getProjects } from "./database/projects";
import { createUser, getUser } from "./database/users";
// ------------------------------------------- //

export const auth: Auth = getAuth();

auth.onAuthStateChanged(async (user): Promise<void> => {
    if (user) {
        sessionStorage.setItem("userId", user.uid);
        const account: any = await getUser(user.uid);
        sessionStorage.setItem("username", account.username);
        accountUsername.innerText = `Hi, ${account.username}!`;

        navigate(dashboardPage);
        getProjects(sessionStorage.getItem("userId") as string, false);
        getProjects(sessionStorage.getItem("userId") as string, true);
    } else {
        sessionStorage.removeItem("userId");
        navigate(loginPage);
    }
});

export const signUp = async (e: Event): Promise<void> => {
    e.preventDefault();

    let errorArr: string[] = [];

    let username: string = signUpForm.username.value;
    let email: string = signUpForm.email.value;
    let password: string = signUpForm.password.value;

    if (!notEmpty(username)) {
        errorArr.push("Username can't be empty");
    } else if (!safeLength(8, username)) errorArr.push("Username must be longer than 8 characters");

    if (!notEmpty(email)) {
        errorArr.push("Email can't be empty");
    } else if (!validateEmail(email)) errorArr.push("Email is not a valid format");

    if (!notEmpty(password)) {
        errorArr.push("Password can't be empty");
    } else if (!safeLength(6, password)) errorArr.push("Password must be longer than 6 characters");

    if (errorArr.length === 0) {
        try {
            signUpFormErrors.innerHTML = "";
            signUpFormErrors.classList.remove("form__errors--active");

            let userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);

            if (userCredential) {
                createUser({
                    userId: userCredential.user.uid,
                    username: username,
                    createdAt: Timestamp.now(),
                });
                signUpForm.reset();
            }
        } catch (error) {
            errorArr.push("An account with this email already exists");
            showErrors(signUpFormErrors, errorArr);
        }
    } else {
        showErrors(signUpFormErrors, errorArr);
    }
};

export const login = async (e: Event): Promise<void> => {
    e.preventDefault();

    let errorArr: string[] = [];

    let email: string = loginForm.email.value;
    let password: string = loginForm.password.value;

    if (!notEmpty(email)) {
        errorArr.push("Email can't be empty");
    }

    if (!notEmpty(password)) {
        errorArr.push("Password can't be empty");
    }

    if (errorArr.length === 0) {
        try {
            loginFormErrors.innerHTML = "";
            loginFormErrors.classList.remove("form__errors--active");

            let userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);

            if (userCredential) {
                loginForm.reset();
            }
        } catch (error) {
            errorArr.push("Wrong email and password combination");
            showErrors(loginFormErrors, errorArr);
        }
    } else {
        showErrors(signUpFormErrors, errorArr);
    }
};

export const loginWithGoogle = async (): Promise<void> => {
    const provider: GoogleAuthProvider = new GoogleAuthProvider();
    await signInWithRedirect(auth, provider);
};

export const logout = (): void => {
    auth.signOut();
};

export const showErrors = (targetFormErrors: HTMLElement, errorArr: string[]): void => {
    targetFormErrors.innerHTML = "";

    errorArr.forEach((error: string): void => {
        let errEl: HTMLElement = document.createElement("span");
        errEl.classList.add("error", "text-sm");
        errEl.innerText = error;
        targetFormErrors.appendChild(errEl);
    });

    if (targetFormErrors.id == "login-form-errors") {
        loginFormErrors.classList.add("form__errors--active");
        signUpFormErrors.classList.remove("form__errors--active");
    } else {
        signUpFormErrors.classList.add("form__errors--active");
        loginFormErrors.classList.remove("form__errors--active");
    }
};
