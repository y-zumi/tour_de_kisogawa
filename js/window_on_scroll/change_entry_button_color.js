function change_entry_button_color_pc() {
  const aboutSection = document.getElementById("about_section");
  const entrySection = document.getElementById("entry_section");
  const entryLinkParent = document.getElementById("entry_link_parent");
  const entryLink = document.getElementById("entry_link");

  if (
    entryLinkParent.offsetTop + entryLinkParent.offsetWidth + window.scrollY >=
    entrySection.offsetTop
  ) {
    entryLink.style.boxShadow = "none";
    entryLink.style.backdropFilter = "blur(0px)";
    entryLink.style.backgroundColor = "#00000000";
  } else if (
    entryLinkParent.offsetTop + window.scrollY >=
    entrySection.offsetTop
  ) {
    entryLink.style.display = "none";
  } else {
    entryLink.style.display = "";
    entryLink.style.boxShadow = "";
    entryLink.style.backdropFilter = "";
    entryLink.style.backgroundColor = "#00000000";
  }

  let position =
    ((entryLinkParent.offsetTop +
      entryLink.offsetWidth +
      window.scrollY -
      aboutSection.offsetTop) /
      entryLink.offsetWidth) *
    100;
  let positionBottom =
    ((entryLinkParent.offsetTop +
      entryLink.offsetWidth +
      window.scrollY -
      entrySection.offsetTop) /
      entryLink.offsetWidth) *
    100;

  let linearGradient = `linear-gradient(
        270deg,
        #fff 0%,
        #fff ${100 - position}%,
        #db8855 ${100 - position}%,
        #db8855 ${100 - positionBottom}%,
        #00000000 ${100 - positionBottom}%,
        #00000000 100%
      )`;

  // グラデーションを利用してエントリーボタンの文字色とボーダ色を動的に変更;
  entryLink.style.backgroundImage = linearGradient;
  entryLink.style.borderImage = linearGradient;
  entryLink.style.borderImageSlice = 1;
}

function change_entry_button_color_sm() {
  const aboutSection = document.getElementById("about_section");
  const entrySection = document.getElementById("entry_section");
  const entryLinkParent = document.getElementById("entry_link_parent");
  const entryLink = document.getElementById("entry_link");

  if (
    entryLinkParent.offsetTop + entryLinkParent.offsetHeight + window.scrollY >=
    entrySection.offsetTop
  ) {
    entryLink.style.boxShadow = "none";
    entryLink.style.backdropFilter = "blur(0px)";
    entryLink.style.backgroundColor = "#00000000";
  } else if (
    entryLinkParent.offsetTop + window.scrollY >=
    entrySection.offsetTop
  ) {
    entryLink.style.display = "none";
  } else {
    entryLink.style.display = "";
    entryLink.style.boxShadow = "";
    entryLink.style.backdropFilter = "";
    entryLink.style.backgroundColor = "#00000000";
  }

  let position =
    ((entryLinkParent.offsetTop +
      entryLink.offsetHeight +
      window.scrollY -
      aboutSection.offsetTop) /
      entryLink.offsetHeight) *
    100;
  let positionBottom =
    ((entryLinkParent.offsetTop +
      entryLink.offsetHeight +
      window.scrollY -
      entrySection.offsetTop) /
      entryLink.offsetHeight) *
    100;

  let linearGradient = `linear-gradient(
        180deg,
        #fff 0%,
        #fff ${100 - position}%,
        #db8855 ${100 - position}%,
        #db8855 ${100 - positionBottom}%,
        #00000000 ${100 - positionBottom}%,
        #00000000 100%
      )`;

  // グラデーションを利用してエントリーボタンの文字色とボーダ色を動的に変更;
  entryLink.style.backgroundImage = linearGradient;
  entryLink.style.borderImage = linearGradient;
  entryLink.style.borderImageSlice = 1;
}
