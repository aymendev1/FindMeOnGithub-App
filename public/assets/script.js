/*==================== Get Default Data ====================*/
const Profile_pic = document.getElementById("profilepic");
const User_fullname = document.getElementById("user-fullname");
const Username = document.getElementById("username");
const Date_of_join = document.getElementById("dateofjoin");
const Profile_bio = document.getElementById("profilebio");
const No_repos = document.getElementById("no_repos");
const No_followers = document.getElementById("no_followers");
const No_following = document.getElementById("no_following");
const Location = document.getElementById("location");
const Tweet = document.getElementById("tweet");
const Link = document.getElementById("link");
const Org = document.getElementById("org");
const BtnSearch = document.getElementById("btn-search");

async function getDefaultData() {
  const data = await fetch("/defaultinfos");
  const user = await data.json();
  console.log(user.LoadedData.name);
  //Setting up data
  User_fullname.innerText = user.LoadedData.name;
  Username.innerText = "@" + user.LoadedData.login;
  Profile_pic.setAttribute("src", user.LoadedData.avatar_url);
  ////let's format the date of join
  const date = new Date(user.LoadedData.created_at);
  Date_of_join.innerText = "Joined " + date.toDateString();
  Profile_bio.innerText = user.LoadedData.bio;
  No_repos.innerText = user.LoadedData.public_repos;
  No_followers.innerText = user.LoadedData.followers;
  No_following.innerText = user.LoadedData.following;

  if (user.LoadedData.location === null) {
    Location.innerText = "Not Specified ";
  } else {
    Location.innerText = user.LoadedData.location;
  }

  if (user.LoadedData.twitter_username === null) {
    Tweet.innerText = "Not Specified ";
  } else {
    Tweet.innerText = user.LoadedData.twitter_username;
  }
  if (user.LoadedData.company === null) {
    Org.innerText = "Not Specified ";
  } else {
    Org.innerText = user.LoadedData.company;
  }
  if (user.LoadedData.blog === null) {
    Link.innerText = "Not Specified ";
  } else {
    Link.innerText = user.LoadedData.blog;
    Link.setAttribute("href", "https://" + user.LoadedData.blog);
  }
}

async function getData() {
  const data = await fetch("/searchedinfos");
  const user = await data.json();
  //Setting up data
  User_fullname.innerText = user.LoadedData.name;
  Username.innerText = "@" + user.LoadedData.login;
  Profile_pic.setAttribute("src", user.LoadedData.avatar_url);
  ////let's format the date of join
  const date = new Date(user.LoadedData.created_at);
  Date_of_join.innerText = "Joined " + date.toDateString();
  Profile_bio.innerText = user.LoadedData.bio;
  No_repos.innerText = user.LoadedData.public_repos;
  No_followers.innerText = user.LoadedData.followers;
  No_following.innerText = user.LoadedData.following;

  if (user.LoadedData.location === null) {
    Location.innerText = "Not Specified ";
  } else {
    Location.innerText = user.LoadedData.location;
  }

  if (user.LoadedData.twitter_username === null) {
    Tweet.innerText = "Not Specified ";
  } else {
    Tweet.innerText = user.LoadedData.twitter_username;
  }
  if (user.LoadedData.company === null) {
    Org.innerText = "Not Specified ";
  } else {
    Org.innerText = user.LoadedData.company;
  }
  if (user.LoadedData.blog === null) {
    Link.innerText = "Not Specified ";
  } else {
    Link.innerText = user.LoadedData.blog;
    Link.setAttribute("href", "https://" + user.LoadedData.blog);
  }
}

getDefaultData();

BtnSearch.addEventListener("click", () => {
  document.getElementById("u1").classList.add("non-visible");
  document.getElementById("u2").classList.add("non-visible");
  document.getElementById("load").classList.remove("non-visible");
  setTimeout(getData, 400);
  setTimeout(() => {
    document.getElementById("load").classList.add("non-visible");
    document.getElementById("u1").classList.remove("non-visible");
    document.getElementById("u2").classList.remove("non-visible");
  }, 500);
});
/*==================== DARK LIGHT THEME ====================*/
const button = document.getElementById("btn-theme");
const button_name = document.getElementById("themename");
const button_icon = document.getElementById("themeicon");
function changetheme() {
  let current_theme = document.body.classList.toString();
  const light_icon = "uil-sun";
  const dark_icon = "uil-moon";
  if (current_theme === "light") {
    document.body.classList.replace("light", "dark");
    button_icon.classList.replace(dark_icon, light_icon);
    button_name.innerText = "Light";
  } else if (current_theme === "dark") {
    document.body.classList.replace("dark", "light");
    button_name.innerText = "Dark";
    button_icon.classList.replace(light_icon, dark_icon);
  }
  console.log(current_theme);
}
button.addEventListener("click", changetheme);
