function data(){
    source.value=localStorage.getItem('so');
    destination.value=localStorage.getItem('de');
    time.value=localStorage.getItem('da');
    fares.value=localStorage.getItem('f1');
    fees.value=localStorage.getItem('f2');
    taxes.value=localStorage.getItem('f3');
    na.value=localStorage.getItem('nam');
    total.value=localStorage.getItem('price');
    seatno.value=localStorage.getItem('st');
        // localStorage.setItem('f2',s2.value);
    // localStorage.setItem('f3',s3.value);
    // localStorage.setItem('price',book.value);
}

function home(){
    window.open("homepage.html");
}

function refund(){
    window.open("refund.html");
}