let menuToggel = document.querySelector('.menuToggel')
let navigation = document.querySelector('.navigation')

menuToggel.onclick = function (){
    menuToggel.classList.toggle('active')
    navigation.classList.toggle('active')
}


