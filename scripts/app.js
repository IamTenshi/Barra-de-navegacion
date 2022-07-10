const badroom = document.querySelector(".badroom");
const menu = document.querySelector(".menu");
const chevron_compact_left = document.querySelector(".bi-chevron-compact-left");
const chevron_compact_right = document.querySelector(".bi-chevron-compact-right");

badroom.addEventListener("click", ()=>{
    menu.style.transition = ".5s ease-out";
    menu.classList.toggle("active");
});

const chevron_compacts = document.querySelector(".chevron-compacts");
const contacts = document.querySelector(".contacts");

chevron_compact_right.addEventListener("click", toggleContacts);

function toggleContacts() {
    contacts.style.transition = ".25s ease-out";
    contacts.classList.toggle("contacts");
    chevron_compact_left.classList.toggle("chevron-left");
    chevron_compact_right.style.display = "none";
}

chevron_compact_left.addEventListener("click", toggleContacts2);

function toggleContacts2() {
    contacts.style.transition = ".25s ease-out";
    contacts.classList.toggle("contacts");
    chevron_compact_left.classList.toggle("chevron-left");
    chevron_compact_right.style.display = "block";
}