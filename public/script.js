document.body.onscroll = () => {
  const navBar = document.querySelector('#navbar');
  if (window.scrollY < 40) {
    navBar.classList.add('active-black');
  } else if (window.scrollY > 40) {
    navBar.classList.remove('active-black');
  }
};

document.querySelector('#navmenu-button').onclick = (e) => {
  e.currentTarget.classList.toggle('is-active');
  document.querySelector('#navmenu').classList.toggle('open-menu');
};
