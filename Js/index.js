// * ====> HTML Elements##################################

var mySearch = document.querySelector("#search");
var asideLinkes = document.querySelectorAll("aside ul a");
// console.log(asideLinkes);
// ~ ====> app variables###################################
const api_key = ``;
const access_token = ``;
const api_base_url = `https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`;
const get_movies = `https://api.themoviedb.org/3/genre/movie/list`;
const base_img = `https://image.tmdb.org/t/p/w500/`;
const base_imgs = `https://api.themoviedb.org/3/movie/{movie_id}/images`;

// & ====> function ###################################

mySearch.addEventListener("keyup", function () {
  // console.log(e.target.value);
  movies(mySearch.value);
});

async function movies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`
  );
  const data = await response.json();
  print_data(data.results);
  console.log(data.results);
}
movies();

async function print_data(movies) {
  const moviescontainer = document.querySelector(`.movies-container`);
  // console.log(moviescontainer);
  moviescontainer.innerHTML = "";

  movies.map((movie) => {
    moviescontainer.innerHTML += `
      <div class="col-lg-4 col-md-6 col-sm-12 ">
           <div class="item overflow-hidden position-relative ">
               <div class="cardImage">
                   <img src="${base_img}${movie.poster_path}">
               </div>
               <div class="overlay overflow-hidden  ">
               <h4 class="title">${movie.title || movie.name}</h4>
                <p class=" desc">${movie.overview}</p>
                <p class=" date"><span class="fst-normal">Release Date<span> : ${
                  movie.release_date
                }</p>
                
                <h3 class="rate animate__animated vote">${movie.vote_average.toFixed(
                  1
                )}</h3>
               </div>
           </div>
       </div>
      `;
  });
}

// *  ######### aside nav_box ###################

const colorBoxWidth = $(".nav_Box").outerWidth();
$(".nav_Box").css({ left: `-${colorBoxWidth}px` });
let isOpen = false;

$(".gear-icon").on("click", () => {
  const colorBoxWidth = $(".nav_Box").outerWidth();
  if (isOpen) {
    // * close it
    $(".nav_Box").css({ left: `-${colorBoxWidth}px` });
    $(".gear× i").removeClass("fa-solid fa-xmark").addClass("fa-solid fa-bars");
    isOpen = false;
  } else {
    $(".nav_Box").css({ left: `0px` });
    $(" .gear× i")
      .removeClass("fa-solid fa-bars")
      .addClass("fa-solid fa-xmark");

    isOpen = true;
  }
});

// &  #########contact###################

var userName = document.getElementById("nameInput");
var userEmail = document.getElementById("emailInput");
var userPass = document.getElementById("passwordInput");
var signUpButton = document.getElementById("submitButton");
var success = document.getElementById("success");
var input = document.querySelectorAll("input");
var nameAlert = document.getElementById("nameAlert");
var emailAlert = document.getElementById("emailAlert");
var passAlert = document.getElementById("passAlert");
var userData = [];

//!events
signUpButton.addEventListener("click", signUp);

userName.addEventListener("keyup", validationName);
userEmail.addEventListener("keyup", validationEmail);
userPass.addEventListener("keyup", validationPass);
//!function
function displayData() {
  var data = {
    name: userName.value,
    email: userEmail.value,
    pass: userPass.value,
  };
  userData.push(data);
  localStorage.setItem("parsonalData", JSON.stringify(userData));
}
// console.log(displayData);

if (JSON.parse(localStorage.getItem("parsonalData") != null)) {
  userData = JSON.parse(localStorage.getItem("parsonalData"));
}

function signUp() {
  if (userName.value == "" || userEmail.value == "" || userPass.value == "") {
    inpuTempty();
  } else {
    // resetData();
    successMassage();
    checkExistMassage();
  }
}

// console.log(signUp);

function resetData() {
  for (var i = 0; i < input.length; i++) {
    input[i].value = "";
  }
}
function successMassage() {
  success.classList.remove("d-none");
  checkInput.classList.add("d-none");
  checkExist.classList.add("d-none");
}
function checkExistMassage() {
  var cond = false;
  for (var i = 0; i < userData.length; i++) {
    if (userEmail.value == userData[i].email) {
      cond = true;
      break;
    }
  }
  if (cond == true) {
    success.classList.add("d-none");
    checkInput.classList.add("d-none");
    checkExist.classList.remove("d-none");
  } else {
    displayData();
  }
}
function moveToNextPage() {
  goToLoginPage.href = "index.html";
}
function inpuTempty() {
  checkInput.classList.remove("d-none");
  success.classList.add("d-none");
  checkExist.classList.add("d-none");
}

function validationName() {
  var nameRejex = /^[A-Z][a-z/s]{2,10}$/;
  if (!nameRejex.test(userName.value)) {
    signUpButton.disabled = "true";
    userName.classList.add("is-invalid");
    userName.classList.remove("is-valid");
    nameAlert.classList.remove("d-none");
  } else {
    signUpButton.removeAttribute("disabled");
    userName.classList.remove("is-invalid");
    userName.classList.add("is-valid");
    nameAlert.classList.add("d-none");
  }
}

function validationEmail() {
  var emailRejex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!emailRejex.test(userEmail.value)) {
    signUpButton.disabled = "true";
    userEmail.classList.add("is-invalid");
    userEmail.classList.remove("is-valid");
    emailAlert.classList.remove("d-none");
  } else {
    signUpButton.removeAttribute("disabled");
    userEmail.classList.remove("is-invalid");
    userEmail.classList.add("is-valid");
    emailAlert.classList.add("d-none");
  }
}

// !validation password input

function validationPass() {
  var passRejex = /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{4,15}$/;
  if (!passRejex.test(userPass.value)) {
    signUpButton.disabled = "true";
    userPass.classList.add("is-invalid");
    userPass.classList.remove("is-valid");
    passAlert.classList.remove("d-none");
  } else {
    signUpButton.removeAttribute("disabled");
    userPass.classList.remove("is-invalid");
    userPass.classList.add("is-valid");
    passAlert.classList.add("d-none");
  }
}
