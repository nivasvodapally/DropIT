// document.addEventListener("DOMContentLoaded", function() {
//     const sliders = document.querySelectorAll('.categories, .featured-products');

//     sliders.forEach(slider => {
//         const itemList = slider.querySelector('.category-list') || slider.querySelector('.product-list');
//         const leftArrow = slider.querySelector('.left-arrow');
//         const rightArrow = slider.querySelector('.right-arrow');

//         let scrollAmount = 0;
//         const scrollMax = itemList.scrollWidth - itemList.clientWidth;
//         const scrollStep = itemList.clientWidth / 4;

//         rightArrow.addEventListener("click", function() {
//             if (scrollAmount < scrollMax) {
//                 scrollAmount += scrollStep;
//                 itemList.scrollTo({
//                     top: 0,
//                     left: scrollAmount,
//                     behavior: "smooth"
//                 });
//             }
//         });

//         leftArrow.addEventListener("click", function() {
//             if (scrollAmount > 0) {
//                 scrollAmount -= scrollStep;
//                 itemList.scrollTo({
//                     top: 0,
//                     left: scrollAmount,
//                     behavior: "smooth"
//                 });
//             }
//         });
//     });
// });









// dislay arrows when there are products to slide

document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll('.categories, .featured-products');

    sliders.forEach(slider => {
        const itemList = slider.querySelector('.category-list') || slider.querySelector('.product-list');
        const leftArrow = slider.querySelector('.left-arrow');
        const rightArrow = slider.querySelector('.right-arrow');

        let scrollAmount = 0;
        const scrollMax = itemList.scrollWidth - itemList.clientWidth;
        const scrollStep = itemList.clientWidth / 4;

        function updateArrows() {
            if (scrollAmount <= 0) {
                leftArrow.style.display = 'none';
            } else {
                leftArrow.style.display = 'block';
            }
            if (scrollAmount >= scrollMax) {
                rightArrow.style.display = 'none';
            } else {
                rightArrow.style.display = 'block';
            }
        }
        updateArrows();

        rightArrow.addEventListener("click", function() {
            if (scrollAmount < scrollMax) {
                scrollAmount += scrollStep;
                if (scrollAmount > scrollMax) scrollAmount = scrollMax; 
                itemList.scrollTo({
                    top: 0,
                    left: scrollAmount,
                    behavior: "smooth"
                });
                updateArrows();
            }
        });

        leftArrow.addEventListener("click", function() {
            if (scrollAmount > 0) {
                scrollAmount -= scrollStep;
                if (scrollAmount < 0) scrollAmount = 0;
                itemList.scrollTo({
                    top: 0,
                    left: scrollAmount,
                    behavior: "smooth"
                });
                updateArrows();
            }
        });
    });
});
