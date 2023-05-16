<?php 
define('DB_DRIVER', 'mysql');
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'search');

try{
    $connect=DB_DRIVER.":host=".DB_HOST.";dbname=".DB_NAME;
    $db=new PDO($connect,DB_USER,DB_PASS);
}

catch(PDOException $e){
    die("Error:".$e->getMessage());
}
if(isset($_POST['search_btn'])){
    $search = $_POST['search'];
    $search = trim(strip_tags(stripcslashes(htmlspecialchars($search))));
    $query = "SELECT * FROM `catalog` WHERE `name` LIKE ?";
    $params = ["%$search%"];
    $stmt = $db->prepare($query);
    $stmt->execute($params);
    // var_dump($stmt->rowCount());
    
        

 }
//  if (!$stmt->rowCount() == 0) 
//     {
//         while ($result = $stmt->fetch()) 
//         {
//             echo "<h1>".$result['name']."</h1><p>".$result['text']."</p><br>";
//         }       
//     } 
//     else 
//     {
//         echo '<h1>Нечего не найдено</h1>';
//     }

?>
<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/styles-search.css">
    <link rel="stylesheet" href="/css/stylefont.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <title>Document</title>
</head>

<body>
    <!-- Шапка -->
    <div class="menu" id="mn">
        <div class="container">
            <div class="row">
                <div class="logo">
                    <a href="http://lph/">
                        <img src="/img/logo.svg" alt="logo">
                    </a>
                </div>
                <div class="text_logo">
                    <span>лпх возрождение</span>
                </div>
                <ul>
                    <li><a href="" class="active">Каталог</a></li>
                    <li><a href="#">О нас</a></li>
                    <li><a href="">Доставка</a></li>
                    <li><a href="">Галерея</a></li>
                </ul>
                <!-- <div class="cart">
                    <a href="">
                        <img src="/img/cart.svg" alt="cart">
                    </a>
                </div> -->
                <div class="phone__menu">
                    <a href="tel: +79969226423">
                        +7(996)-922-64-23
                     </a>
                </div>
            </div>
        </div>
    </div>
    <!-- нижнее строка шапки -->
    <div class="meun__bottom" id="mn2">
        <div class="container">
            <div class="row">
                <div class="logo_bottom">
                    <a href="#">
                        <img src="/img/logo.svg" alt="logo">
                    </a>
                </div>
                <form class="search__form" action="search.php" method="post">
                    <div class="form-box">
                        <i class="icon-search"></i>
                        <input id="inp" name="search" class="input__search" type="search" placeholder="Поиск" required="">
                        <a id="serh" class="search-container__clear icon-close"></a>
                        <button type="submit" name="search_btn" class="btn">Найти</button>
                    </div>
                </form>
                <div class="cart">
                    <a id="open-cart">
                        <i class="icon-cart"></i>
                        <span class="cart-price none">99&nbsp;</span>
                        <span class="cart-item__icon-rub none web"></span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <!-- Каталог слева -->

    <!-- Наполение справа -->
    <div class="container main">
        <div class="heading-container">
            <h1>Результаты поиска:</h1>
        </div>
        <div class="row main__right">

            <?php 
                if (!$stmt->rowCount() == 0) 
        {
            while ($result = $stmt->fetch()) 
            {
            // echo "<h1>".$result['name']."</h1><p>".$result['text']."</p><br>";?>
            <div data-id="<?=$result['id'] ?>" class="products-container">
                    <!-- возможно надо col-3 или 4 -->
                    <div class="products-container__item ">
                        <div class="products-container__item-img">
                            <div class="container__in-cart" id="abbcart">
                                <div  class="in-cart__counter">
                                    <div class="minus" data-action="minus">-</div>
                                    <div class="current" data-counter>1</div>
                                    <div class="plus" data-action="plus">+</div>
                                </div>
                                <div class="in-cart_title">
                                    в корзине
                                </div>
                            </div>
                            <a href="">
                                <img class="product-img" src="<?=$result['img'] ?>" alt="<?=$result['name'] ?>">
                            </a>
                        </div>
                        <div class="productsr-container__item-desc">
                            <div class="products-container__item-top">
                                <div class="productsr-container__item-title">
                                    <a class="item-title" href=""><?=$result['name'] ?></a>
                                </div>
                            </div>
                            <div class="products-container__item-bottom">
                                <div class="products-container__item-bottom-left">
                                    <div class="price-container">
                                        <span class="price-container__value"><?=$result['price'] ?>&nbsp;
                                            <span class="price-container__icon-rub"></span>
                                        </span>
                                        <span class="price-container__span">/ <?=$result['amount'] ?></span>
                                    </div>
                                </div>
                                <div class="products-container__item-button">
                                    <a data-cart id="addCartBtn">
                                        <i data-cart class="icon-cart"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <?  
        }       
        } 
        else 
        {?>
            <div>
                <h1>Нечего не найдено</h1>
            </div>
            <?
        } ?>
        </div>
    </div>
    <!-- Футер -->
    <div class="footer">
        <div class="container">
            <div class="row col-12 foot">
                <div class="about col-4">
                    <div class="about__header">
                        <span>О НАС</span>
                    </div>
                    <div class="about__title">
                        <p>Фермерское хозяйство “Югжа-Путилово” расположено на двух участках, где построены комплексы с фермами, рассчитанными на 10 000 голов мелкого рогатого скота. </p>
                    </div>
                </div>
                <div class="navbar col-4">
                    <span>НАВИГАЦИЯ</span>
                    <ul>
                        <li><a href="" class="active">Каталог</a></li>
                        <li><a href="">О нас</a></li>
                        <li><a href="">Доставка</a></li>
                        <li><a href="">Галерея</a></li>
                    </ul>
                </div>
                <div class="contacts col-4 ">
                    <span>КОНТАКТЫ</span>
                    <div class="contacts__phone">
                        <div class="phone">
                            <i class="icon-phone"></i>
                            <a href="tel: +79206889299"> +7(920)-688-92-99 </a>
                            <p>Дмитрий Федорович</p>
                        </div>
                    </div>
                    <div class="contacts__phone">
                        <div class="phone">
                            <i class="icon-phone"></i>
                            <a href="tel: +79206889300">+7(920)-688-93-00</a>
                            <p>Татьяна Арнольдовна</p>
                        </div>
                    </div>
                    <div class="contacts__mail">
                        <i class="icon-mail"></i>
                        <a href="mailto: moloko.tver@mail.ru">moloko.tver@mail.ru</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="policy col-12">
            <a href="">Политика конфиденциальности</a> <span class="accent-color">&copy; </span> ЛПХ Возрождение, 2022
        </div>
    </div>
    <!-- Меню для мобильных устройств -->
    <div class="footer-menu">
        <a href=""><i class="icon-about"></i>
            <span>О нас</span>
        </a>
        <a href=""><i class="icon-catalog_mobil"></i>
            <span>Каталог</span>
        </a>
        <a href="" class="fix_car"><i class="icon-car_2"></i>
            <span>Доставка</span>
        </a>
        <a href="" class="fix_gallery"><i class="icon-gallery"></i>
            <span>Галерея</span>
        </a>
        <a href=""><i class="icon-cart"></i>
            <span>Корзина</span>
        </a>
    </div>
    <div  class="cart-top-fixed">
        <a id="open-cartt">
            <i class="icon-basket"></i>
        </a>
    </div>
    <!-- Корзина -->
    <div class="cart_wrapper">
        <div class="cart__window">
            <div class="cartBody">
                <div class="cart__content none">
                    <div class=" cart__header">
                        Корзина
                    </div>
                    <div class="cart__body">
                        <div class="catr__items-wrapper">

                            <!-- <div class="row cart-item" data-id="1">
                                <div class="row cart-item__info">
                                    <a class="cart-item__img" href="" >
                                        <img src="/img/яица.jfif" alt="">
                                    </a>
                                    <div class="cart-item__text">
                                        <div class="cart-item__title"> Молоко 3,8-4,5% </div>
                                        <div class="cart-item__value">
                                            99&nbsp;
                                            <span class="cart-item__icon-rub"></span>
                                            &nbsp;/&nbsp;1 л.
                                        </div>
                                    </div>
                                </div>
                                <div class="row cart-item__quantity">
                                    <div  class="cart-item__counter">
                                        <div class="cart-item__minus" data-action="minus"></div>
                                        <div class="current" data-counter>1</div>
                                        <div class="cart-item__plus" data-action="plus">+</div>
                                    </div>
                                    <div class="cart-item__price">
                                        <span>99&nbsp;
                                        <span class="cart-item__icon-rub"></span>
                                        </span>
                                    </div>
                                </div>
                                <div class="cart-item__remove">
                                    <i class="icon-basket_delit"></i>
                                </div>
                            </div> -->
                            <!-- ДОДЕЛАТЬ(Рекомендуемые записи) -->
                            <!-- <div class="cart__reco"></div> -->
                        </div>
                    </div>
                </div>
                <div class="cart__close">
                        <i id="close-cart" class="icon-close"></i>
                </div>
                <div class="cart__sidebar none">  
                    <div class="cart-sidebar__body">
                        <div class="cart-sidebar__wrap">
                             <div class="cart-sidebar__line">
                                <div class="cart-sidebar__line-text">Кол-во товара</div>
                                <div class="cart-sidebar__line-number">1</div>
                            </div>
                            <!--<div class="cart-sidebar__line">
                                <div class="cart-sidebar__line-text">Вес товара</div>
                                <div class="cart-sidebar__line-number">1 кг</div>
                            </div> -->
                            <div class="cart-sidebar__line">
                                <div class="cart-sidebar__line-text">Стоимоть продуктов</div>
                                <div class="cart-sidebar__line-number-price">
                                    <span class="all-price">0&nbsp;</span>
                                    <span class="cart-item__icon-rub"></span>
                                        
                                </div>
                            </div>
                        </div>
                        <div class="cart-sidebar__btn">Оформить заказ</div>
                    </div>
                    <div class="cart-sidebar__clear-wrapper">
                        <div data-clearAll class="cart__clear">
                        <i data-clearAll class="icon-basket_delit"></i>Очистить корзину</div>
                        <div data-clearAll class="cart__clear__for-SM">
                        <i data-clearAll class="icon-basket_delit"></i>Очистить</div>
                        </div>
                </div>
                <div class="cart-empty">
                <div class="cart-empty__total">Здесь пока пусто!</div>
                <div class="cart-empty__text">Добавьте в корзину что-нибудь.</div>
                <div id="close-cart" class="cart-empty__btn">Продолжить покупки</div>
                </div>
            </div>
        </div>
    </div>


    <script src="/js/jquery-3.6.0.min.js"></script>
    <script src="/js/main.js"></script>


</body>

</html>