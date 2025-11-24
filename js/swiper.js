function slider(elem) {
    const slider = document.querySelector(`[data-slider="${elem}"]`);
    const sliderList = document.querySelector("[data-slider-list]");

    slider.addEventListener("click", (e) => {

        const btn = e.target.closest("[data-slider-action]")
        const action = btn.dataset.sliderAction;

        if (action === "next") {
            sliderList.scrollBy({
                left: slider.firstElementChild.offsetWidth,
                behavior: "smooth",
            });
        } else if (action === "prev") {
            sliderList.scrollBy({
                left: -slider.firstElementChild.offsetWidth,
                behavior: "smooth",
            });
        }

    })

}

slider(1)