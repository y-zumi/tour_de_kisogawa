function change_hamburger_color_pc() {
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
            #262222 0%,
            #262222 ${100 - positionTop}%,
            #fff ${100 - positionTop}%,
            #fff ${100 - positionBottom}%,
            #262222 ${100 - positionBottom}%,
            #262222 100%
          )`;
  }
}

function change_hamburger_color_sm() {
  const hamburgerMenu = document.getElementById("hamburger_menu");
  hamburgerMenu.style.backgroundImage = "";
}
