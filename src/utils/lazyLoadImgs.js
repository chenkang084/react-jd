export default () => {
  const asyncImgs = document.getElementsByClassName("aysncMaskImg");

  const filters = [...asyncImgs].filter(img => {
    return img.dataset.load === "false";
  });
  const seeHeight = document.documentElement.clientHeight; //可见区域高度
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop; //滚动条距离顶部高度

  for (let i = 0; i < filters.length; i++) {
    if (filters[i].offsetTop < seeHeight + scrollTop) {
      if (filters[i].dataset.load === "false") {
        filters[i].dataset.load = "true";
        setTimeout(() => {
          const path = filters[i].dataset.path;
          filters[i].style.background = `url(${path})`;

          console.log(filters[i], "set src");
        }, 2000);
      }
    }
  }
};
