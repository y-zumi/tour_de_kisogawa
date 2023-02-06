window.onscroll = function () {
  // PC版のみ反映
  const mediaQueryPC = window.matchMedia("only screen and (min-width: 960px)");
  if (!mediaQueryPC.matches) return;

  // 要素取得
  const aboutSection = document.getElementById("about_section");
  const hamburgerMenu = document.getElementById("hamburger_menu");

  // スクロールの下部位置がAboutセクションに差し掛かったところでハンバーガメニューの背景色を変更させる
  if (window.scrollY + window.innerHeight >= aboutSection.offsetTop) {
    // ハンバーガメニューの上部の背景色を変更するためのピクセル位置計算
    let positionTop =
      ((window.scrollY + window.innerHeight - aboutSection.offsetTop) /
        window.innerHeight) *
      100;
    // ハンバーガメニューの下部の背景色を変更するためのピクセル位置計算
    let positionBottom =
      ((window.scrollY +
        window.innerHeight -
        (aboutSection.offsetTop + aboutSection.offsetHeight)) /
        window.innerHeight) *
      100;
    // グラデーションを利用してハンバーガメニューの背景色を動的に変更
    hamburgerMenu.style.backgroundImage = `
        linear-gradient(
            180deg,
            #000 0%,
            #000 ${100 - positionTop}%,
            #fff ${100 - positionTop}%,
            #fff ${100 - positionBottom}%,
            #000 ${100 - positionBottom}%,
            #000 100%
          )`;
  }
};
