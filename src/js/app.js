function aLink(elem){
    let menu = document.getElementById('menu');
    for (let i = 0; i<menu.children.length; i++){
        if (menu.children[i].classList.contains('active')){
            menu.children[i].classList.remove('active', 'border-bottom');
        }
    }
    elem.classList.add('active', 'border-bottom');
}