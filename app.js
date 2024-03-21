let C=false;
let J=false;
let K=false;
let Q=false;

function trigger_start(C, J, K, Q){
    return (!C && Q) || (!K && Q) || (C && J && !Q);
}

function change_color(object, X){
    X ? object.style = "background: #f1af07" : object.style = "background: #c5c7c8";
}

function change_btn(event, X){
    let object = event.target;
    let value = object.textContent;
    X = !Boolean(+value);
    change_color(object, X);
    object.textContent = +X;
    return X;
}

function change_outs(){
    let object_1 = document.querySelector('.Q');
    let object_2 = document.querySelector('.nQ');
    Q = trigger_start(C, J, K, Q);
    object_1.textContent = +Q;
    object_2.textContent = +!Q;
    change_color(object_1, Q);
    change_color(object_2, !Q);
    return Q;
}

const buttons = document.querySelector('.buttons');

buttons.onclick = (event) => {
    if(!event.target.classList.contains('btn')) return;
    else if(event.target.classList.contains('C')){
        C = change_btn(event, C);
    }
    else if(event.target.classList.contains('J')){
        J = change_btn(event, J);
    }
    else if(event.target.classList.contains('K')){
        K = change_btn(event, K);
    }
}

const start = document.querySelector('.start');

start.onclick = () => {
    Q = change_outs();
}