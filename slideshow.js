let items = document.querySelectorAll('.carousel .carousel-item')

function rede() {
    if (window.innerWidth <= 1100 ) {
        items.forEach((el) => {
            // number of slides per carousel-item
            const minPerSlide = 2
            let next = el.nextElementSibling
            for (var i=1; i<minPerSlide; i++) {
                if (!next) {
                    // wrap carousel by using first child
                    next = items[0]
                }
                let cloneChild = next.cloneNode(true)
                el.appendChild(cloneChild.children[0])
                next = next.nextElementSibling
            }
        })
    } else {
        items.forEach((el) => {
            // number of slides per carousel-item
            const minPerSlide = 3
            let next = el.nextElementSibling
            for (var i=1; i<minPerSlide; i++) {
                if (!next) {
                    // wrap carousel by using first child
                    next = items[0]
                }
                let cloneChild = next.cloneNode(true)
                el.appendChild(cloneChild.children[0])
                next = next.nextElementSibling
            }
        })
    }
}

rede()

// window.addEventListener("resize", () => {
//     rede();
// })

    
