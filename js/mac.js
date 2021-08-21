// get-elemented values by id 
const bestPriceCost = document.getElementById('bestprice-cost');
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const shippingCost = document.getElementById('shipping-cost');
const totalPrice = document.getElementById('total-price');
const totalCostUpdate = document.getElementById('total-cost-update');

// selection with cost
function selection(quality,price){
    const qualityCost = document.getElementById(quality + '-cost');
    qualityCost.innerText= price ;
}
// memory selection 
document.getElementById('memory-selection-8GB').addEventListener('click', function(){
    selection('memory',0);
    updateTotal();
});
document.getElementById('memory-selection-16GB').addEventListener('click', function(){
    selection('memory',180);
      updateTotal();
});

// storage selection  
document.getElementById('storage-256GB').addEventListener('click',function(){
    selection('storage',0);
    updateTotal();
});
document.getElementById('storage-512GB').addEventListener('click',function(){
    selection('storage',100);
    updateTotal();
});
document.getElementById('storage-1TB').addEventListener('click',function(){
    selection('storage',180);
    updateTotal();
});

// shipping selection 
document.getElementById('free-shipping').addEventListener('click',function(){
    selection('shipping',0);
      updateTotal();
});
document.getElementById('paid-shipping').addEventListener('click',function(){
    selection('shipping',20);
    updateTotal();
});

// total cost calculation 
function updateTotal(){
    const bestPriceField = parseInt(bestPriceCost.innerText);
    const memoryField = parseInt(memoryCost.innerText);
    const storageField = parseInt(storageCost.innerText);
    const shippingField = parseInt(shippingCost.innerText);
    const total = bestPriceField + memoryField + storageField + shippingField ;
    totalPrice.innerText = total;
    totalCostUpdate.innerText=total;
}

// chack promo-code update with total-cost
document.getElementById('promo-check-button').addEventListener('click', function(){
   const promoCheckField = document.getElementById('promo-check-input');
    const promoCheckInput = promoCheckField.value;
           //    check pro code 
    if(promoCheckInput == 'stevekaku'){
        const total = totalPrice.innerText;
        const promoPrice = (total-((total*20)/100)) ;
        totalCostUpdate.innerText=promoPrice;
       }
       else{
           console.log('please, enter correct promo code');
       }
    //    clear promo-input field 
    promoCheckField.value='';
});
