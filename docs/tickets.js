
ticketitems()

function ticketitems() {
    var addToCartButtons = document.getElementsByClassName('ticketproduct')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addtickets)
    }

    document.getElementsByClassName('tickets')[0].addEventListener('click', purchaseClicked)
}


function addItemToCart(title, ticketamount, ticket) {
    var ticketshorizontal = document.createElement('div')
    ticketshorizontal.classList.add('ticketshorizontal')
    var tickets = document.getElementsByClassName('shoppingtickets')[0]
    var ticketinfo = tickets.getElementsByClassName('ticketname')
    for (var i = 0; i < ticketinfo.length; i++) {
        if (ticketinfo[i].innerText == title) {
            return
        }
    }
    var ticketsinfo = `
        <div >
            <img src="${ticket}" width="100" height="100">
            <span >${title}</span>
        </div>
        <span>${ticketamount}</span>
        <div>
            <input type="number" value="1">
            <button type="button">Change Ticket Item</button>
        </div>`
    ticketshorizontal.innerHTML = ticketsinfo
    tickets.append(ticketshorizontal)
    ticketshorizontal.getElementsByClassName('ticketsnumber')[0].addEventListener('change', ticketsnumber)
}


function purchaseClicked() {
    var tickets = document.getElementsByClassName('shoppingtickets')[0]
    while (tickets.hasChildNodes()) {
        tickets.removeChild(tickets.firstChild)
    }
    var ticketitems = document.getElementsByClassName('shoppingtickets')[0]
    var tickethorizontal = ticketitems.getElementsByClassName('ticketshorizontal')
    var overalltickets = 0
    for (var i = 0; i < tickethorizontal.length; i++) {
        var ticketshorizontal = tickethorizontal[i]
        var ticketamount = ticketshorizontal.getElementsByClassName('ticketsamount')[0]
        var ticketsnumber = ticketshorizontal.getElementsByClassName('ticketsnumber')[0]
        var ticketamount = parseFloat(ticketamount.innerText.replace('dollars', ''))
        var ticketsnumber = ticketsnumber.value
        overalltickets = overalltickets + (ticketamount * ticketsnumber)
    }
    document.getElementById('overalltickets-ticketamount')[0].innerText = overalltickets +'dollars'
}


function addtickets(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('ticketname')[0].innerText
    var ticketamount = shopItem.getElementsByClassName('ticketamount')[0].innerText
    var ticket = shopItem.getElementsByClassName('ticket')[0].src
    addItemToCart(title, ticketamount, ticket)
    var ticketitems = document.getElementsByClassName('shoppingtickets')[0]
    var tickethorizontal = ticketitems.getElementsByClassName('ticketshorizontal')
    var overalltickets = 0
    for (var i = 0; i < tickethorizontal.length; i++) {
        var ticketshorizontal = tickethorizontal[i]
        var ticketamount = ticketshorizontal.getElementsByClassName('ticketsamount')[0]
        var ticketsnumber = ticketshorizontal.getElementsByClassName('ticketsnumber')[0]
        var ticketamount = parseFloat(ticketamount.innerText.replace('$', ''))
        var ticketsnumber = ticketsnumber.value
        overalltickets = overalltickets + (ticketamount * ticketsnumber)
    }
    document.getElementById('cart-overalltickets-ticketamount').innerText = overalltickets +'dollars';
}

function ticketsnumber(event) {
    var ticketitems = document.getElementsByClassName('shoppingtickets')[0]
    var tickethorizontal = ticketitems.getElementsByClassName('ticketshorizontal')
    var overalltickets = 0
    for (var i = 0; i < tickethorizontal.length; i++) {
        var ticketshorizontal = tickethorizontal[i]
        var ticketamount = ticketshorizontal.getElementsByClassName('ticketsamount')[0]
        var ticketsnumber = ticketshorizontal.getElementsByClassName('ticketsnumber')[0]
        var ticketamount = parseFloat(ticketamount.innerText.replace('$', ''))
        var ticketsnumber = ticketsnumber.value
        overalltickets = overalltickets + (ticketamount * ticketsnumber)
    }
    document.getElementById('cart-overalltickets-ticketamount').innerText = overalltickets +'dollars'
}


