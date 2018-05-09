/* MyOWn Smooth Navigation  *
 * by Alex Naidovich (c)    *
 * v.0.1 2018-03-22         *
 * a lot to refactor :-)    *
 * made with love,          *
 * but provided as is :-)   */


class Nav {
    
    constructor(id) {
        this.el = document.getElementById(id);
        this.a = this.el.querySelectorAll('a'); 
        this.frames = 20;
    }
    
    navigate() {
        let el = this.el, a = this.a, frames = this.frames;
        for (let i = 0; i < a.length; i++) {
            
            a[i].addEventListener('click', e => {
                e.preventDefault();
                
                //debugger;
                
                let target = document.querySelector(a[i].getAttribute('href'));
                let targetTop = target.offsetTop;
                let currentY = window.pageYOffset;
                let step = targetTop > currentY ? (targetTop - currentY) / frames : (currentY - targetTop) / frames;
                
                let scroller = setInterval(() => {
                    targetTop > currentY ? 
                        window.scrollTo(0, window.pageYOffset + step) :
                        window.scrollTo(0, window.pageYOffset - step);
                    if (targetTop > currentY && window.pageYOffset > targetTop - 0.1 || targetTop < currentY && window.pageYOffset < targetTop + 0.1) {
                        scrollTo(0, targetTop);
                        clearInterval(scroller);
                    }
                } , 500 / frames)
            });
        }
    }
}

                       
                       