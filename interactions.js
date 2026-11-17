(()=>{
 const query = new URLSearchParams(location.search); const lang = query.get('lang')==='en'?'en':'es';
 document.documentElement.lang=lang;
 document.querySelectorAll('[data-es][data-en]').forEach(el=>el.textContent=el.getAttribute('data-'+lang));
 document.querySelectorAll('a[data-lang]').forEach(a=>a.classList.toggle('current',a.dataset.lang===lang));
 document.querySelectorAll('a[data-local]').forEach(a=>{const dest=a.getAttribute('href').split('?')[0];a.setAttribute('href',dest+(lang==='en'?'?lang=en':''));});
 document.querySelectorAll('.menu-toggle').forEach(button=>button.addEventListener('click',()=>{ const root=button.closest('.nav');const opened=root.classList.toggle('menu-open');button.setAttribute('aria-expanded',String(opened));}));
 const form=document.getElementById('contact-prototype');
 if(form)form.addEventListener('submit',e=>{e.preventDefault();form.querySelector('.form-message').textContent=lang==='en'?'Prototype only: the message was not sent.':'Prototipo: el mensaje no se ha enviado.';});
})();
