function scrolling_text_pc() {
  const text = document.getElementById("scrolling_text");
  const currentY = window.scrollY + window.innerHeight;
  const contentTop = text.offsetParent.offsetTop;
  const contentHeight = text.offsetParent.offsetHeight;

  if (currentY >= contentTop && currentY <= contentTop + contentHeight) {
    let distance = currentY - contentTop;
    let scroll = (distance / contentHeight) * 80;

    text.style.transform = `translateX(${scroll}%)`;
  }
}

function scrolling_text_sm() {
  const text = document.getElementById("scrolling_text");
  const currentY = window.scrollY + window.innerHeight;
  const contentTop = text.offsetParent.offsetTop;
  const contentHeight = text.offsetParent.offsetHeight;

  if (currentY >= contentTop && currentY <= contentTop + contentHeight) {
    let distance = currentY - contentTop;
    let scroll = (distance / contentHeight) * 100;

    text.style.transform = `translateX(${scroll}%)`;
  }
}
