const categoryItems = [
    { id: 0, title: "", minor: [] },
    {
        id: 1,
        title: "Аудио-техника",
        minor: ["Колонки", "Наушники", "Радиоприемник",
            "FM-модули для авто", "МР3-плееры"]
    },
    {
        id: 2,
        title: "Зарядные устройства",
        minor: ["зарядные блоки", "провода", "PowerBank"]
    },
    {
        id: 3,
        title: "Компьютерная переферия",
        minor: ["Флеш-накопители", "клавиатуры", "геймпады", "Мышки"]
    },
    {
        id: 4,
        title: "Прочее",
        minor: ["Часы", "Значки", "Телевизионные антенны",
            "ТВ-приставки", "фитнес-трекеры"]
    }
]



const resultCategory = categoryItems.map(item => {
    
    const str1 = item.minor.map(element => {
        return `<li><a href="categoryitemspag.html">${element}</a></li>`
    })

    const str = `
    <li id="${item.id}">
    <div class="title">
        <a href="categoryitemspag.html">${item.title}</a>
        ${item.id === 0 ? ` ` : `<button onclick="Uncover(this)">+</button>`}
    </div>
    <ul class="minor">
    ${str1.join('')}
    </ul>
    </li>
    `

    return str
})

function loadCategory() {

    var elem = document.getElementById("main")
    elem.innerHTML = resultCategory.join('')

}

loadCategory()

