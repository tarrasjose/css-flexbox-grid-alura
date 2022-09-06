const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})
/*A vantagem do toggle é que pode ativar e desativar sem precisar em se preocupar em remover e depois ativar novamente, ele já faz tudo isso automaticamente */