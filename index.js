let data = [
    {
        name: "Ansh",
        age: "21"
    },
    {
        name: "Ashwani",
        age: "21"
    },
    {
        name: "Jay",
        age: "23"
    },
    {
        name: "Mukul",
        age: "20"
    },
    {
        name: "Abhimanyu",
        age: "22"
    },
    {
        name: "Tarun",
        age: "23"
    }
]

const info = document.querySelector(".info");

const detail = data.map(function (item) {
    return "<div>" + item.name + "</div>";
});

info.innerHTML=detail.join("");


