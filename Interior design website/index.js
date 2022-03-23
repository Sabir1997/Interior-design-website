const ham_var = document.querySelector('.ham_menu');
const hamburger = document.querySelector('.hamburger');

ham_open=false;
ham_var.addEventListener('click', ham_click);
function ham_click()
{
  if(!ham_open) {
    ham_var.classList.add('open');
    hamburger.classList.add('open');
    ham_open = true;
  } else {
    ham_var.classList.remove('open');
    hamburger.classList.remove('open');
    ham_open = false;
    
  }
};
function  img_change(imgchanger) {
    document.getElementById('ham_image1').src=imgchanger;

}
