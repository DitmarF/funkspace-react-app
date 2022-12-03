import gsap from "gsap";

const rotate = (obj, rotation, transformOrigin, duration = '1') => {
    gsap.to(obj.current, { rotation, transformOrigin, duration });
}

export {rotate}