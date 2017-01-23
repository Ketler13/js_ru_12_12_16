# js_ru_12_12_16

###HT 1: Добавить список комментов к статье, который будет открываться и закрываться по нажатию на кнопку с соответствующей надписью(тоже меняется)

###HT 2.1: Написать для всех propTypes
###HT 2.2: Вынести функционал аккордеона в декоратор
###HT 2.3: сделать возможность закрывать статью при повторном клике

###HT 3.1: Добавить https://github.com/gpbl/react-day-picker с возможностью выбора дат. Выводить этот диапазон
###HT 3.2: Добавить форму добавления коммента в CommentList

###HT 4.1: Реализовать фильтрацию статей по датам и тайтлам(если значение фильтра не выбрано - показываем все)
###HT 4.2: Посмотреть скринкаст по Flux
###HT 4.3: Познакомиться с immutable.js(https://facebook.github.io/immutable-js/docs/)

###HT 5.1: хранить комменты в виде Record
###HT 5.2: Написать мидлвару для генерации рандомных id
###HT 5.3: Сделать функционал добавления коммента к статье

###HT 6.1: при открытии списка комментов загружать комменты к статье. API: http://localhost:8080/api/comment?article=56c782f17b4e0ba78c7ad717
###HT 6.2: при повторном открытии списка НЕ загружать их заново
###HT 6.3: показывать лоадер во время загрузки комментов

###HT 7.1: Сделать роут /comments/:page для пагинации списка всех комментов
###HT 7.2: Реализовать пагинацию комментов (/api/comment?limit=5&offset=10), не загружать страницы повторно

###HT 8.1: Починить передачу юзера в контексте
###HT 8.2: Сделать локализацию с помощью контекста