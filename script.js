let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header .navbar a');

window.onscroll =() =>{

menu.classlist.remove('fa-times') 
navbar.classlist.remove('active') 

   section.forEach(sec =>{

    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top => offset && top < offset + height)
    navLinks.forEach(link =>{
      linkss.classlist.remove('active');
      document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
    });

});

}



document.querySelector('search-icon').onclick = () =>{
    document.querySelector('search-form').classlist.toggle('active');   
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('search-form').classlist.remove('active');   
}