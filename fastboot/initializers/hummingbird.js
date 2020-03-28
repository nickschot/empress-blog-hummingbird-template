export default {
  name: 'ember-mobile-menu-fastboot',
  initialize() {
    // fixes the body-scroll-lock dependency calling the below methods in fastboot
    window.addEventListener = () => {};
    window.removeEventListener = () => {};
  }
}
