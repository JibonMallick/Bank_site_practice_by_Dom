document.getElementById('btn').addEventListener('click',function(){
    //console.log('hi');
    const email = document.getElementById('email-area')
    const emailhold = email.value;
    //console.log(emailhold)
    const password = document.getElementById('password-area')
    const passwordhold = password.value;
    //console.log(passwordhold)

    if(emailhold=='jibon@gmail' && passwordhold=='1234'){
        window.location.href = 'bankstatement.html';
    }
    else{
        alert('wrong')
    }
})