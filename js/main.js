// Navbar start

// toggle
const navbarNav = document.querySelector(".navbar-nav");
const navbar = document.querySelector(".navbar");

// ketika hamburger-menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// klik di luar sidebar
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-btn");
const cb = document.querySelector("#cart-btn");
document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!cb.contains(e.target) && !shopCart.contains(e.target)) {
    shopCart.classList.remove("active");
  }
});

// javacript.2.0
// toggle class active for search-box
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
document.querySelector("#search-btn").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// toggle class active for cart-menu
const shopCart = document.querySelector(".shop-cart");
document.querySelector("#cart-btn").onclick = (e) => {
  shopCart.classList.toggle("active");
  e.preventDefault();
};

// ModalBox
const detailModal = document.querySelector("#item-detail-modal");
const detailBtns = document.querySelectorAll(".item-detail-btn");
detailBtns.forEach((btn) => {
  btn.onclick = (e) => {
    detailModal.style.display = "flex";
    e.preventDefault();
  };
});
// click close buton modal
document.querySelector(".modal .close").onclick = (e) => {
  detailModal.style.display = "none";
  e.preventDefault();
};
// click anyware to close the Modal Box
window.onclick = (e) => {
  if (e.target === detailModal) {
    detailModal.style.display = "none";
  }
};
