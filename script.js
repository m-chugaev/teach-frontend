const questions = [
    // -- Basics
    {
        "text": "Что происходит в браузере после перехода по url",
    },
    {
        "text": "Что такое клиент-серверная архитектура, какие особенности",
    },
    {
        "text": "Расшифруйте HTTP, какие есть актуальные версии",
    },
    {
        "text": "Какие бывают типы HTTP-запросов",
    },
    {
        "text": "Какие бывают коды состояния ответа HTTP (категории в сотнях)",
    },
    {
        "text": "Что такое CORS, зачем нужен, как избежать",
    },
    {
        "text": "Что такое REST API, примеры url",
        // https://gb.ru/blog/rest-api/
    },
    {
        "text": "Что такое GraphQL, примеры тела запроса",
    },
    {
        "text": "Что такое Cookie и зачем они используются",
        // https://habr.com/ru/articles/710578/
    },
    {
        "text": "Что такое сложность алгоритма, нотация О большое",
        // https://techrocks.ru/2021/04/02/big-o-notation-examples/
    },
    // -- CSS
    // Для 3х ниже - https://developer.mozilla.org/ru/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance
    {
        "text": "Что такое каскад в CSS, несколько примеров",
    },
    {
        "text": "Что такое специфичность в CSS, как рассчитывается, примеры расчетов",
    },
    {
        "text": "Что такое наследование в CSS, какие свойства наследуются, как контролировать",
    },
    {
        "text": "Что такое препроцессоры и постпроцессоры в CSS, перечислить основные",
    },
    {
        "text": "Для чего нужны media-запросы в CSS, как работают",
    },
    {
        "text": "Какие бывают типы позиционирования в CSS, в чём особенности",
    },
    {
        "text": "Какие бывают значения у свойства display в CSS, в чём отличия",
    },
    {
        "text": "Что такое доступность и как обеспечивается доступность в браузере (HTML)",
    },
    // -- JS
    // Часть вопросов и ответов - https://github.com/ivan-isaev21/300-questions-js/blob/main/Junior/README.MD
    {
        "text": "Что такое window и в чём отличие от document",
    },
    {
        "text": "Какие различия между let, var и const",
    },
    {
        "text": "Какие есть типы данных в JS",
    },
    {
        "text": "Какие различия между примитивными и ссылочными типами",
    },
    {
        "text": "Как работает приведение типов в JS, примеры с == и ===",
    },
    {
        "text": "Что такое область видимости в JS, несколько примеров",
    },
    {
        "text": "Что такое localStorage и в чём отличие от sessionStorage",
    },
    {
        "text": "Что такое fetch, основные options и процесс получения результата",
    },
    {
        "text": "Что такое JSON, примеры использования",
    },
    {
        "text": "Какие основные библиотеки для JS, в чём отличия",
    },
    {
        "text": "В чём отличия между библиотекой и фреймворком",
    },
    {
        "text": "Что такое менеджер пакетов, как работает npm",
    },
    // -- OOP
    // Очень кратко - https://tproger.ru/translations/oop-principles-cheatsheet
    // Чуть подробнее - https://skillbox.ru/media/code/oop_chast_1_chto_takoe_klassy_i_obekty/
    {
        "text": "Опишите базовые принципы ООП",
    },
    {
        "text": "Назовите несколько паттернов проектирования",
    },
    {
        "text": "Что такое класс и объект, в чём разница",
    },
    {
        "text": "Что такое абстрактный класс, примеры применения",
    },
    {
        "text": "Что такое интерфейс, примеры применения",
    },
    {
        "text": "Что такое DRY, как расшифровывается, пара примеров",
    },
    {
        "text": "Что такое KISS, как расшифровывается, пара примеров",
    },
    {
        "text": "Что такое SOLID, как расшифровывается, пара примеров",
    },
    {
        "text": "В чем разница между модификаторами доступа public, private и protected",
    },
    {
        "text": "Что такое конструктор класса",
    },
    {
        "text": "Что такое статические методы и свойства, чем отличаются от обычных",
    },
    // Git
    // Краткие ответы - https://hackr.io/blog/git-interview-questions
    {
        "text": "Что такое Git и в чём отличие от GitHub",
    },
    {
        "text": "Назовите некоторые наиболее часто используемые команды Git",
    },
    {
        "text": "Что такое head с точки зрения Git",
    },
    {
        "text": "Что такое конфликт с точки зрения Git и какие есть пути решения",
    },
    {
        "text": "Каким образом можно переключиться на другую ветку не делая коммит сделанных изменений",
    },
    {
        "text": "Опишите стратегию ветвления GitFlow",
    },
    // Database
    // Очень просто - https://habr.com/ru/articles/555760/
    {
        "text": "Для чего нужны базы данных, примеры популярных",
    },
    // PHP
    // Побольше вопросов - https://github.com/ivan-isaev21/250-questions-PHP/blob/master/Junior/README.MD
    {
        "text": "Базовый синтаксис PHP, как объявить переменную, функцию, класс и объект",
    },
    {
        "text": "Что такое сессия в PHP, как хранится",
    },
];

function fillQuestions() {
    const container = document.querySelector('.js-questions');
    
    if (container === undefined) {
        console.error('Ошибка! Не смогли найти элемент .js-questions на странице.');
        return;
    }

    questions.map((question) => {
        const node = document.createElement('li');
        node.textContent = question.text;
        container.appendChild(node);
    });
}

function generateRandom(count, clear) {
    const container = document.querySelector('.js-random-questions');
    
    if (container === undefined) {
        console.error('Ошибка! Не смогли найти элемент .js-random-questions на странице.');
        return;
    }

    if (clear) {
        container.innerHTML = '';
    }

    questions
        .sort(() => Math.random() - 0.5)
        .slice(0, count)
        .map((question) => {
            const node = document.createElement('li');
            node.textContent = question.text;
            container.appendChild(node);
        });

    window.scrollTo(0, document.body.scrollHeight);
}

function listenButtons() {
    const buttonAll = document.querySelector('.js-generate-random');
    const buttonOne = document.querySelector('.js-generate-random-one');
    
    if (buttonAll === undefined || buttonOne === undefined) {
        console.error('Ошибка! Не смогли найти элементы .js-generate-random на странице.');
        return;
    }

    buttonAll.addEventListener('click', () => generateRandom(5, true));
    buttonOne.addEventListener('click', () => generateRandom(1));
}

function startApp() {
    fillQuestions();
    listenButtons();
}

document.addEventListener('DOMContentLoaded', startApp);