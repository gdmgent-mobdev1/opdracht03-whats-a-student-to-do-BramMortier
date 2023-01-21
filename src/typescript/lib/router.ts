// ------------------------------------------- //
// module imports
import { modals, pages } from "./constants";
import { pageTransition } from "../animations/pageTransition";
// ------------------------------------------- //

export const navigate = (destinationPage: HTMLElement, disableAnimate?: boolean): void => {
    if (!disableAnimate) {
        pageTransition();
        setTimeout(() => {
            switchPage(destinationPage);
        }, 650);
    } else {
        switchPage(destinationPage);
    }
};

export const switchPage = (destinationPage: HTMLElement): void => {
    destinationPage.classList.add("page--active");

    pages.forEach((page: HTMLElement): void => {
        if (page !== destinationPage) page.classList.remove("page--active");
    });
};

export const openModal = (targetModal: HTMLElement): void => {
    targetModal.classList.add("overlay--active");
};

export const closeModal = (): void => {
    modals.forEach((modal: HTMLElement): void => {
        modal.classList.remove("overlay--active");
    });
};
