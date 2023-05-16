// посчет общего кол-во товаров в корзине
function quantityProduct() {
    const cartItem = document.querySelectorAll('.cart-item');
    const cartNamber = document.querySelector('.cart-sidebar__line-number');


    let totalQuantity = 0;

    cartItem.forEach(function(item) {
        const quantityEl = item.querySelector('[data-counter]');
        const quantity = parseInt(quantityEl.innerText);
        totalQuantity += quantity;

    });
    totalQuantity = totalQuantity;
    cartNamber.innerHTML = totalQuantity;




};


// Подсчет общей стоимости товаров
function calcCartPrice() {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceEL = document.querySelector('.all-price');
    const totalPriceWeb = document.querySelector('.cart-price');

    let totalPrice = 0;



    cartItems.forEach(function(item) {
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.cart-item__price');

        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        totalPrice += currentPrice;

    });

    totalPriceEL.innerHTML = totalPrice;
    totalPriceWeb.innerHTML = totalPrice;
};


// выяснить пуста ли корзина

function toggleCartStatus() {
    const wrapperCart = document.querySelector('.catr__items-wrapper');
    const cartEmpty = document.querySelector('.cart-empty');
    const cartSidebar = document.querySelector('.cart__sidebar');
    const cartContent = document.querySelector('.cart__content');
    const cartWeb = document.querySelector('.cart-price');
    const cartWeb1 = document.querySelector('.web');
    // const clearPositionBtn = document.querySelector('#remuve');


    if (wrapperCart.children.length > 0) {
        cartEmpty.classList.add('none');
        cartContent.classList.remove('none');
        cartSidebar.classList.remove('none');
        cartWeb.classList.remove('none');
        cartWeb1.classList.remove('none');
        // clearPositionBtn.onclick = function() {
        //     $(this).closest('.cart-item').remove();
        // }
    } else {
        cartEmpty.classList.remove('none');
        cartContent.classList.add('none');
        cartSidebar.classList.add('none');
        cartWeb.classList.add('none');
        cartWeb1.classList.add('none');
    };
}


// Поле поиска
const doc = document;
const log = console.log;

const boxInp1 = doc.querySelector('.form-box');
const inp1 = doc.querySelector('.input__search');

inp1.addEventListener('input', validate);

function validate() {
    if (inp1.value.length) {
        // Если значение "boolean" = true
        boxInp1.classList.add('active');
    } else {
        // Если значение "boolean" = false
        boxInp1.classList.remove('active')
    };
}


//получаем идентификатор элемента
var a = document.getElementById('serh');
boxInp1.classList.remove('active')
    //вешаем на него событие
a.onclick = function() {
    //производим какие-то действия
    document.getElementById("inp").value = "";
    boxInp1.classList.remove('active');
    //предотвращаем переход по ссылке href
    return false;
}

// скролл
var element = document.getElementById('mn');
// var element2 = document.getElementById('mn2')
window.addEventListener('scroll', function() {
    if (window.scrollY) {
        element.classList.add('scroll');
        // element2.classList.add('scroll2');
    } else {
        element.classList.remove('scroll');
        // element.classList.remove('scroll2');
    }
});

// выподающий каталог
$("#drop-down").on('click', function() {
    $(this).toggleClass('active');
});

$(document).on('mouseup', function(e) { // При нажатии на документ
    let s = $('.drop-down.active'); // берём .block.-active
    if (!s.is(e.target) && s.has(e.target).length === 0) {
        // Если нажат не он и не его дочернии И сам он существует
        s.removeClass('active'); // То удаляем у него класс .active
    }
});

// показывание активной ссылке в выпадающем каталоге и каталоге сбоку
$(".drop-down__container a").click(function(e) {
    e.preventDefault();
    $(".drop-down__container a").removeClass('active');
    $(this).addClass('active');
})
$(".main__left-menu ul a").click(function(e) {
    e.preventDefault();
    $(".main__left-menu ul li a").removeClass('active');
    $(this).addClass('active');
})

// Открытие и закрытие корзины
$("#open-cart").click(function() {
    $(".cart_wrapper").addClass('open-cart');
    $('body').addClass('lock');
})
$("#close-cart").click(function() {
    $(".cart_wrapper").removeClass('open-cart');
    $('body').removeClass('lock');
})
$(".cart-empty__btn").click(function() {
    $(".cart_wrapper").removeClass('open-cart');
    $('body').removeClass('lock');
})
$("#open-cartt").click(function() {
    $(".cart_wrapper").addClass('open-cart');
    $('body').addClass('lock');
})

// счетчик корзины

// первая версия:

// const btnMinus = document.querySelector('[data-action="minus"]');
// const btnPlus = document.querySelector('[data-action="plus"]');
// const counter = document.querySelector('[data-counter]');
// var abbCart = document.getElementById('abbcart');
// var addCartBtn = document.getElementById('addCartBtn');

// $(addCartBtn).click(function(e) {
//     e.preventDefault();
//     $(abbCart).addClass('add');
// });



// btnMinus.addEventListener('click', function() {

//     if (parseInt(counter.innerText) > 1) {
//         counter.innerText = --counter.innerText;

//     } else {
//         $(abbCart).removeClass('add');
//     }

// });

// btnPlus.addEventListener('click', function() {
//     console.log('Plus click');
//     counter.innerText = ++counter.innerText;
// });

// ВТОРАЯ ВЕРИСИЯ СЧЕТЧИКА

var abbCart = document.getElementById('abbcart');
var addCartBtn = document.getElementById('addCartBtn');

$(addCartBtn).click(function(e) {
    e.preventDefault();
    $(abbCart).addClass('add');
});

window.addEventListener('click', function(event) {

    let counter;
    let counterCart;
    let counterCart2;
    let counterCart3;




    if (event.target.dataset.action === 'plus' && event.target.closest('.catr__items-wrapper') || event.target.dataset.action === 'minus' && event.target.closest('.catr__items-wrapper')) {
        const adc = event.target.closest('.cart-item');
        counter = adc.querySelector('[data-counter]');
        const idCard = event.target.closest('.cart-item').dataset.id;
        const productContainer = document.querySelector(`.main__right`);
        const cartCounter1 = productContainer.querySelector(`[data-id="${idCard}"]`);
        counterCart = cartCounter1.querySelector('[data-counter]');


    };
    if (event.target.dataset.action === 'plus' && event.target.closest('.products-container') || event.target.dataset.action === 'minus' && event.target.closest('.products-container')) {
        const cartCounterId = event.target.closest('.products-container').dataset.id;
        const cartWrapper = document.querySelector(`.catr__items-wrapper`);
        const cartCounter = cartWrapper.querySelector(`[data-id="${cartCounterId}"]`);
        counterCart2 = cartCounter.querySelector('[data-counter]');
        const abc = event.target.closest('.products-container');
        counterCart3 = abc.querySelector('[data-counter]');

        // console.log(counter);


    };


    // Для кнопки плюс
    if (event.target.dataset.action === 'plus' && event.target.closest('.products-container')) {

        counterCart2.innerText = ++counterCart2.innerText;
        counterCart3.innerText = ++counterCart3.innerText;
        // пересчет общей стоимости товаров в корзине
        calcCartPrice();
        // Пересчет кол-во товаров
        quantityProduct()


    };
    if (event.target.dataset.action === 'plus' && event.target.closest('.catr__items-wrapper')) {
        counter.innerText = ++counter.innerText;
        counterCart.innerText = ++counterCart.innerText;
        // пересчет общей стоимости товаров в корзине
        calcCartPrice();
        // Пересчет кол-во товаров
        quantityProduct()




    };

    // Для кнопки минус
    if (event.target.dataset.action === 'minus' && event.target.closest('.products-container')) {
        // Удоляем товар из корзины
        if (event.target.closest('.catr__items-wrapper') && parseInt(counter.innerText) === 1) {
            event.target.closest('.cart-item').remove();
            const IdIncard = event.target.closest('.cart-item').dataset.id;
            const cartItem = document.querySelector(`[data-id="${IdIncard}"]`)
            cartItem.querySelector('.add').classList.remove('add');
            // Отображения статуса корзины
            toggleCartStatus();

            // пересчет общей стоимости товаров в корзине
            calcCartPrice();
            // Пересчет кол-во товаров
            quantityProduct()

        };

        if (parseInt(counterCart3.innerText) > 1) {
            counterCart2.innerText = --counterCart2.innerText;
            counterCart3.innerText = --counterCart3.innerText;
            // пересчет общей стоимости товаров в корзине
            calcCartPrice();
            // Пересчет кол-во товаров
            quantityProduct()


        } else if (event.target.closest('.products-container')) {
            event.target.closest('.add').classList.remove('add');
            const IdIncard1 = event.target.closest('.products-container').dataset.id;
            const cartItem12 = document.querySelector(`.catr__items-wrapper`);
            const cartItem1 = cartItem12.querySelector(`[data-id="${IdIncard1}"]`);
            cartItem1.remove();
            // Отображения статуса корзины
            toggleCartStatus();

            // пересчет общей стоимости товаров в корзине
            calcCartPrice();
            // Пересчет кол-во товаров
            quantityProduct()

        };




    };

    if (event.target.dataset.action === 'minus' && event.target.closest('.catr__items-wrapper')) {
        // Удоляем товар из корзины
        if (event.target.closest('.catr__items-wrapper') && parseInt(counter.innerText) === 1) {
            event.target.closest('.cart-item').remove();
            const IdIncard = event.target.closest('.cart-item').dataset.id;
            const cartItem = document.querySelector(`[data-id="${IdIncard}"]`)
            cartItem.querySelector('.add').classList.remove('add');
            toggleCartStatus();

            // пересчет общей стоимости товаров в корзине
            calcCartPrice();
            // Пересчет кол-во товаров
            quantityProduct()

        };

        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
            counterCart.innerText = --counterCart.innerText;
            // пересчет общей стоимости товаров в корзине
            calcCartPrice();
            // Пересчет кол-во товаров
            quantityProduct()


        } else if (event.target.closest('.products-container')) {
            event.target.closest('.add').classList.remove('add');
            const IdIncard1 = event.target.closest('.products-container').dataset.id;
            const cartItem12 = document.querySelector(`.catr__items-wrapper`);
            const cartItem1 = cartItem12.querySelector(`[data-id="${IdIncard1}"]`);
            cartItem1.remove();

            // Отображения статуса корзины
            toggleCartStatus();

            // пересчет общей стоимости товаров в корзине
            calcCartPrice();
            // Пересчет кол-во товаров
            quantityProduct()

        };





    };

});

// Добавление в карзину v1

const cartWrapper = document.querySelector('.catr__items-wrapper');

window.addEventListener('click', function(event) {
    // проверяем что клик был по нужной кнопке
    if (event.target.hasAttribute('data-cart')) {

        // находим карточку с товаром внутрий которой был клик
        const card = event.target.closest('.products-container');
        card.querySelector('.container__in-cart').classList.add("add");

        // собираем данные этого товара
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            weight: card.querySelector('.price-container__span').innerText,
            price: card.querySelector('.price-container__value').innerText,
            counter: card.querySelector('[data-counter]').innerText,

        };

        // Проверяем есть ли товар в корзине

        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        if (itemInCart) {
            const counterElement = itemInCart.querySelector('[data-counter]');
            const counterElementWeb = card.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + 1;
            counterElementWeb.innerText = parseInt(counterElementWeb.innerText) + 1;

        } else {



            // Собираем данные

            const cartItemHTML = `
            <div class="row cart-item" data-id="${productInfo.id}">
                <div class="row cart-item__info">
                    <a class="cart-item__img" href="" >
                        <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
                    </a>
                    <div class="cart-item__text">
                        <div class="cart-item__title"> ${productInfo.title} </div>
                        <div class="cart-item__value">
                        ${productInfo.price}
                            <span class="cart-item__icon-rub"></span>
                            &nbsp;${productInfo.weight}
                        </div>
                    </div>
                </div>
                <div class="row cart-item__quantity">
                    <div  class="in-cart__counter">
                        <div class="cart-item__minus" data-action="minus"></div>
                        <div class="current" data-counter>${productInfo.counter}</div>
                        <div class="cart-item__plus" data-action="plus">+</div>
                    </div>
                    <div class="cart-item__price">
                        <span>${productInfo.price}
                        <span class="cart-item__icon-rub"></span>
                        </span>
                    </div>
                </div>
                <div data-clear class="cart-item__remove">
                    <i data-clear class="icon-basket_delit"></i>
                </div>
            </div>            
        </div>
    </div>`;

            // Отобразим их в корзине
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);

        };
        // Отображения статуса корзины
        toggleCartStatus();

        // пересчет общей стоимости товаров в корзине
        calcCartPrice();
        quantityProduct();
    };
});
// Удаление позиции
window.addEventListener('click', function(event) {
    if (event.target.hasAttribute('data-clear')) {
        event.target.closest('.cart-item').remove();
        const IdIncard = event.target.closest('.cart-item').dataset.id;
        const cartItem = document.querySelector(`[data-id="${IdIncard}"]`)
        cartItem.querySelector('.add').classList.remove('add');
        const allCounter = document.querySelectorAll('[data-counter]');
        allCounter.forEach(function(el) {
            el.innerHTML = "1";
        });
        // Отображения статуса корзины
        toggleCartStatus();

        // пересчет общей стоимости товаров в корзине
        calcCartPrice();
        quantityProduct();
    };
});


// очистка корзины поностью
window.addEventListener('click', function(event) {
    if (event.target.hasAttribute('data-clearAll')) {
        document.querySelector('.catr__items-wrapper').innerHTML = "";
        toggleCartStatus();
        // пересчет общей стоимости товаров в корзине
        calcCartPrice();
        quantityProduct();
        const allCard = document.querySelectorAll('.add')
        allCard.forEach(function(el) {
            el.classList.remove('add');
        });
        const allCounter = document.querySelectorAll('[data-counter]');
        allCounter.forEach(function(el) {
            el.innerHTML = "1";
        });
    };
});