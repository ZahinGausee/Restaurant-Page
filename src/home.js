function createHome() {
  const home = document.createElement("div");
  home.setAttribute("id", "home");
  home.classList.add("tab-content");
  home.classList.add("active");

  const AboutUs = document.createElement("h3");
  AboutUs.classList.add("aboutUs");
  AboutUs.textContent = "About Us";

  const centerImg = document.createElement("center");
  const ownerImg = document.createElement("img");
  ownerImg.src = "img/sanam-kapoor.jpg";
  ownerImg.alt = "owner image";
  centerImg.appendChild(ownerImg);

  const LinkToOrderOnline = document.createElement("a");
  LinkToOrderOnline.href = "/";
  LinkToOrderOnline.appendChild(createParagraph("Order Online or visit us!"));

  home.appendChild(AboutUs);
  home.appendChild(createParagraph("The Story of La Pino'z Pizza"));
  home.appendChild(
    createParagraph(`The story of India's fastest growing pizza place started back in 2011 when Sanam Kapoor opened his very first
  pizzeria in his hometown Chandigarh. Inspired by his own search for delicious pizza options, he started to wonder if there was a better way of doing pizza – and business. The last thing the world needed was another pizzeria, but maybe this one could be different and everyone could get exactly what they wanted, made fresh on demand. It all started sounding pretty great, and soon Sanam was opening the first La Pino'z in his hometown Chandigarh and there was no looking back. As of today, La Pino'z has 600+ outconsts across India with the recent one opening in London.`)
  );
  home.appendChild(centerImg);
  home.appendChild(LinkToOrderOnline);

  return home;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const main = document.querySelector(".site-wrap");
  main.innerHTML = "";
  main.appendChild(createHome());
  return main;
}

export default loadHome;
