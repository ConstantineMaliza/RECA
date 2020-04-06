

// listen auth status
auth.onAuthStateChanged(user => {
    if(user){
        console.log('user login in', user);
    }else{
        
        console.log("user logout");
        
    }
});



