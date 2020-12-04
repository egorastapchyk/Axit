const navLinkContact = document.querySelector('.navigation-link-contact');
const close = document.querySelector('body');
const popapForm = document.querySelector('.popap');
const input = document.querySelectorAll('input');
const mask = document.querySelector('.modal-mask');

navLinkContact.addEventListener('click', function () {
  popapForm.classList.remove('hide');
  mask.classList.remove('hide');
  close.classList.add('no-scroll');
});

mask.addEventListener('click', function () {
  popapForm.classList.add('hide');
  mask.classList.add('hide');
  close.classList.remove('no-scroll');
});
