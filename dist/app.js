const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? '关闭导航菜单' : '打开导航菜单');
});

navigation?.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    navigation.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', '打开导航菜单');
  }
});

const bookingForm = document.querySelector('#booking-form');
const bookingStatus = bookingForm?.querySelector('.booking-status');

bookingForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!bookingForm.checkValidity()) {
    bookingForm.reportValidity();
    return;
  }

  bookingStatus.textContent = '当前为本地预览，信息尚未发送；接入预约后台后即可正式提交。';
});

bookingForm?.addEventListener('input', () => {
  bookingStatus.textContent = '';
});
