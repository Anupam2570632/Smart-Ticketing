const allTicket = document.querySelectorAll('#ticket');
let ticketCount = 0;
const btnClick = [];

for (const ticket of allTicket) {
    ticket.addEventListener('click', function () {
        ticketCount++;
        btnClick.push(ticketCount);

        if (ticketCount > 4) {
            return 0;
        }



        if (ticketCount === 4) {
            document.getElementById('coupon-field').removeAttribute('disabled');
            document.getElementById('apply-button').removeAttribute('disabled');
            document.getElementById('apply-button').style.opacity = '100%';
        }


        //go to ticket list 
        const ticketList = document.getElementById('ticket-list')

        const li = document.createElement('li');

        const p = document.createElement('p');
        p.innerText = ticket.innerText;
        const p1 = document.createElement('p');
        p1.innerText = 'Economy';
        const p2 = document.createElement('p');
        p2.innerText = 550;

        li.appendChild(p);
        li.appendChild(p1);
        li.appendChild(p2);

        ticketList.appendChild(li);


        //set the left ticket and count the ticket number that is sold
        document.getElementById('seat-count').innerText = ticketCount;
        const ticketLeftTextElement = document.getElementById('ticket-left');
        const ticketLeftText = ticketLeftTextElement.innerText;
        let ticketLeft = parseInt(ticketLeftText);
        ticketLeftTextElement.innerText = ticketLeft - 1;

        //increase the total price
        const currentTotalPriceTextElement = document.getElementById('total-price');
        const currentTotalPriceText = currentTotalPriceTextElement.innerText;
        let currentTotalPrice = parseInt(currentTotalPriceText);


        currentTotalPrice += 550;

        currentTotalPriceTextElement.innerText = currentTotalPrice;



        //increase the grand total
        const grandTotalTextElement = document.getElementById('grand-total');
        grandTotalTextElement.innerText = currentTotalPrice;


        //give style for sold ticket
        ticket.style.backgroundColor = '#1DD100';
        ticket.style.color = 'white';
        //disable the ticket after sold
        ticket.setAttribute('disabled', "");


        updateButtonState();
    })
}

const phoneNumberInput = document.getElementById('phone-number');
phoneNumberInput.addEventListener('input', function () {
    updateButtonState();
});


function updateButtonState() {
    const inputNumberElement = document.getElementById('phone-number');
    const number = inputNumberElement.value;
    const nextButton = document.getElementById('next-button');

    if (number.length > 0 && btnClick.length > 0) {
        nextButton.removeAttribute('disabled');
        nextButton.style.opacity = '100%';
    } else {
        nextButton.setAttribute('disabled', 'disabled');
        nextButton.style.opacity = '50%';
    }
}

updateButtonState();



//apply button function 
function applyBonus() {
    const inputCodeElement = document.getElementById('coupon-field');
    const inputCode = inputCodeElement.value;

    //current total price
    const currentTotalPriceTextElement = document.getElementById('total-price');
    const currentTotalPriceText = currentTotalPriceTextElement.innerText;
    let currentTotalPrice = parseInt(currentTotalPriceText);

    if (inputCode === 'NEW15') {

        const discount = (currentTotalPrice * 15) / 100;
        const grandTotal = currentTotalPrice - discount;
        const grandTotalTextElement = document.getElementById('grand-total');
        grandTotalTextElement.innerText = grandTotal;


        const priceName = document.createElement('h1');
        priceName.innerText = 'Discount Price';
        const dPrice = document.createElement('p');
        dPrice.innerText = 'BDT' + discount;


        document.getElementById('bonus-panel').appendChild(priceName);
        document.getElementById('bonus-panel').appendChild(dPrice);


        document.getElementById('coupon-div').classList.add('hidden');

    }

    else if (inputCode === 'Couple 20') {

        const discount = (currentTotalPrice * 20) / 100;
        const grandTotal = currentTotalPrice - discount;
        const grandTotalTextElement = document.getElementById('grand-total');
        grandTotalTextElement.innerText = grandTotal;


        const priceName = document.createElement('h1');
        priceName.innerText = 'Discount Price';
        const dPrice = document.createElement('p');
        dPrice.innerText = 'BDT' + discount;


        document.getElementById('bonus-panel').appendChild(priceName);
        document.getElementById('bonus-panel').appendChild(dPrice);


        document.getElementById('coupon-div').classList.add('hidden');

    }

    else {
        alert('please enter the valid coupon')
    }
}




function modalPge() {
    document.getElementById('modal-page').classList.remove('hidden');
    document.getElementById('modal-page').classList.add('static');
}