function calculatingCost(feild,value,isUpdated,buttonId){
    const cost=document.getElementById(feild+'-cost');
    if(isUpdated == false){
        const getCostValue=parseInt(cost.innerText);
        const setValue=cost.innerText=value;       
        
    }
    else if(isUpdated == true){
        // storage btn
        if((feild+'-cost') == 'extra-storage-cost'){
            if(buttonId == 'extraGB-storage-btn'){
                const getCostValue=parseInt(cost.innerText);
                const setValue=cost.innerText=value;
                return setValue;
            }
            else if(buttonId == 'TB-storage-btn'){
                const getCostValue=parseInt(cost.innerText);
                const setValue=cost.innerText=value;
                return setValue;
            }          
            
        }
        else{
            const getCostValue=parseInt(cost.innerText);
            const setValue=cost.innerText=value;
            return setValue;
        }        
    }
}
function calculatingTotalPrice(getValue,isIncreasing){
    const price=document.getElementById('total-price');
    const footerPrice=document.getElementById('footer-price');
    const footerPriceValue=parseInt(footerPrice.innerText);
    const priceValue=parseInt(price.innerText);
    if(isIncreasing == true){
       
        const updatePrice=priceValue+getValue;
        price.innerText=updatePrice;
        footerPrice.innerText=updatePrice;

    }
    else if(isIncreasing == false){
        const updatePrice=priceValue-getValue;
        price.innerText=updatePrice;
        footerPrice.innerText=updatePrice;
    }

}
//handling select memory button-----------------------
document.getElementById('GB-memory-btn').addEventListener('click', function(){
   const getTotalCost=calculatingCost('extra-memory',0,false);
   calculatingTotalPrice(180,false);  
  
})
document.getElementById('extraGB-meory-btn').addEventListener('click', function(){
   const getTotalCost=calculatingCost('extra-memory',180,true);
   calculatingTotalPrice(180,true);
})
//handling delivery charge button--------------------------
document.getElementById('delivey-btn').addEventListener('click', function(){
   const getTotalCost=calculatingCost('extra-delivery',0,false);
   calculatingTotalPrice(20,false);
})
document.getElementById('fast-delibery-btn').addEventListener('click', function(){
   const getTotalCost=calculatingCost('extra-delivery',20,true);
   calculatingTotalPrice(20,true);
})
//handling select storage button-----------------------------
document.getElementById('GB-storage-btn').addEventListener('click', function(){
    const getTotalCost=calculatingCost('extra-storage',0,false);
 })
document.getElementById('extraGB-storage-btn').addEventListener('click', function(){
    const getTotalCost=calculatingCost('extra-storage',100,true,'extraGB-storage-btn');
    calculatingTotalPrice(100,true);
 })
document.getElementById('TB-storage-btn').addEventListener('click', function(){
    const getTotalCost=calculatingCost('extra-storage',180,true,'TB-storage-btn');
    calculatingTotalPrice(180,true);
 })

 // handling promo code input events-------------------------------------------
document.getElementById('discount-feild').addEventListener('keyup', function(){
    const getDiscount=document.getElementById('discount-feild');
    const getValue=getDiscount.value;
 })
 //handling promo code button events------------------------
 document.getElementById('submit-code').addEventListener('click', function(){
    const getDiscount=document.getElementById('discount-feild');
    const getValue=getDiscount.value;
    const footerPrice=document.getElementById('footer-price');
    const footerPriceValue=parseInt(footerPrice.innerText);
    if(getValue == 'stevekaku'){
        const getDiscountPrice=footerPriceValue/5;
        footerPrice.innerText=getDiscountPrice;

    }
 })