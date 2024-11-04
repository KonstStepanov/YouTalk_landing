function toggleMenu() {
    let element = document.querySelector('.header__mobile_list');
    if (element.style.display === 'none' || element.style.display === '') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }
  