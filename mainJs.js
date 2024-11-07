if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
        console.log('Service Worker зареєстровано:', registration);
      }, function(error) {
        console.log('Помилка реєстрації Service Worker:', error);
      });
    });
  }
  


const
     inputField = document.querySelectorAll('.calculator__item-input'),
     fuelConsumed = document.querySelector('.fuel-consumed'),
     coveredDistance = document.querySelector('.covered-distance'),
     consumpitionPerHundred = document.querySelector('.consumpition-per'),
     requiredFuel = document.querySelector('.required-fuel'),
     amountMoney = document.querySelector('.amount-money'),
     fuelPrice = document.querySelector('.fuel-price'),
     plannedDistance = document.querySelector ('.planned-distance');
 
     document.addEventListener('keydown', function checkNumber(event) {
     if(!/^[0-9,]$/.test(event.key)){
        if (event.key !== "Delete" && event.key !== "Backspace" && event.key !== "."){
            event.preventDefault();
        }
     }
    });

function calculateAverageConsumption (){
    const
    oldFuel =  parseFloat(fuelConsumed.value),
    oldDistance = parseFloat(coveredDistance.value ),
    oldResult = averageConsumption(oldFuel , oldDistance) ;
    if(isNaN(oldResult)){
        consumpitionPerHundred.value= ""
       
    }else{
         consumpitionPerHundred.value = oldResult.toFixed(1) ;
    }
    

}

function averageConsumption ( num, num2,){
    return num / num2 * 100 
}
 
function showFuelForTravel(){
   const
        consPerHun = parseFloat(consumpitionPerHundred.value),
        planDist = parseFloat(plannedDistance.value),
        FuelForTravel = calcFuelForTravel(consPerHun, planDist);
        if(isNaN(FuelForTravel)){
            requiredFuel.value = ""
        }else{
                 requiredFuel.value = FuelForTravel.toFixed(1)
        }
}

function calcFuelForTravel(num1, num2){
 return num1 * num2 / 100
};

function showMoneyForTravel(){
    const 
    Fuel = parseFloat(requiredFuel.value),
    Price = parseFloat (fuelPrice.value),
    MoneyForTravel = calcMoneyForTravel (Fuel,Price);
    if (isNaN(MoneyForTravel)){
        amountMoney.value = " "
    }else{
        amountMoney.value =  MoneyForTravel
    }
}

function calcMoneyForTravel (num1, num2){
return num1 * num2
};

