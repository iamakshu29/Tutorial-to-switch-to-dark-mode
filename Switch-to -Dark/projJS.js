let toggle = false;

let div = document.querySelector("#toggle");
let button = document.querySelector(".button-left");
let text = document.querySelector("h1");



document.querySelector("section").addEventListener("click", function () {
        if (!toggle) {
                div.classList.add("box");
                text.classList.add("heading");
                button.classList.add("button-right");

                toggle = true;
        }

        else
        {
                div.classList.remove("box");
                text.classList.remove("heading");
                button.classList.remove("button-right");

                toggle = false;
        }
})
