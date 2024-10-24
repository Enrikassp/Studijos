async function setupUserHtml() {
  const userData = await getUserInfo();
  setupUserInfos(userData.results);
}

setupUserHtml();

function setupUserInfos(userData) {
  const userArticle = document.querySelector("#userArticle");
  let userArticleHTML = userArticle.innerHTML;
  const userName = document.querySelector("#userName");
  const userImage = document.querySelector("#userImage");

  for (const data of userData) {
    for (const columnData of Object.keys(data)) {
      const value = data[columnData];

      if (typeof value !== "object") {
        userArticleHTML = userArticleHTML.replace(
          `{${columnData}}`,
          value === "female" ? "Moteris" : value === "male" ? "Vyras" : value
        );
      } else {
        switch (columnData) {
          case "name":
            userName.innerHTML = `${value.title} ${value.first} ${value.last}`;
            break;
          case "location":
            userArticleHTML = userArticleHTML.replace(
              `{location}`,
              `${value.city}, ${value.country}`
            );
            break;
          case "dob":
          case "registered":
            const formattedDate = new Date(value.date)
              .toISOString()
              .replace("T", " ")
              .substring(0, 19);
            userArticleHTML = userArticleHTML.replace(
              `{${columnData}}`,
              formattedDate
            );
            userArticleHTML = userArticleHTML.replace(
              `{${columnData}Age}`,
              `${value.age}` + (columnData === "registered" ? " metai" : "")
            );
            break;
          case "picture":
            userImage.src = value.medium;
            break;
        }
      }
    }
  }

  userArticle.innerHTML = userArticleHTML;
}
