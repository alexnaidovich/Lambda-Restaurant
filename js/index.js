/* Markup-1 for RS-School  *
 * by Alex Naidovich (c)   *
 * finished 2018-04-01     *
 *                         *
 * made with love,         *
 * but provided as is :-)  */


let nav = new Nav("nav");
nav.navigate();

let miniNav = new Nav("mini-nav");
miniNav.navigate();

let currentHash = 0,
    currentHeight = 750;

/* Scroll Control - highlighting active NAV element
 * snippet written by me either, almost no stackoverflow used :-)
 * @param {HTMLElement} Navigation ID
 * @param {HTMLCollection} Page Sections
 */
const scrollControl = (nav, sections) => {
    let navItems = nav.querySelectorAll('a');
    for (let i = 0; i < sections.length; i++) {
        if (pageYOffset > sections[i].offsetTop - 25) {
            navItems.forEach(item => {
                item.classList.remove('active');                    
            });
            navItems[i].classList.add('active');
            currentHash = navItems[i].offsetTop;
            currentHeight = navItems[i].offsetTop + navItems[i].offsetHeight;
        }
    }
}

window.addEventListener('scroll', () => {
    if (window.pageYOffset < currentHash || window.pageYOffset > currentHeight) {
        scrollControl(document.getElementById('nav'), document.querySelectorAll('section'));
    }
});