import gsap from "gsap";

const rotate = (obj, rotation, transformOrigin) => {
    gsap.to(obj.current, { rotation, transformOrigin });
}

export {rotate}