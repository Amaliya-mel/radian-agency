(function(){
  const menu=document.querySelector('.menu-button'); const nav=document.querySelector('.site-nav');
  if(menu&&nav){menu.addEventListener('click',function(){const open=nav.classList.toggle('is-open');menu.setAttribute('aria-expanded',String(open));});}
  document.querySelectorAll('[data-year]').forEach(function(el){el.textContent=new Date().getFullYear();});
  const reveal=document.querySelectorAll('[data-reveal]');
  if('IntersectionObserver' in window){const observer=new IntersectionObserver(function(entries,obs){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('is-visible');obs.unobserve(entry.target);}});},{threshold:.12});reveal.forEach(function(el){observer.observe(el);});}else{reveal.forEach(function(el){el.classList.add('is-visible');});}
  const counters=document.querySelectorAll('[data-count]');
  if('IntersectionObserver' in window){const counterObserver=new IntersectionObserver(function(entries,obs){entries.forEach(function(entry){if(!entry.isIntersecting)return;const target=Number(entry.target.dataset.count),start=performance.now();function tick(now){const progress=Math.min((now-start)/850,1);entry.target.textContent=Math.round(progress*target);if(progress<1)requestAnimationFrame(tick);}requestAnimationFrame(tick);obs.unobserve(entry.target);});},{threshold:.7});counters.forEach(function(el){counterObserver.observe(el);});}
  const filters=document.querySelectorAll('.filter'); const items=document.querySelectorAll('.work-item');
  filters.forEach(function(filter){filter.addEventListener('click',function(){filters.forEach(function(btn){btn.classList.remove('active');});filter.classList.add('active');const wanted=filter.dataset.filter;items.forEach(function(item){item.classList.toggle('is-hidden',wanted!=='all'&&item.dataset.category!==wanted);});});});
  document.querySelectorAll('[data-demo]').forEach(function(form){form.addEventListener('submit',function(event){event.preventDefault();const message=form.querySelector('.form-message');if(message)message.textContent='Thanks — your brief is ready to send. We will be in touch soon.';form.reset();});});
})();
