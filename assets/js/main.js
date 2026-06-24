/* ===== CONECTA DIGITAL · main.js ===== */
(function(){
'use strict';
var RM=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function $(id){return document.getElementById(id);}

/* navbar */
var navbar=$('navbar');
var onScroll=function(){navbar.classList.toggle('scrolled',window.scrollY>30);};
window.addEventListener('scroll',onScroll,{passive:true});onScroll();

/* barra de progreso + boton volver arriba */
var sp=$('scrollProgress'),tt=$('toTop');
var onScroll2=function(){
  var h=document.documentElement;
  var scrolled=h.scrollTop/(h.scrollHeight-h.clientHeight);
  if(sp)sp.style.width=(scrolled*100)+'%';
  if(tt)tt.classList.toggle('show',h.scrollTop>500);
};
window.addEventListener('scroll',onScroll2,{passive:true});onScroll2();
if(tt)tt.addEventListener('click',function(){window.scrollTo({top:0,behavior:RM?'auto':'smooth'});});


/* menu movil */
var nt=$('navToggle'),nl=$('navLinks');
nt.addEventListener('click',function(){var o=nl.classList.toggle('open');nt.setAttribute('aria-expanded',String(o));});
nl.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){nl.classList.remove('open');nt.setAttribute('aria-expanded','false');});});

/* reveals */
var rv=document.querySelectorAll('.reveal');
if(RM){rv.forEach(function(e){e.classList.add('visible');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}});},{threshold:.14});rv.forEach(function(e){io.observe(e);});}

/* contadores */
var cs=document.querySelectorAll('.stat-num');
var ac=function(el){var t=parseInt(el.dataset.count,10);var p=el.dataset.prefix?el.dataset.prefix.replace('&lt;','<'):'';var s=el.dataset.suffix||'';if(RM){el.textContent=p+t+s;return;}var st=performance.now();(function k(n){var pr=Math.min((n-st)/1300,1);el.textContent=p+Math.round((1-Math.pow(1-pr,3))*t)+s;if(pr<1)requestAnimationFrame(k);})(st);};
var cio=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){ac(e.target);cio.unobserve(e.target);}});},{threshold:.4});
cs.forEach(function(c){cio.observe(c);});

/* particulas hero */
var cv=$('particles');
if(cv&&!RM){
  var x=cv.getContext('2d'),w,h,ns=[];
  var rs=function(){var r=cv.parentElement.getBoundingClientRect();var d=Math.min(window.devicePixelRatio||1,2);w=r.width;h=r.height;cv.width=w*d;cv.height=h*d;x.setTransform(d,0,0,d,0,0);ns=[];var c=Math.min(42,Math.floor(w/32));for(var i=0;i<c;i++)ns.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,r:Math.random()*2+1});};
  window.addEventListener('resize',rs);rs();
  (function dr(){x.clearRect(0,0,w,h);ns.forEach(function(n){n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>w)n.vx*=-1;if(n.y<0||n.y>h)n.vy*=-1;});for(var i=0;i<ns.length;i++)for(var j=i+1;j<ns.length;j++){var a=ns[i],b=ns[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<140){x.strokeStyle='rgba(20,80,200,'+(.12*(1-d/140))+')';x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke();}}x.fillStyle='rgba(0,184,230,.5)';ns.forEach(function(n){x.beginPath();x.arc(n.x,n.y,n.r,0,7);x.fill();});requestAnimationFrame(dr);})();
}

/* demo en vivo */
var codeEl=$('typedCode');
if(codeEl){
  var pv=document.querySelectorAll('.pv-el');
  var script=[
    {t:'<nav class="menu">\n  Café Aroma\n  <menu/>\n</nav>\n',el:0},
    {t:'\n<section class="hero">\n  <h1>Café de altura,\n      recién tostado</h1>\n  <p>El mejor de la zona</p>\n  <a class="btn">Ver menú</a>\n</section>\n',el:1},
    {t:'\n<div class="servicios">\n  <card>☕ Café</card>\n  <card>🥐 Pan</card>\n  <card>📶 WiFi</card>\n</div>\n\n/* Publicado ✓ SEO ✓ */',el:2}
  ];
  var run=function(){
    codeEl.textContent='';pv.forEach(function(e){e.classList.remove('on');});
    if(RM){codeEl.textContent=script.map(function(s){return s.t;}).join('');pv.forEach(function(e){e.classList.add('on');});return;}
    var si=0,ci=0;
    (function tp(){
      if(si>=script.length){setTimeout(run,6000);return;}
      var stp=script[si];codeEl.textContent+=stp.t[ci];ci++;
      if(ci>=stp.t.length){if(pv[stp.el])pv[stp.el].classList.add('on');si++;ci=0;setTimeout(tp,500);}
      else setTimeout(tp,17);
    })();
  };
  var started=false;
  var dio=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting&&!started){started=true;run();dio.disconnect();}});},{threshold:.3});
  dio.observe(codeEl.closest('.browser'));
}

/* ===== SHOWCASE DE DISEÑOS (seccion estrella) ===== */
var NICHES=[
  {id:'resto',tab:'Restaurante',badge:'Sabor Chapín',title:'Restaurante',
   desc:'Menú digital interactivo, reservación por WhatsApp y fotos que abren el apetito.',
   rec:'Recomendación recomendada',head:'Sabor Chapín · Restaurante',
   feats:['Menú con fotos que dan hambre','Reservas directas por WhatsApp','Galería del local y platillos'],
   ov:'linear-gradient(115deg,rgba(40,18,10,.86) 0%,rgba(90,40,20,.5) 45%,rgba(150,60,28,.25) 100%)'},
  {id:'clinic',tab:'Clínica',badge:'Salud Confiable',title:'Clínica',
   desc:'Transmití confianza: servicios médicos, horarios y citas en un solo clic.',
   rec:'Diseño para salud',head:'Vida Sana · Clínica',
   feats:['Agenda de citas por WhatsApp','Servicios y especialidades claras','Diseño que transmite confianza'],
   ov:'linear-gradient(115deg,rgba(8,35,60,.86) 0%,rgba(15,80,110,.5) 45%,rgba(20,120,150,.25) 100%)'},
  {id:'shop',tab:'Tienda / Moda',badge:'Estilo Visual',title:'Tienda / Moda',
   desc:'Catálogo visual con estilo para mostrar productos y vender más.',
   rec:'Diseño para comercio',head:'Boutique · Tienda & Moda',
   feats:['Catálogo de productos visual','Pedidos directos por WhatsApp','Estilo moderno y atractivo'],
   ov:'linear-gradient(115deg,rgba(55,18,42,.86) 0%,rgba(110,40,78,.5) 45%,rgba(170,65,118,.25) 100%)'},
  {id:'gym',tab:'Gimnasio',badge:'Pura Energía',title:'Gimnasio / Fitness',
   desc:'Energía que motiva: planes, horarios y comunidad que convierte visitas en socios.',
   rec:'Diseño para fitness',head:'Power Gym · Fitness',
   feats:['Planes y precios claros','Horarios de clases','Llamados a la acción potentes'],
   ov:'linear-gradient(115deg,rgba(12,15,20,.88) 0%,rgba(30,38,46,.55) 45%,rgba(50,62,72,.28) 100%)'},
  {id:'hotel',tab:'Hotel',badge:'Experiencias',title:'Hotel / Turismo',
   desc:'Elegancia que invita a reservar: galería, ubicación y experiencias.',
   rec:'Diseño para turismo',head:'Posada Real · Hotel',
   feats:['Galería de habitaciones','Reservas por WhatsApp','Mapa y experiencias cercanas'],
   ov:'linear-gradient(115deg,rgba(14,38,32,.86) 0%,rgba(28,75,60,.5) 45%,rgba(40,110,86,.25) 100%)'},
  {id:'barber',tab:'Barbería',badge:'Estilo Urbano',title:'Barbería / Estética',
   desc:'Estilo urbano con agenda por WhatsApp y antes/después que enamoran.',
   rec:'Diseño para estética',head:'Urban Cuts · Barbería',
   feats:['Agenda de turnos fácil','Galería de cortes y estilos','Imagen moderna y urbana'],
   ov:'linear-gradient(115deg,rgba(25,18,12,.88) 0%,rgba(60,44,30,.52) 45%,rgba(95,68,46,.26) 100%)'}
];
var IMG_BASE=(window.__IMG_BASE__||'assets/img/');
var track=$('scTrack');
if(track){
  var waLink=function(n){return 'https://wa.me/50244123459?text='+encodeURIComponent('Hola Manuel, me gustó el estilo para '+n+'. Quiero más información');};
  track.innerHTML=NICHES.map(function(n){
    return '<div class="sc-slide"><div class="sc-card">'+
      '<div class="sc-bg" style="background-image:url('+IMG_BASE+'photo-'+n.id+'.jpg)"></div>'+
      '<div class="sc-overlay" style="background:'+n.ov+'"></div>'+
      '<div class="sc-inner">'+
        '<div class="sc-headline"><span class="sc-badge">'+n.badge+'</span><h3>'+n.head+'</h3><p>'+n.desc+'</p></div>'+
        '<div class="sc-panel"><div class="sc-rec">'+n.rec+'</div><h4>'+n.title+'</h4>'+
        '<ul class="sc-list">'+n.feats.map(function(f){return '<li>'+f+'</li>';}).join('')+'</ul>'+
        '<a class="sc-cta" href="'+waLink(n.title)+'" target="_blank" rel="noopener">Quiero este estilo</a></div>'+
      '</div></div></div>';
  }).join('');

  var slides=NICHES.length,idx=0,timer=null;
  var tabs=document.querySelectorAll('.ntab');
  var dotsBox=$('scDots');
  dotsBox.innerHTML=NICHES.map(function(_,i){return '<button'+(i===0?' class="on"':'')+'></button>';}).join('');
  var dots=dotsBox.querySelectorAll('button');

  var go=function(n){
    idx=(n+slides)%slides;
    track.style.transform='translateX(-'+(idx*100)+'%)';
    tabs.forEach(function(t,i){t.classList.toggle('on',i===idx);});
    dots.forEach(function(d,i){d.classList.toggle('on',i===idx);});
  };
  var restart=function(){if(RM)return;clearInterval(timer);timer=setInterval(function(){go(idx+1);},4800);};

  $('scNext').addEventListener('click',function(){go(idx+1);restart();});
  $('scPrev').addEventListener('click',function(){go(idx-1);restart();});
  tabs.forEach(function(t,i){t.addEventListener('click',function(){go(i);restart();});});
  dots.forEach(function(d,i){d.addEventListener('click',function(){go(i);restart();});});

  var sc=track.closest('.showcase');
  sc.addEventListener('mouseenter',function(){clearInterval(timer);});
  sc.addEventListener('mouseleave',restart);
  sc.addEventListener('touchstart',function(){clearInterval(timer);},{passive:true});
  sc.addEventListener('touchend',restart,{passive:true});

  go(0);restart();
}
})();
