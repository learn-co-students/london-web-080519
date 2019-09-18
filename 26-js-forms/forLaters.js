console.log("you provided these creds:");
const searchString = window.location.search;

const userDataArr = searchString
  .slice(1)
  .split("&")
  .map(str => {
    return str.split("=");
  });

const userObj = { username: "", password: "" };

userObj.username = userDataArr[0][1];
userObj.password = userDataArr[1][1];

console.log(userObj);
