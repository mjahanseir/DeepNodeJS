console.log("Before");
getUser(1, getRepositories);
console.log("After");

//  callback
//  promises
//  Async/await

function getRepositories(user) {
  getRepositories(user.gitHubUserName, getCommit);
}
function getCommit(repo) {
  getCommit(repo, displayCommit);
}
function displayCommit(commit) {
  console.log(commit);
}
function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading user from DB....");
    callback({ id: id, gitHubUserName: "Mo" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("calling GitHub API....");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
