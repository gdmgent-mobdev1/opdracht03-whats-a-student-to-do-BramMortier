export const convertInputsToArray = (inputName: string): string[] => {
    const inputs = Array.from(document.querySelectorAll(`input[name="${inputName}"]`)) as HTMLInputElement[];
    return Array.from(inputs.map((input: HTMLInputElement): string => input.value));
};
