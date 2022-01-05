function checkAgeCookie() {
  if (getCookie("leg_age") != "") {
    var leg_age = getCookie("leg_age");
  } else {
    var leg_age = -1;
  }
  return leg_age;
}

function redirectTo(leg_age) {
  if (leg_age > 20 && leg_age < 100) {
   
  } else if (leg_age < 21) {
    window.location.replace("./verifyLegalAgeSaveCookieJS/error.html");
  }
}
function askBirthYear() {
  document.write(
    "<div class='popup' style='background: url(https://cdn.wallpapersafari.com/81/31/Ek4YBI.jpg);width:100%;height:100%;'></div>"
  );
  var b_year = prompt("Enter your year of birth");
  return b_year;
}
function getAge(b_year) {
  if (b_year != "") {
    var today = new Date();
    var age = today.getFullYear() - b_year;
  } else {
    alert("Unable to calculate age");
  }
  return age;
}

//Setting Cookie
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//Getting Cookie
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function onLoadFunctionForAge() {
  var legalAge = checkAgeCookie();

  //Cookie is not set
  if (legalAge == -1) {
    //Ask for Birth Year
    var birthyear = askBirthYear();

    //Calculate Age
    var age = getAge(birthyear);

    //Set the Cookie
    if (age > 20 && age < 100) {
      setCookie("leg_age", age, 15);
    }

    //Decide Redirection
    redirectTo(age);
  } else {
    redirectTo(legalAge);
  }
  //setCookie("leg_age", 10, 15/(24*60*60*1000));
}
