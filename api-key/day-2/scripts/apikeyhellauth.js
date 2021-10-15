
// Firebase Auth service interface version 8
// https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth

// sign up create new users
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get user creds
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    console.log(email, password);
    // create a new user with the above creds
    auth.createUserWithEmailAndPassword(email, password).then(() => {
        // close and clear the sign up form
        const signupModal = document.querySelector('#signup-modal');
        M.Modal.getInstance(signupModal).close();
        signupForm.reset();
    });
});

// sign in
const signinForm = document.querySelector('#signin-form');
signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get user creds
    const email = signinForm['signin-email'].value;
    const password = signinForm['signin-password'].value;
    console.log(email, password);
    // create a new user with the above creds
    auth.signInWithEmailAndPassword(email, password).then(() => {
        // close and clear the sign in form
        const signinModal = document.querySelector('#signin-modal');
        M.Modal.getInstance(signinModal).close();
        signinForm.reset();
    });
});

// sign users out
const signoutForm = document.querySelector('#signout');
signoutForm.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
});

// track auth status of a user
auth.onAuthStateChanged(user => {
    if(user){
        console.log('User signed in: ' + user);
    }else{
        console.log('No user is currently actively signed in');
    }
})

