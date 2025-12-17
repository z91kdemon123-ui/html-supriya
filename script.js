// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function(){
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      const isOpen = nav.classList.toggle('show');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Simple contact form handler (no real submission)
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thanks! Your message was sent (demo).');
      form.reset();
    });
  }
});
