console.log('Before');

getUser(1,(user)=>console.log('User : ' ,user))
console.log('After');

getRepo(user.getRepo,(r)=>console.log(r) );

function getUser(id, callback){
    setTimeout(() => {
        console.log('Reading a user from database...');
        callback({id:1, gitHubUserName:'Mo'})
    }, 2000);
}


function getRepo(username, test){
    setTimeout(()=>{
        test['repo1','repo2', 'repo3'];
    },2000);

}