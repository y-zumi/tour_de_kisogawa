window.onscroll = function () {
  const mediaQueryPC = window.matchMedia("only screen and (min-width: 960px)");

  if (mediaQueryPC.matches) {
    // PC版
    change_hamburger_color_pc();
    change_entry_button_color_pc();
  } else {
    // スマホ版
    change_hamburger_color_sm();
    change_entry_button_color_sm();
  }
};
