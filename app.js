// Event handler start.......

// firstClass-ticket add event handler...
const firstClassPlusButton = document.getElementById("firstClass-plusBtn");
firstClassPlusButton.addEventListener('click', function(){
    ticketBookingCalculation('firstClass', true);
});

// firstClass-ticket less event handler....
const firstClassMinusButton = document.getElementById("firstClass-minusBtn");
firstClassMinusButton.addEventListener('click', function(){
    ticketBookingCalculation('firstClass', false);
});

// economy-ticket add event handler.......
const economyPlusButton = document.getElementById("economy-plusBtn");
economyPlusButton.addEventListener('click', function(){
    ticketBookingCalculation('economy', true);
});

// economy-ticket less event handler.......
const economyMinusButton = document.getElementById("economy-minusBtn");
economyMinusButton.addEventListener('click', function(){
    ticketBookingCalculation('economy', false);
});
// event handler end.......


// Discover fly ticket booking calculation summary.......
function ticketBookingCalculation(ticket, isIncreaseTicket) {
    const ticketInput = document.getElementById(ticket + '-input');
    const ticketCount = parseInt(ticketInput.value);

    let ticketNewCount = ticketCount;
    if(isIncreaseTicket == true){
        ticketNewCount = ticketCount + 1;
    }
    if(isIncreaseTicket == false && ticketCount > 0){
        ticketNewCount = ticketCount - 1;
    };
    ticketInput.value = ticketNewCount;

    let totalTicketCost = 0;
    if(ticket == "firstClass"){
        totalTicketCost = ticketNewCount * 150;
    }
    if(ticket == "economy"){
        totalTicketCost = ticketNewCount * 100;
    };
    document.getElementById(ticket + "-price").innerText = totalTicketCost;
    calculationTotalCost();
};


// calculation total cost for ticket booking......
function calculationTotalCost() {
    const firstClassInput = document.getElementById("firstClass-input");
    const firstClassCount = parseInt(firstClassInput.value);

    const economyInput = document.getElementById("economy-input");
    const economyCount = parseInt(economyInput.value);

    const totalCost = firstClassCount * 150 + economyCount * 100;
    document.getElementById("total-cost").innerText = totalCost;

    const vat = Math.round(totalCost * .10);
    document.getElementById("vat-amount").innerText = vat;

    const grandTotalPrice = totalCost + vat;
    document.getElementById("grandTotal-cost").innerText = grandTotalPrice;
};


// booking button event handler....
const bookingButton = document.getElementById("bookingBtn");
bookingButton.addEventListener("click", function(){
    const bookingForm = document.querySelector(".booking-form");
    bookingForm.style.display = "none";
    const bookedSuccess = document.getElementById("bookedSuccess");
    bookedSuccess.style.display = "block";
    
    bookingSuccessful();
});


// Booking successful window elements..................................
function bookingSuccessful() {
    const firstClassInput = document.getElementById("firstClass-input");
    const firstClassCount = parseInt(firstClassInput.value);
    const bookingTicket = firstClassCount;
    document.getElementById("fcTicket-quantity").innerHTML = bookingTicket;
    const bookingTicketPrice = bookingTicket * 150;
    document.getElementById("fcTicket-cost").innerHTML = bookingTicketPrice;


    const economyInput = document.getElementById("economy-input");
    const economyCount = parseInt(economyInput.value);
    const bookedTicket = economyCount;
    document.getElementById("economyTicket-quantity").innerHTML = bookedTicket;
    const bookedTicketPrice = bookedTicket * 100;
    document.getElementById("economyTicket-cost").innerHTML = bookedTicketPrice;

    
    const totalCost = firstClassCount * 150 + economyCount * 100;
    const vat = Math.round(totalCost * .10);
    document.getElementById("totalVat").innerText = vat;
    const total = totalCost + vat;
    document.getElementById("totalCost").innerHTML = total;
};

