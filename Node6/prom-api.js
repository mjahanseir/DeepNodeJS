// Promise.reolve(1);
// Promise.reject(new Error(''));
// Promise.all([p1, p2]);
// Promise.race([p1, p2]);

// const p1 = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("Async operation 1...");
//     resolve(1);
//   }, 2000);
// });

async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepo(user.getHubusername);
    const commits = await getCommit(repos[0]);
    console.log(commits);
  } catch (err) {
    console.log("Error", err.message);
  }
}

displayCommits();

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 2...");
    resolve(2);
  }, 2000);
});

function getUser(id) {
  return new Promise((resolve, reject) => {
    // Kick off some async work
    setTimeout(() => {
      console.log("Reading a user from a database...");
      resolve({ id: id, gitHubUsername: "mosh" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["commit"]);
    }, 2000);
  });
}
