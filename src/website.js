import loadMenu from "./menu.js";
import loadHome from "./home.js";
import loadContact from "./contact.js";

function createHeader() {
  const header = document.createElement("header");
  const headingText = document.createElement("h1");
  headingText.textContent = `La Pino'z Pizza`;
  header.appendChild(headingText);

  return header;
}

function createNav() {
  const navbar = document.createElement("nav");
  navbar.setAttribute("id", "main");

  const unorderList = document.createElement("ul");
  unorderList.setAttribute("id", "navList");

  const logo = document.createElement("li");
  logo.classList.add("logo");

  const linktoLogo = createAnchorTag("");
  linktoLogo.href = "https://lapinozpizza.in/";
  linktoLogo.target = "_blank";

  const logoImg = document.createElement("img");
  logoImg.src = "img/lapinoz-logo.png";
  logoImg.width = "150";
  logoImg.height = 50;
  logoImg.alt = ".Logo";
  linktoLogo.appendChild(logoImg);
  logo.appendChild(linktoLogo);

  const home = createListItems("home", "Home");
  home.classList.add("active");
  const menu = createListItems("menu", "Menu");
  const contact = createListItems("contact", "Contact Us");

  unorderList.appendChild(logo);
  unorderList.appendChild(home);
  unorderList.appendChild(menu);
  unorderList.appendChild(contact);
  navbar.appendChild(unorderList);

  let currentItem = home;
  unorderList.addEventListener("click", (event) => {
    event.preventDefault();
    const clickedItem = event.target.closest("li");
    if (!clickedItem.classList.contains("logo")) {
      if (clickedItem.classList[1] === "active") {
        clickedItem.classList.remove("active");
      } else {
        currentItem.classList.remove("active");
        clickedItem.classList.add("active");
      }
      currentItem = clickedItem;
      if (clickedItem && clickedItem.hasAttribute("data-tab")) {
        const dataTab = clickedItem.getAttribute("data-tab");
        activeTab(dataTab);
      }
    }
  });

  return navbar;
}

function createListItems(tab, content) {
  const list = document.createElement("li");
  list.classList.add(tab);
  list.setAttribute("data-tab", tab);
  list.appendChild(createAnchorTag(content));
  return list;
}

function fixNav() {
  let body = document.querySelector("body");
  let nav = document.getElementById("main");
  let topOfNav = nav.offsetTop;
  let navHeight = nav.offsetHeight;
  if (window.scrollY >= topOfNav) {
    body.style.paddingTop = navHeight + "px";
    body.classList.add("fixed-nav");
  } else {
    body.style.paddingTop = "0";
    body.classList.remove("fixed-nav");
  }
}

function createAnchorTag(content) {
  let anchor = document.createElement("a");
  anchor.href = "#";
  anchor.innerHTML = content;
  return anchor;
}

function activeTab(tab) {
  if (tab === "home") {
    loadHome();
    home.classList.add("active");
  } else if (tab === "menu") {
    loadMenu();
    menu.classList.add("active");
  } else if (tab === "contact") {
    loadContact();
    contact.classList.add("active");
  }
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("site-wrap");
  main.setAttribute("id", "mainContainer");
  return main;
}

function createfooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const copywriteText = document.createElement("p");
  copywriteText.innerHTML = `Copyright &copy; 2024 ZahinGausee`;

  const githubLink = createAnchorTag("");
  githubLink.href = "https://github.com/ZahinGausee";
  githubLink.target = "_blank";
  const githubLogo = document.createElement("img");
  githubLogo.src = "img/github.svg";
  githubLogo.alt = "Github logo";

  githubLink.appendChild(githubLogo);
  footer.appendChild(copywriteText);
  footer.appendChild(githubLink);

  return footer;
}

function LoadWebsite() {
  console.log("website");
  const content = document.querySelector("#content");
  content.appendChild(createHeader());
  content.appendChild(createNav());
  content.appendChild(createMain());
  content.appendChild(createfooter());
  window.addEventListener("scroll", fixNav);
  loadHome();
}

export default LoadWebsite;
