/* ============ sticky header ================== */
window.addEventListener('scroll', e =>{
    if(this.pageYOffset > 60){
        document.querySelector('#main_nav').classList.add('sticky');
    }else{
     document.querySelector('#main_nav').classList.remove('sticky');
    }
 });
/* ============= sticky header =================== */