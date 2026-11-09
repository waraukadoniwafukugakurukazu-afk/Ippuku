/* IPPUKU — 店舗情報はこのファイルで編集できます。
   住所を入力すると、アクセス欄にGoogleマップと地図リンクが自動で表示されます。
   実際の商品・料金は index.html の MENU / GOODS を編集してください。 */
const SHOP_INFO = {
  address: "", // 例: "福岡県北九州市〇〇区〇〇1-2-3"
  hours: "",   // 例: "12:00–22:00 / 水曜定休"
};

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("main-nav");

  const closeNav = () => {
    nav?.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
    toggle?.setAttribute("aria-label", "メニューを開く");
  };

  toggle?.addEventListener("click", () => {
    const opened = toggle.getAttribute("aria-expanded") !== "true";
    nav?.classList.toggle("is-open", opened);
    toggle.setAttribute("aria-expanded", String(opened));
    toggle.setAttribute("aria-label", opened ? "メニューを閉じる" : "メニューを開く");
  });

  nav?.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeNav();
  });

  document.addEventListener("click", event => {
    if (nav?.classList.contains("is-open") && !nav.contains(event.target) && !toggle?.contains(event.target)) {
      closeNav();
    }
  });

  window.matchMedia("(min-width: 761px)").addEventListener("change", closeNav);

  const address = SHOP_INFO.address.trim();
  const hours = SHOP_INFO.hours.trim();
  const addressElement = document.getElementById("shop-address");
  const hoursElement = document.getElementById("shop-hours");
  const mapBox = document.getElementById("map-box");
  const mapLink = document.getElementById("map-link");

  if (hours && hoursElement) {
    hoursElement.textContent = hours;
  }

  if (address && addressElement && mapBox && mapLink) {
    addressElement.textContent = address;

    const iframe = document.createElement("iframe");
    iframe.title = "一服の店舗周辺地図";
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    iframe.allowFullscreen = true;
    iframe.src = "https://www.google.com/maps?q=" + encodeURIComponent(address) + "&output=embed";

    mapBox.replaceChildren(iframe);
    mapLink.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(address);
    mapLink.target = "_blank";
    mapLink.rel = "noopener noreferrer";
    mapLink.classList.remove("is-disabled");
    mapLink.removeAttribute("aria-disabled");
    mapLink.removeAttribute("tabindex");
  }

  const yearElement = document.getElementById("current-year");
  if (yearElement) yearElement.textContent = String(new Date().getFullYear());
});