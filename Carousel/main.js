// https://picsum.photos/seed/picsum/200/300

const carouselElement = document.getElementsByClassName('carousel')
const nextBtn = document.getElementById("carousel-btn-next")
const prevBtn = document.getElementById("carousel-btn-prev")

// const imageContainer = document.createElement('div')
// imageContainer.innerHTML = `<img class="carousel-item"/>`
// const images = carouselElement.append(imageContainer);

// const imageRender = async () => {
//     const api = "https://picsum.photos/seed/picsum/200/300"
//     const response = await fetch(api)
//     const json = response.json()
//     console.log(json)
//     let mappedImage = json.map(images => {
//         return `<div><img class="carousel-item" src="${images}" /></div>`
//     })
// }


// imageRender().catch(images => {
//     return images
// })

const slides = document.getElementsByClassName('carousel-item')
let slidePosition = 0
const slideLength = slides.length

nextBtn.addEventListener('click', moveRight)
prevBtn.addEventListener('click', moveLeft)


function hideImages() {
    for (const slide of slides) {
        slide.classList.remove("carousel-item-visible")
        slide.classList.add("carousel-item-hidden")
    }
}

function moveLeft() {
    hideImages()
    slidePosition === slideLength - 1 ? slidePosition = 0
        : slidePosition++;
    return slides[slidePosition].classList.add("carousel-item-visible")
}

function moveRight() {
    hideImages();
    slidePosition === 0 ? slidePosition = slideLength - 1
        : slidePosition--;
    return slides[slidePosition].classList.add("carousel-item-visible")
}

