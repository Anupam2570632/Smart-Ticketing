const allTicket = document.querySelectorAll('#ticket');
let ticketCount = 0;
console.log(allTicket);

for (const ticket of allTicket) {
    ticket.addEventListener('click', function () {
        ticketCount++;
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


        //give style for sold ticket
        ticket.style.backgroundColor = '#1DD100';
        ticket.style.color = 'white';
        //disable the ticket after sold
        ticket.setAttribute('disabled', "");
    })
}


