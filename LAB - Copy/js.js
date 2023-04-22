// SAMPLE NEST FUNCTION

// function test() {
//     var ran = document.getElementById("test");
//     if (ran.innerHTML == "Click") {
//         result();
//     }
// }

// function result() {
//     console.log("Success!");
// }

const beverageContainer = document.getElementById('beverages-container');
const breadContainer = document.getElementById('bread-container');
const cannedContainer = document.getElementById('canned-container');
const card = document.getElementsByClassName('card')

const billButton = document.getElementById('bill-confirm')
const billAmount = document.getElementById('amount')

const beveragelink = document.getElementById('beverages-link');
const breadlink = document.getElementById('bread-link');
const cannedlink = document.getElementById('canned-link');










beveragelink.addEventListener('click', function() {
    beverageContainer.classList.remove('hide-container');
    breadContainer.classList.add('hide-container');
    cannedContainer.classList.add('hide-container');
});

breadlink.addEventListener('click', function() {
    breadContainer.classList.remove('hide-container');
    beverageContainer.classList.add('hide-container');
    cannedContainer.classList.add('hide-container');
});

cannedlink.addEventListener('click', function() {
    cannedContainer.classList.remove('hide-container');
    breadContainer.classList.add('hide-container');
    beverageContainer.classList.add('hide-container');
});


for(i = 0; i < card.length; i++) {
    card[i].addEventListener('click', function() {
        this.classList.toggle('item-container')
    })
}
