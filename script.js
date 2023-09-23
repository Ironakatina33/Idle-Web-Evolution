
money = 0
const makemoney = document.querySelector('.make-money')
const textMoney = document.querySelector('.money')
const upgrade1 = document.querySelector('.upgrade-1')
const textautomoney = document.querySelector('.automoney')
const textclickmoney = document.querySelector('.clickmoney')
mult = 1
automoney = 0






  
  // Qui.addEventListener(Quoi, function)
    makemoney.addEventListener('click', function(){
        //le code de ma fonction
        console.log('click')
        money = money + mult

        textMoney.textContent = money + " $"

    })

    upgrade1.addEventListener('click', function(){
        if (money >= 100)
            upgrade1.style.display = 'none';
            money = money - 100
            textMoney.textContent = money + " $"
            mult = mult + 10
            automoney = automoney + 1 

    })

    setInterval(automoneyfunc, 1000)



    function automoneyfunc(){
        money = money + automoney
        textautomoney.textContent = automoney + " /s"
        textclickmoney.textContent = mult + " /click"
        textMoney.textContent = money + " $"
    }
