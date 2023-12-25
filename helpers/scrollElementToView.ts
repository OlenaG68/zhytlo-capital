export const scrollElementToView = (scrollToId: string): void => {
    const element = document.querySelector(`#${scrollToId}`) as HTMLElement;

    const elRect = element.getBoundingClientRect();

    const scrollDistance = elRect.top - 50 + window.scrollY;

    const offset =
        Number(element.getAttribute("data-scroll-to-view-offset")) || 0;

    window.scrollTo({
        top: scrollDistance + offset,
        behavior: "smooth",
    });
};
