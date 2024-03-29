## Страница магазина с корзиной
### Тестовое задание 

#### Используемые технологии:
- React
- React Router
- Vite
- SCSS
- CSS Modules

- Framer Motion (От себя, захотелось посмотреть как работает)

#### В приложении имеются функции:
- Добавления товара в корзину (множественное нажатие добавляет больше товаров этого типа)
- Удаление товаров  из корзины
- Изменение количества товаров на странице корзины

## Задание
[Макет](https://www.figma.com/file/qw44OPediu3iquaSvkLtqa/Neoflex-Invite-Test-(Copy)-(Copy)?type=design&node-id=2-434&mode=design&t=vbG6m28lEBubMqeu-0)

1) Необходимо разработать используя React, React Router, две страницы интернет-магазина
аудио аксессуаров. Первая страница –каталог товаров, вторая – корзина с приобретенными
товарами; (Использование TS приветствуется). Для стилизации можете выбрать любой
подход. (css, sass, styled-components, и т.д). Компоненты желательно продумывать с
дальнейшим переиспользованием.
2) Необходимо реализовать удобный и масштабируемый роутинг;
3) Все элементы ссылок, иконок, должны отзываться при наведении на них (будет плюсом
переход на какие либо соц-сети или вызов несуществующего номера);
4) Реализовать переход с корзины обратно домой (через logo или кнопкой возврата);
5) При нажатии на «Купить» в карточке на первой странице счетчик товаров рядом с
иконкой корзины должен увеличиваться
6) При изменении количества товаров в корзине, сумма и кол-во товаров должна изменяться
7) Обязательным условием является хранение данных о каждом товаре в виде элемента массива и подстановка данных в карточки товара из полученных данных этого массива.

Для передачи информации о выбранных в корзину позиций можно использовать SessionStorage.

После выполнения обязательных 7 пунктов можете перейти к дополнительному списку
улучшений:
- Чистка кода, рефакторинг, работа над улучшением производительности; (Всегда можно сделать лучше)
- Адаптивность на все устройства; (Только под десктоп)
- Возможность удалять карточку товара из корзины товаров; (Выполнено)
- Реализовать «Переход к оформлению» на отдельную страницу с формой оплаты или
модальное окно с формой оплаты;
- Реализовать модальное окно с подробной информацией о товаре, добавить в карточку
иконку просмотра на свой выбор, которая будет открывать данное модальное окно;

