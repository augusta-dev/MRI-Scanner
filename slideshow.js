let itemss = document.querySelectorAll('.carousel .carousel-item')

function rede() {
    if (window.innerWidth <= 1100 ) {
        itemss.forEach((el) => {
            // number of slides per carousel-item
            const minPerSlide = 2
            let next = el.nextElementSibling
            for (var i=1; i<minPerSlide; i++) {
                if (!next) {
                    // wrap carousel by using first child
                    next = itemss[0]
                }
                let cloneChild = next.cloneNode(true)
                el.appendChild(cloneChild.children[0])
                next = next.nextElementSibling
            }
        })
    } else {
        itemss.forEach((el) => {
            // number of slides per carousel-item
            const minPerSlide = 3
            let next = el.nextElementSibling
            for (var i=1; i<minPerSlide; i++) {
                if (!next) {
                    // wrap carousel by using first child
                    next = itemss[0]
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

    
