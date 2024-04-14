let sideList = document.getElementsByClassName("list")[0];
let closeList = document.getElementsByClassName('closeList')[0];
let openList = document.getElementsByClassName('openList')[0];
let mode = document.querySelector("nav .container .icons .mood .mode");
// Get the root element
let root = document.querySelector(':root');
let sunIcon = '< i class="fa-regular fa-sun fa-xl" ></ i>'


closeList.addEventListener("click", () => {
    sideList.style.right = '-100%';
});

openList.addEventListener("click", () => {
    sideList.style.right = '0';
});


mode.addEventListener("click", () => {
    if (mode.classList.contains("fa-moon")) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
    }
    else {
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon');
    }
});
