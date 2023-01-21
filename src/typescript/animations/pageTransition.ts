// ------------------------------------------- //
// module imports
import gsap from "gsap";
import { tiles } from "../lib/constants";
// ------------------------------------------- //

export const pageTransition = (): void => {
    let tl = gsap.timeline();

    tl.to(tiles, {
        duration: 0.25,
        width: "100%",
        left: "0%",
        delay: 0.1,
        stagger: 0.05,
    });

    tl.to(tiles, {
        duration: 0.25,
        width: "100%",
        left: "100%",
        delay: 0.1,
        stagger: -0.05,
    });

    tl.set(tiles, { left: "0", width: "0" });
};
