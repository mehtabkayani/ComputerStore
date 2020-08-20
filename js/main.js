class Person {
    constructor() {
        this.name = 'John Banker'
        this.balance = 500
        this.pay = 0
        this.hasLoan = false

    }
}
const person = new Person();

//Get tags
let balance = document.querySelector(".balance");
let pay = document.querySelector(".pay");
let work = document.querySelector(".work");
let bank = document.querySelector(".bank");
let username = document.querySelector(".username");
let loan = document.querySelector(".loan");


//Add info into tags
balance.textContent += `${person.balance}kr`;
username.textContent += `${person.name}`;

//On clicks
work.addEventListener('click', getMoneyFromWork);
bank.addEventListener('click', getMoneyToBank);
loan.addEventListener('click', getLoan);


function getMoneyFromWork() {
    person.pay += 100;
    pay.textContent = `${person.pay}kr`
}
//Send pay money to bank i.e John Baker
function getMoneyToBank() {
    if (person.pay !== 0) {
        balance.textContent = `${person.balance += person.pay}kr`
        person.pay = 0;
        pay.textContent = `${person.pay} kr`
    }
}

//Get loan
function getLoan() {
    if (person.hasLoan === true) {
        alert("You already have a loan. You must buy a laptop before we can lend you more money!");
    } else {

        let amount = prompt("Please enter the amount you want to loan");

        let n = Number(amount);
        let total = person.balance + n;

        if (person.balance * 2 < n || n == "") {

            alert("Hello " + person.name + "! You can´t get the loan");
        } else if(person.balance >= n/2) {
            alert("You got the loan!!!");
            person.balance = total;
            balance.textContent = `${total}kr`
            person.hasLoan = true;
        }else{
            alert("Not valid input")
        }
    }

}

let computers = [
    {
        id: 1,
        name: "Intel Celeroon E10",
        description: "This laptop will turn on! It´s a basic computer",
        features: "If you want a basic computer this is the one.",
        price: 1500,
        img: "https://dustinweb.azureedge.net/image/459895/400/320/hp-250-g7-celeron-4gb-128gb-ssd-156.png"
    },
    {
        id: 2,
        name: "Lenovo Thinkpad",
        description: "Good for work enviroment!",
        features: "Good for programmers in the beginning of their career.",
        price: 2500,
        img: "https://dustinweb.azureedge.net/image/555107/400/320/lenovo-thinkpad-t480s-core-i7-8gb-256gb-ssd-14.jpg"

    },
    {
        id: 3,
        name: "Apple Macbook",
        description: "This laptop is the best! It icludes all you want in a computer",
        features: "Long lasting battery. Good if you travel alot!",
        price: 4000,
        img: "https://mresell.se/wp-content/uploads/2020/02/macbook-pro-retina-15-mid-2015-8-300x300.jpg"

    },
    {
        id: 4,
        name: "Asus",
        description: "This laptop is good for kids! It icludes all you want in a computer",
        features: "It´s Cheap, so let the kids break it!",
        price: 1000,
        img: "https://www.elgiganten.se/image/dv_web_D180001002482292/181287/asus-vivobook-156-baerbar-dator.jpg?$prod_all4one$"


    }

]

let sel = document.getElementById('mySelect');
sel.addEventListener('change', showSelectedComputer);
let opt = sel.options[sel.selectedIndex];
let buyButton = document.querySelector(".buy-button");
buyButton.addEventListener("click", buyLaptop);

function buyLaptop() {

    let priceIndex = sel.selectedIndex;
    let laptopPrice = Number(computers[priceIndex - 1].price)
    if (person.balance < laptopPrice) {
        alert("You dont have enough money to buy the laptop");
    } else {
        alert("You are now the owner of this laptop!");
        balance.textContent = `${person.balance -= laptopPrice}kr`;
        person.hasLoan = false;
    }

}

function showSelectedComputer(choise) {
    let productName = document.querySelector(".productName");
    let price = document.querySelector(".price");
    let desc = document.querySelector(".desc");
    let features = document.querySelector(".features");
    let about = document.querySelector(".about");
    let n = Number(choise.value)

    switch (n) {
        case 1:
            productName.textContent = computers[0].name
        price.textContent = `${computers[0].price}kr`
        desc.textContent = computers[0].description
        features.textContent = computers[0].features
        about.textContent = "About"
        document.querySelector(".picture").src = "https://dustinweb.azureedge.net/image/459895/400/320/hp-250-g7-celeron-4gb-128gb-ssd-156.png";
        buyButton.style.visibility = "visible";
            break;
        case 2:
            productName.textContent = computers[1].name
        price.textContent = `${computers[1].price}kr`
        desc.textContent = computers[1].description
        features.textContent = computers[1].features
        about.textContent = "About"
        document.querySelector(".picture").src = "https://dustinweb.azureedge.net/image/555107/400/320/lenovo-thinkpad-t480s-core-i7-8gb-256gb-ssd-14.jpg";
        buyButton.style.visibility = "visible";
            break;
        case 3:
            productName.textContent = computers[2].name
        price.textContent = `${computers[2].price}kr`
        desc.textContent = computers[2].description
        features.textContent = computers[2].features
        about.textContent = "About"
        document.querySelector(".picture").src = "https://mresell.se/wp-content/uploads/2020/02/macbook-pro-retina-15-mid-2015-8-300x300.jpg";
        buyButton.style.visibility = "visible";
            break;
        case 4:
            productName.textContent = computers[3].name
        price.textContent = `${computers[3].price}kr`
        desc.textContent = computers[3].description
        features.textContent = computers[3].features
        about.textContent = "About"
        document.querySelector(".picture").src = "https://www.elgiganten.se/image/dv_web_D180001002482292/181287/asus-vivobook-156-baerbar-dator.jpg?$prod_all4one$";
        buyButton.style.visibility = "visible";
            break;
        default:
        
    }

}
