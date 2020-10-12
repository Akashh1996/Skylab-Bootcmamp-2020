<<<<<<< HEAD
let translateMovies = 0;
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
=======
function couponFunction() {
    document.getElementById('coupon__button__id').style.display = 'none';
    document.getElementById('coupon__call__id').style.display = 'flex';
    document.getElementById('coupon__confirm__id').style.display = 'block';
}

function searchNav() {
    document.getElementById('search__nav__id').style.display = 'flex';
}

function videoStarter() {
    document.getElementsByClassName('play').style.display = 'block';
}
>>>>>>> b431499db7b400ef0a0877d81132b15319ef6a22
