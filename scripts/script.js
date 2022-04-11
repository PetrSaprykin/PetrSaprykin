const menuButton = document.querySelector('#burgerBtn');
let navbar = document.querySelector('#nav');
let menuItems = navbar.querySelectorAll('li');
let imageContainer = document.querySelector('#imageCont')
let images = imageContainer.querySelectorAll('img');
let body = document.querySelector('body');
let slider = document.querySelector('#slider');
let sliderContent = slider.querySelector('#sliderCont')

menuButton.onclick = () => {
    navbar.classList.toggle('active');
    lockScroll()
};

for (let li of menuItems) {
    li.onclick = () => {
        removeAllClass(menuItems, 'click');
        li.classList.add('click');
    };
};

function removeAllClass(list, className) {
    for (let elem of list) {
        elem.classList.remove(className);
    }
}

function lockScroll() {
    body.style.overflow = 'hidden';
}
function unlockScroll() {
    body.style.overflow = 'auto';
}



for (let i = 0; i < images.length; i++) {
    let img = images[i];
    img.onclick = () => {
        sliderContent.innerHTML = null;
        slider.classList.add('active');
        lockScroll();
        let copyImg = img.cloneNode();
        sliderContent.append(copyImg);
        initButton(img, i);
    };
}



document.addEventListener('click', e => {
    let target = e.target;
    if (target == sliderContent || target == document.querySelector('.slider__wrapper')) {
        slider.classList.remove('active');
        removeAllClass(sliderContent.querySelectorAll('img'), 'active');
        unlockScroll()
    }
  })





function initButton(image, index) {
    for (let btn of slider.querySelectorAll('button')) {
        btn.onclick = () => {
            sliderContent.innerHTML = null;
            let images = image.parentNode.parentNode.parentNode.querySelectorAll('img');
            let newImage;
            if (btn.id == 'next') {
                index++;
                if (index == images.length) {
                    index = 0;
                    console.log('азазааззаза')
                    newImage = images[index].cloneNode();
                }
                else{
                    newImage = images[index].cloneNode();
                }
                sliderContent.append(newImage);
            }
            else{
                index--;
                if (index == -1) {
                    index = images.length-1;
                    newImage = images[index].cloneNode();
                }
                else{
                    newImage = images[index].cloneNode();
                }
                sliderContent.append(newImage);
            }
        };
    };
};