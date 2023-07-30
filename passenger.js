function store(){
    tripValue.value=localStorage.getItem('price');
};

function next(){
    var n = t2.value.concat(" "+t3.value);
localStorage.setItem('nam',n);
    window.open("seats.html");
};

function goback(){
    window.open("flight.html");
}
