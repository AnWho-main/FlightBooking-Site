//  next page
function next(){
    window.open("payment.html");
}
// previous page
function pre(){
    window.open("passenger.html");
}

// storage value
function store(){
    tripValue.value=localStorage.getItem('price');
    nam.value=localStorage.getItem('nam');
    flightdate.value=localStorage.getItem('da');
    flightsrc.value=localStorage.getItem('so');
    flightdest.value=localStorage.getItem('de');
}
// For selection of seats
const container = document.querySelector('.seatcontainer');
let select = false;
let seat = '0';

container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat')){
        if(select === false || e.target.classList.contains('selected')){
            e.target.classList.toggle('selected');
            if(e.target.classList.contains('selected')){
                seat = e.target.getAttribute('id');
                console.log(seat);
                localStorage.setItem('st',seat);
            }
            select = !select;
        }
    }
})