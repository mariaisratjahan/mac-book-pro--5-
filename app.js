function calculatingTotalPrice(){
    const memoryCost=document.getElementById('extra-memory-cost');
    const deliveryCost=document.getElementById('extra-delivery-cost');
    const storageCost=document.getElementById('extra-storage-cost');
    const total=document.getElementById('total-price');
    const footerPrice=document.getElementById('footer-price');
    const memoryPrice=parseInt(memoryCost.innerText);
    const storagePrice= parseInt(storageCost.innerText);
    const deliveryCharge=parseInt(deliveryCost.innerText);
    const totalCost=memoryPrice+storagePrice+deliveryCharge;
    total.innerText=1299+totalCost;
    footerPrice.innerText= total.innerText;
  
}
function getDiscount(){ 
    const total=document.getElementById('total-price');
    const footerPrice=document.getElementById('footer-price');
    const discountPriceIs=total.innerText/5;
    const updatePrice=total.innerText-discountPriceIs;
    footerPrice.innerText=updatePrice;

}
//handling memory button events
document.getElementById('GB-memory-btn').addEventListener('click', function(){
   const memoryCost=document.getElementById('extra-memory-cost');
   memoryCost.innerText=0;
   calculatingTotalPrice();
    
   
 })
 document.getElementById('extraGB-meory-btn').addEventListener('click', function(){
    const memoryCost=document.getElementById('extra-memory-cost');
    memoryCost.innerText=180;
    calculatingTotalPrice();
 })
 //handling delivery button events
 document.getElementById('delivey-btn').addEventListener('click', function(){
    const deliveryCost=document.getElementById('extra-delivery-cost');
    deliveryCost.innerText=0;
    calculatingTotalPrice();
 })
 document.getElementById('fast-delibery-btn').addEventListener('click', function(){
    const deliveryCost=document.getElementById('extra-delivery-cost');
    deliveryCost.innerText=20;
    calculatingTotalPrice();
 })
//handling storage button events
document.getElementById('GB-storage-btn').addEventListener('click', function(){
    const storageCost=document.getElementById('extra-storage-cost');
    storageCost.innerText=0;
    calculatingTotalPrice();
 })
document.getElementById('extraGB-storage-btn').addEventListener('click', function(){
    const storageCost=document.getElementById('extra-storage-cost');
    storageCost.innerText=100;
    calculatingTotalPrice();
 })
document.getElementById('TB-storage-btn').addEventListener('click', function(){
    const storageCost=document.getElementById('extra-storage-cost');
    storageCost.innerText=180;
    calculatingTotalPrice();
 })
 //handling promo code events
 document.getElementById('discount-feild').addEventListener('keyup', function(event){
   getInputValue=event.target.value;
 })
 document.getElementById('submit-code').addEventListener('click', function(){
    document.getElementById('discount-feild');
    if(getInputValue == 'stevekaku'){
        getDiscount();
    }

 })