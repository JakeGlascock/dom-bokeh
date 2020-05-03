const createDepth = (): void => {
    const HTMLCollection = document.querySelectorAll('*');
    const array = Array.from(HTMLCollection);
    array.forEach((el: any) => {el.style.filter = "blur(5px)"});
};

export default {
    createDepth
}
