window.addEventListener('DOMContentLoaded', function() {
    function Carrosel(imagesThumb, imagesSlide, arrowLeft, arrowRight) {
        this.onCar = "active_car";
        this.imagesThumb = imagesThumb;
        this.imageSlide = imagesSlide;
        this.arrowLeft = arrowLeft;
        this.arrowRight = arrowRight;
        this.setOnStart = function() {
            this.imagesThumb[0].classList.add(this.onCar);
            this.imagesThumb[1].classList.add(this.onCar);
            this.imagesThumb[2].classList.add(this.onCar);
        }
        imagesSlide[0].classList.add('display_image');
        this.setOnStart();

        this.x = 0;

        this.changeX = function(newX) {
            if (newX >= this.imagesThumb.length) {
                return 0;
            } else if (newX < 0) {
                return this.imagesThumb.length - 1;
            } else {
                return newX;
            }
        };

        this.showCarLeft = function() {
            this.imagesThumb.forEach(e => {
                e.classList.remove(this.onCar);
            });
            this.x = this.changeX(this.x - 1);
            this.imagesThumb[this.x].classList.add(this.onCar);
            this.imagesThumb[this.changeX(this.x - 1)].classList.add(this.onCar);
            this.imagesThumb[this.changeX(this.x - 2)].classList.add(this.onCar);
        };

        this.showCarRight = function() {
            this.imagesThumb.forEach(e => {
                e.classList.remove(this.onCar);
            });
            this.x = this.changeX(this.x + 1);
            this.imagesThumb[this.x].classList.add(this.onCar);
            this.imagesThumb[this.changeX(this.x + 1)].classList.add(this.onCar);
            this.imagesThumb[this.changeX(this.x + 2)].classList.add(this.onCar);
        };

        this.changeImage = () => {
            const showImage = (i) => {
                imagesSlide.forEach(e => {
                    e.classList.remove('display_image');
                });
                imagesSlide[i].classList.add('display_image');
            };
            this.imagesThumb.forEach((e, i) => {
                e.addEventListener('click', () => {
                    showImage(i);
                });
            });
        };

        this.changeImage();

        this.arrowEvent = function() {
            this.arrowLeft.addEventListener('click', () => {
                this.showCarLeft();
            });
            this.arrowRight.addEventListener('click', () => {
                this.showCarRight();
            });
        };
    }

    // Crie uma instância da classe Carrosel e ative os eventos das setas
    const slide1 = new Carrosel(document.querySelectorAll('.car'), document.querySelectorAll('.main_photo'), document.querySelector('.arrow_left'), document.querySelector('.arrow_right'));
    const slide2 = new Carrosel(document.querySelectorAll('.car_1'), document.querySelectorAll('.main_photo_1'), document.querySelector('.arrow_left1'), document.querySelector('.arrow_right1'));
    const slide3 = new Carrosel(document.querySelectorAll('.car_2'), document.querySelectorAll('.main_photo_2'), document.querySelector('.arrow_left2'), document.querySelector('.arrow_right2'));
    const slide4 = new Carrosel(document.querySelectorAll('.car_3'), document.querySelectorAll('.main_photo_3'), document.querySelector('.arrow_left3'), document.querySelector('.arrow_right3'));
    const slide5 = new Carrosel(document.querySelectorAll('.car_4'), document.querySelectorAll('.main_photo_4'), document.querySelector('.arrow_left4'), document.querySelector('.arrow_right4'));
    // const slide6 = new Carrosel(document.querySelectorAll('.car_5'), document.querySelectorAll('.main_photo_5'), document.querySelector('.arrow_left5'), document.querySelector('.arrow_right5'));
    slide1.arrowEvent();
    slide2.arrowEvent();
    slide3.arrowEvent();
    slide4.arrowEvent();
    slide5.arrowEvent();
    // slide6.arrowEvent();
});
