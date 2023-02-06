window.onscroll = function () {
  const mediaQueryPC = window.matchMedia("only screen and (min-width: 960px)");

  if (mediaQueryPC.matches) {
    // PC版
    change_hamburger_color();
  } else {
    // スマホ版
    return;
  }
};
