document.getElementById('btn-withdraw').addEventListener('click', function(){
    //console.log('hello')
    const withdrawtextarea = document.getElementById('withdraw-field')
    const withdrawString = withdrawtextarea.value
    const withdraw = parseFloat(withdrawString)
    console.log(withdraw)

    const TotalWithdraw = document.getElementById('withdraw-total')
    const TotalWithdrawString = TotalWithdraw.innerText
    const finaltotalwithdraw = parseFloat(TotalWithdrawString);

    console.log(finaltotalwithdraw)

   // TotalWithdraw.innerText=withdraw;

    

    const withdrawsum = withdraw+finaltotalwithdraw
     //console.log(withdrawsum)

    TotalWithdraw.innerText = withdrawsum;

    const grantwithdraw = document.getElementById('balancetotal')
    const grantwithdrawtotalString = grantwithdraw.innerText
    const grantwithdrawtotal = parseFloat(grantwithdrawtotalString)
    //console.log(grantwithdrawtotal)

    const finalgrantwithdrawtotal = grantwithdrawtotal-withdraw;

    //console.log(finalgrantwithdrawtotal);
    grantwithdraw.innerText=finalgrantwithdrawtotal;




    withdrawtextarea.value='' 





    

   




   
    
})