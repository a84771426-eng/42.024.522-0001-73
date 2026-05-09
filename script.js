const siteConfig = {
  companyName: "W. de Jesus da Silva LTDA",
  companyDocument: "42.024.522/0001-73",
  email: "arles.contabil@gmail.com",
  phoneDisplay: "(68) 99968-1685",
  phoneRaw: "5568999681685",
  address: "Rua Hugo Carneiro 317 - Bosque - Rio Branco/AC - CEP 69900-565",
};

const bySelector = (selector) => document.querySelectorAll(selector);

function setText(selector, value) {
  bySelector(selector).forEach((element) => {
    element.textContent = value;
  });
}

function setLink(selector, href, label) {
  bySelector(selector).forEach((element) => {
    element.setAttribute("href", href);
    if (label) {
      element.textContent = label;
    }
  });
}

function applyCompanyData() {
  setText("[data-company-name]", siteConfig.companyName);
  setText("[data-company-document]", siteConfig.companyDocument);
  setText("[data-company-address]", siteConfig.address);
  setText("[data-current-year]", String(new Date().getFullYear()));

  setLink("[data-company-email]", `mailto:${siteConfig.email}`, siteConfig.email);
  setLink("[data-company-phone]", `tel:+${siteConfig.phoneRaw}`, siteConfig.phoneDisplay);
}

applyCompanyData();
const menuToggleButton = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");

if (menuToggleButton && mobileMenu) {
  menuToggleButton.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    menuToggleButton.setAttribute("aria-expanded", String(isOpen));
  });
}
