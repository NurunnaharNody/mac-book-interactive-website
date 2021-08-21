// get-elemented values by id 
const bestPriceCost = document.getElementById('bestprice-cost');
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const shippingCharge = document.getElementById('shipping-charge');
const totalPrice = document.getElementById('total-price');
const totalCostUpdate = document.getElementById('total-cost-update');

// memory selection with cost
document.getElementById('memory-selection-8GB').addEventListener('click', function(){
     memoryCost.innerText='0';
    updateTotal();
});
document.getElementById('memory-selection-16GB').addEventListener('click', function(){
    memoryCost.innerText='180';
      updateTotal();
});

// storage selection with cost 
document.getElementById('storage-256GB').addEventListener('click',function(){
    storageCost.innerText='0';
    updateTotal();
});
document.getElementById('storage-512GB').addEventListener('click',function(){
    storageCost.innerText='100';
    updateTotal();
});
document.getElementById('storage-1TB').addEventListener('click',function(){
    storageCost.innerText='180';
    updateTotal();
});

// shipping selection with cost 
document.getElementById('free-shipping').addEventListener('click',function(){
      shippingCharge.innerText='0';
      updateTotal();
});
document.getElementById('paid-shipping').addEventListener('click',function(){
    shippingCharge.innerText='20';
    updateTotal();
});

// total cost calculation 
function updateTotal(){
    const bestPriceField = parseInt(bestPriceCost.innerText);
    const memoryField = parseInt(memoryCost.innerText);
    const storageField = parseInt(storageCost.innerText);
    const shippingField = parseInt(shippingCharge.innerText);
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
    //    clear promo-input field 
    promoCheckField.value='';
});
