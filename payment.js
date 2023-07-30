// for paying
function pay(){
    window.open("ticket.html");
}
// for cancel
function cancl(){
    window.open("cancel.html");
}
// for previous
function pre(){
    window.open("seats.html");
}
// for slider
const menu = document.getElementById("menu");
const mainbox = document.getElementById("trip");
const closeBtn = document.getElementById('closebtn');

mainbox.addEventListener('click' , function() {
    menu.classList.add('show-sidebar');
    document.body.classList.add('blur');
});
closeBtn.addEventListener('click', function() {
    menu.classList.remove('show-sidebar');
    document.body.classList.remove('blur');
})



// name
function store(){
    na.value=localStorage.getItem('nam');
    sa.value=localStorage.getItem('f1');
    sb.value=localStorage.getItem('f2');
    sc.value=localStorage.getItem('f3');
    slidetotal.value=localStorage.getItem('price');
    tripValue.value=localStorage.getItem('price');
    far.value=sa.value;
    cha.value=localStorage.getItem('f2');
    tax.value=localStorage.getItem('f3');
    btotal.value=localStorage.getItem('price');
    
}

// const paymentform = document.querySelector('paymentForm');
const cc = document.getElementById('creditcard');
const upi = document.getElementById('upi');
// const op1 = document.getElementById('option1');
// const op2 = doucment.getElementById('option2');

const option = document.querySelector('.option');

option.addEventListener('click', function(e) {
    if(e.target.id === 'option1'){
        cc.classList.add('show-creditcard');
        upi.classList.add('hide-upi');
        upi.classList.remove('show-upi')
        cc.classList.remove('hide-creditcard');
    } else if(e.target.id === 'option2'){
        cc.classList.add('hide-creditcard');
        cc.classList.remove('show-creditcard');
        upi.classList.add('show-upi');
        cc.classList.remove('hide-upi');
    }
})

