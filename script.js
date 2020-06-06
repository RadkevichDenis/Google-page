let serchInput = document.getElementById('main_input');

serchInput.addEventListener('keydown', e => {
    let url = `https://www.google.com/search?q=${serchInput.value}`;
    if (serchInput.value.length) {
        if (e.keyCode === 13) {
            window.open(url, "_self");
        }
    }
});

let cross_block = document.getElementById('cross_block');
main_input.addEventListener('input', () => {
    if (serchInput.value) {
        cross_block.style.display = 'flex';
    } else {
        cross_block.style.display = 'none';
    }
}) 

const sendReq = async () => {
    if (serchInput.value.length) {        
        let url = `https://www.google.com/search?q=${serchInput.value}`;
        window.open(url, "_self");
    } else {
        return
    }
}
const showBlock = () => {
    let menu = document.getElementById('menu');
    let blackout = document.getElementById('blackout');

    if (menu.style.display == 'block') {
        menu.style.display = 'none';
        blackout.style.display = 'none';
    } else {
        menu.style.display = 'block';  
        blackout.style.display = 'block';  
    }
}
const closeMenu = () => {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('blackout').style.display = 'none';
    
}

const cleanInput = () => {
    serchInput.value = '';
    cross_block.style.display = 'none';
}
