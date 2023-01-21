export const createRipple = (event: MouseEvent) => {
    const container = event.target as HTMLElement;

    const circle: HTMLElement = document.createElement("span");
    const diameter: number = Math.max(container.clientWidth, container.clientHeight);
    const radius: number = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - container.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - container.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple: Element = container.getElementsByClassName("ripple")[0];

    if (ripple) {
        ripple.remove();
    }

    container.appendChild(circle);
};
