const goodItems = [
    { img: "./img/product/1.jpeg", name: "Портативная колонка", cost: "100,00 руб." },
    { img: "./img/product/2.jpeg", name: "Портативная колонка", cost: "100,00 руб." },
    { img: "./img/product/3.jpeg", name: "Компьютерная мышь", cost: "40,00 руб." },
    { img: "./img/product/4.jpeg", name: "Компьютерная мышь", cost: "40,00 руб." },
    { img: "./img/product/5.jpeg", name: "Смарт часы", cost: "60,00 руб." },
    { img: "./img/product/6.jpeg", name: "Наушники", cost: "45,00 руб." },
    { img: "./img/product/7.jpeg", name: "Наушники", cost: "30,00 руб." },
    { img: "./img/product/8.jpeg", name: "Наушники", cost: "78,00 руб." },
    { img: "./img/product/9.jpeg", name: "Флешка", cost: "20,00 руб." }
]


let key = 0
const result = goodItems.map(item => {
    return `
    <div class="item" id="${key++}">
        <div class="image"><img src="${item.img}" alt=""></div>
        <div class="name">${item.name}</div>
        <div class="buy"><a href="itempage.html">${item.cost}</a></div>
    </div>
    ` 
})

const category = 
    `<div class="category">
        <div class="route">Главная > Категория</div>
        <div class="title">Название категории</div>
        <div class="filter">
            <div class="box"><img src="./img/ico/icons8-очистить-фильтры-100.png" /></div>
            <div class="box"><img src="./img/ico/icons8-сортировка-по-возрастанию-100.png" /></div>
            <div class="box"><img src="./img/ico/icons8-сортировка-по-убыванию-100.png" /></div>
            <div class="box"><img src="./img/ico/icons8-сортировка-по-алфавиту-2-100.png" /></div>
            <div class="box"><img src="./img/ico/icons8-сортировка-по-алфавиту-100.png" /></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
        </div>
    </div>`


function loadGoods() {
    var elem = document.getElementById("content")
    elem.innerHTML = category + result.join('')

}

loadGoods()