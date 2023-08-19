document.getElementById('btn-deposit').addEventListener('click', function(){
    //console.log('clicked')
    const quantity = document.getElementById('deposit-field');
    const mainquantityString = quantity.value
    const mainquantity = parseFloat(mainquantityString)
    //console.log(mainquantity)
    
    ///total doposit

    const totaldeposit = document.getElementById('deposit-total')
    const maintotaldepositString = totaldeposit.innerText;
    const maintotaldeposit = parseFloat(maintotaldepositString)

    

    const depositsum = mainquantity+ maintotaldeposit;
    totaldeposit.innerText = depositsum;

    
    
   //balancetotal


   const balancetotalelement = document.getElementById('balancetotal');
   const balanceTotalString = balancetotalelement.innerText;
   const balancetotal = parseFloat(balanceTotalString);
   
   const BalanceTotal = balancetotal+mainquantity;
   
   balancetotalelement.innerText = BalanceTotal;


    quantity.value = ''


    
})