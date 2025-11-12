function checkWeird(n) {
  let message = "";

  if (n % 2 !== 0) {
    message = "Weird";
  } else if (n >= 2 && n <= 5) {
    message = "Not Weird";
  } else if (n >= 6 && n <= 20) {
    message = "Weird";
  } else if (n > 20) {
    message = "Not Weird";
  }

  return {
    message: message,
    endMessage: "The End!",
  };
}

module.exports = checkWeird;
