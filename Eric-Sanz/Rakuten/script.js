let translateMovies = 0;
let translateMovies1 = 0;
let translateMovies2 = 0;
let translateMovies3 = 0;
let translateMovies4 = 0;
let translateCast = 0;

const scrollingRightCast = () => {
  translateCast -= 92;
  if (window.innerWidth < 1024) {
    if (translateCast === -184) {
      document.getElementsByClassName(
        "right-arrow-container"
      )[0].style.visibility = "hidden";
    }
  } else {
    if (translateCast === -92) {
      document.getElementsByClassName(
        "right-arrow-container"
      )[0].style.visibility = "hidden";
    }
  }
  document.getElementsByClassName("left-arrow-container")[0].style.visibility =
    "visible";
  document.getElementsByClassName(
    "scrollable-list"
  )[0].style.transform = `translateX(${translateCast}%)`;
};

const scrollingLeftCast = () => {
  translateCast += 92;
  translateCast = +translateCast.toFixed(4);
  if (!translateCast) {
    document.getElementsByClassName(
      "left-arrow-container"
    )[0].style.visibility = "hidden";
  }
  document.getElementsByClassName("right-arrow-container")[0].style.visibility =
    "visible";
  document.getElementsByClassName(
    "scrollable-list"
  )[0].style.transform = `translateX(${translateCast}%)`;
};

const scrollingRightMovies = () => {
  if (window.innerWidth < 1024) {
    translateMovies -= 77.1;
    if (translateMovies.toFixed(1) == -616.8) {
      console.log("entro");
      document.getElementsByClassName(
        "right-arrow-container"
      )[1].style.visibility = "hidden";
    }
  } else {
    translateMovies -= 90;
    if (translateMovies === -180) {
      document.getElementsByClassName(
        "right-arrow-container"
      )[1].style.visibility = "hidden";
    }
  }
  document.getElementsByClassName("left-arrow-container")[1].style.visibility =
    "visible";
  document.getElementsByClassName(
    "scrollable-list"
  )[1].style.transform = `translateX(${translateMovies}%)`;
};

const scrollingLeftMovies = () => {
  if (window.innerWidth < 1024) {
    translateMovies += 77.1;
    translateMovies = +translateMovies.toFixed(4);
  } else {
    translateMovies += 90;
    translateMovies = +translateMovies.toFixed(4);
  }
  if (!translateMovies) {
    document.getElementsByClassName(
      "left-arrow-container"
    )[1].style.visibility = "hidden";
  }
  document.getElementsByClassName("right-arrow-container")[1].style.visibility =
    "visible";
  document.getElementsByClassName(
    "scrollable-list"
  )[1].style.transform = `translateX(${translateMovies}%)`;
};

const scrollingRightMoviesMainPage = () => {
  translateMovies -= 40;
  if (translateMovies.toFixed(1) == -80) {
    document.getElementsByClassName(
      "right-arrow-container"
    )[0].style.visibility = "hidden";
  }
  document.getElementsByClassName("left-arrow-container")[0].style.visibility =
    "visible";
  document.getElementsByClassName(
    "scrollable-list"
  )[0].style.transform = `translateX(${translateMovies}%)`;
};

const scrollingLeftMoviesMainPage = () => {
  translateMovies += 40;
  translateMovies = +translateMovies.toFixed(4);
  if (!translateMovies) {
    document.getElementsByClassName(
      "left-arrow-container"
    )[0].style.visibility = "hidden";
  }
  document.getElementsByClassName("right-arrow-container")[0].style.visibility =
    "visible";
  document.getElementsByClassName(
    "scrollable-list"
  )[0].style.transform = `translateX(${translateMovies}%)`;
};

const scrollingRightMoviesMainPage1 = () => {
  if (window.innerWidth < 1024) {
    translateMovies1 -= 11.1;
    if (translateMovies1.toFixed(1) == -88.8) {
      document.getElementsByClassName(
        "right-arrow-container"
      )[1].style.visibility = "hidden";
    }
  } else {
    translateMovies1 -= 33.2;
    if (translateMovies1 === -66.4) {
      document.getElementsByClassName(
        "right-arrow-container"
      )[1].style.visibility = "hidden";
    }
  }
  document.getElementsByClassName("left-arrow-container")[1].style.visibility =
    "visible";
  document.getElementsByClassName(
    "scrollable-list"
  )[1].style.transform = `translateX(${translateMovies1}%)`;
};

const scrollingLeftMoviesMainPage1 = () => {
  if (window.innerWidth < 1024) {
    translateMovies1 += 11.1;
    translateMovies1 = +translateMovies1.toFixed(4);
  } else {
    translateMovies1 += 33.2;
    translateMovies1 = +translateMovies1.toFixed(4);
  }
  if (!translateMovies1) {
    document.getElementsByClassName(
      "left-arrow-container"
    )[1].style.visibility = "hidden";
  }
  document.getElementsByClassName("right-arrow-container")[1].style.visibility =
    "visible";
  document.getElementsByClassName(
    "scrollable-list"
  )[1].style.transform = `translateX(${translateMovies1}%)`;
};
const scrollingRightMoviesMainPage2 = () => {
  if (window.innerWidth < 1024) {
    translateMovies2 -= 11.1;
    if (translateMovies2.toFixed(1) == -88.8) {
      document.getElementsByClassName(
        "right-arrow-container"
      )[2].style.visibility = "hidden";
    }
  } else {
    translateMovies2 -= 33.2;
    if (translateMovies2 === -66.4) {
      document.getElementsByClassName(
        "right-arrow-container"
      )[2].style.visibility = "hidden";
    }
  }
  document.getElementsByClassName("left-arrow-container")[2].style.visibility =
    "visible";
  document.getElementsByClassName(
    "scrollable-list"
  )[2].style.transform = `translateX(${translateMovies2}%)`;
};

const scrollingLeftMoviesMainPage2 = () => {
  if (window.innerWidth < 1024) {
    translateMovies2 += 11.1;
    translateMovies2 = +translateMovies2.toFixed(4);
  } else {
    translateMovies2 += 33.2;
    translateMovies2 = +translateMovies2.toFixed(4);
  }
  if (!translateMovies2) {
    document.getElementsByClassName(
      "left-arrow-container"
    )[2].style.visibility = "hidden";
  }
  document.getElementsByClassName("right-arrow-container")[2].style.visibility =
    "visible";
  document.getElementsByClassName(
    "scrollable-list"
  )[2].style.transform = `translateX(${translateMovies2}%)`;
};
const scrollingRightMoviesMainPage3 = () => {
  if (window.innerWidth < 1024) {
    translateMovies3 -= 11.1;
    if (translateMovies3.toFixed(1) == -88.8) {
      document.getElementsByClassName(
        "right-arrow-container"
      )[3].style.visibility = "hidden";
    }
  } else {
    translateMovies3 -= 33.2;
    if (translateMovies3 === -66.4) {
      document.getElementsByClassName(
        "right-arrow-container"
      )[3].style.visibility = "hidden";
    }
  }
  document.getElementsByClassName("left-arrow-container")[3].style.visibility =
    "visible";
  document.getElementsByClassName(
    "scrollable-list"
  )[3].style.transform = `translateX(${translateMovies3}%)`;
};

const scrollingLeftMoviesMainPage3 = () => {
  if (window.innerWidth < 1024) {
    translateMovies3 += 11.1;
    translateMovies3 = +translateMovies3.toFixed(4);
  } else {
    translateMovies3 += 33.2;
    translateMovies3 = +translateMovies3.toFixed(4);
  }
  if (!translateMovies3) {
    document.getElementsByClassName(
      "left-arrow-container"
    )[3].style.visibility = "hidden";
  }
  document.getElementsByClassName("right-arrow-container")[3].style.visibility =
    "visible";
  document.getElementsByClassName(
    "scrollable-list"
  )[3].style.transform = `translateX(${translateMovies3}%)`;
};
const scrollingRightMoviesMainPage4 = () => {
  if (window.innerWidth < 1024) {
    translateMovies4 -= 19.1;
    if (translateMovies4.toFixed(1) == -76.4) {
      document.getElementsByClassName(
        "right-arrow-container"
      )[4].style.visibility = "hidden";
    }
  } else {
    translateMovies4 -= 33.2;
    if (translateMovies4 === -33.2) {
      document.getElementsByClassName(
        "right-arrow-container"
      )[4].style.visibility = "hidden";
    }
  }
  document.getElementsByClassName("left-arrow-container")[4].style.visibility =
    "visible";
  document.getElementsByClassName(
    "scrollable-list"
  )[4].style.transform = `translateX(${translateMovies4}%)`;
};

const scrollingLeftMoviesMainPage4 = () => {
  if (window.innerWidth < 1024) {
    translateMovies4 += 19.1;
    translateMovies4 = +translateMovies4.toFixed(4);
  } else {
    translateMovies4 += 33.2;
    translateMovies4 = +translateMovies4.toFixed(4);
  }
  if (!translateMovies4) {
    document.getElementsByClassName(
      "left-arrow-container"
    )[4].style.visibility = "hidden";
  }
  document.getElementsByClassName("right-arrow-container")[4].style.visibility =
    "visible";
  document.getElementsByClassName(
    "scrollable-list"
  )[4].style.transform = `translateX(${translateMovies4}%)`;
};

function couponFunction() {
  document.getElementById("coupon__button__id").style.display = "none";
  document.getElementById("coupon__call__id").style.display = "flex";
  document.getElementById("coupon__confirm__id").style.display = "block";
}

function searchNav() {
  document.getElementById("search__nav__id").style.display = "flex";
}

function videoStarter() {
  document.getElementsByClassName("play").style.display = "block";
}
