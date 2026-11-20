const IM={
 "1": "assets/img/miron/pagina-01.jpg",
 "2": "assets/img/miron/pagina-02.jpg",
 "3": "assets/img/miron/pagina-03.jpg",
 "4": "assets/img/miron/pagina-04.jpg",
 "5": "assets/img/miron/pagina-05.jpg",
 "6": "assets/img/miron/pagina-06.jpg",
 "7": "assets/img/miron/pagina-07.jpg",
 "8": "assets/img/miron/pagina-08.jpg",
 "9": "assets/img/miron/pagina-09.jpg",
 "10": "assets/img/miron/pagina-10.jpg",
 "11": "assets/img/miron/pagina-11.jpg",
 "12": "assets/img/miron/pagina-12.jpg",
 "13": "assets/img/miron/pagina-13.jpg",
 "14": "assets/img/miron/pagina-14.jpg",
 "15": "assets/img/miron/pagina-15.jpg",
 "17": "assets/img/miron/pagina-17.jpg",
 "a1": "assets/img/addams/foto-01.jpg",
 "a2": "assets/img/addams/foto-02.jpg",
 "a3": "assets/img/addams/foto-03.jpg",
 "a4": "assets/img/addams/foto-04.jpg",
 "a5": "assets/img/addams/foto-05.jpg",
 "a6": "assets/img/addams/foto-06.jpg",
 "a7": "assets/img/addams/foto-07.jpg",
 "a8": "assets/img/addams/foto-08.jpg",
 "a9": "assets/img/addams/foto-09.jpg",
 "a10": "assets/img/addams/foto-10.jpg",
 "a11": "assets/img/addams/foto-11.jpg",
 "a12": "assets/img/addams/foto-12.jpg",
 "a13": "assets/img/addams/foto-13.jpg",
 "a14": "assets/img/addams/foto-14.jpg",
 "a15": "assets/img/addams/foto-15.jpg",
 "a16": "assets/img/addams/foto-16.jpg",
 "a17": "assets/img/addams/foto-17.jpg",
 "a18": "assets/img/addams/foto-18.jpg",
 "u1": "assets/img/uniplata/pantalla-1.webp",
 "u2": "assets/img/uniplata/pantalla-2.webp",
 "u3": "assets/img/uniplata/pantalla-3.webp",
 "u4": "assets/img/uniplata/pantalla-4.webp",
 "u5": "assets/img/uniplata/pantalla-5.webp",
 "u6": "assets/img/uniplata/pantalla-6.webp",
 "w1": "assets/img/uniplata/reloj-1.webp",
 "w2": "assets/img/uniplata/reloj-2.webp",
 "w3": "assets/img/uniplata/reloj-3.webp",
 "m1": "assets/img/uniplata/inicio-planes-presupuesto.webp",
 "me": "assets/img/sobre-mi.jpg"
};
const $=s=>document.querySelector(s);
document.querySelectorAll('[data-im]').forEach(e=>{e.src=IM[e.dataset.im]});
$('.band').style.backgroundImage='url('+IM[2]+')';
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;

/* video del libro */
const SEQ=[1,4,5,6,7,8,9,10,11,12,13,14,15,17],P=$('.player'),st=$('#stage'),pg=$('#pg'),ct=$('#ct'),pb=$('#pb');
const sls=[],sgs=[];let cur=0,want=!RM;
SEQ.forEach((n,i)=>{
  const s=document.createElement('div');s.className='sl';
  s.style.setProperty('--o',['25% 35%','75% 40%','50% 75%','35% 20%'][i%4]);
  if(n==1||n==17){const b=document.createElement('i');b.style.backgroundImage='url('+IM[n]+')';s.append(b)}
  const im=new Image();im.src=IM[n];im.alt='Escena '+(i+1)+' de '+SEQ.length;
  s.append(im);st.append(s);sls.push(s);
  const g=document.createElement('button');g.className='sg';g.setAttribute('aria-label','Ir a la escena '+(i+1));
  g.innerHTML='<b></b>';g.onclick=()=>go(i);pg.append(g);sgs.push(g);
});
function go(i){
  cur=(i+SEQ.length)%SEQ.length;
  sls.forEach((s,k)=>s.classList.toggle('on',k==cur));
  sgs.forEach((g,k)=>{g.classList.toggle('done',k<cur);g.classList.toggle('act',k==cur)});
  ct.textContent=(cur+1)+' / '+SEQ.length;
}
function play(on){P.classList.toggle('paused',!on);pb.textContent=on?'Pausa':'Reproducir';pb.setAttribute('aria-pressed',on)}
pg.addEventListener('animationend',e=>{if(e.target.parentNode===sgs[cur])go(cur+1)});
function toggle(){want=P.classList.contains('paused');play(want)}
pb.onclick=toggle;st.onclick=toggle;
$('#pv').onclick=()=>go(cur-1);$('#nx').onclick=()=>go(cur+1);
st.addEventListener('keydown',e=>{
  if(e.key=='ArrowRight')go(cur+1);else if(e.key=='ArrowLeft')go(cur-1);
  else if(e.key==' '){e.preventDefault();toggle()}
});
new IntersectionObserver(([e])=>{play(e.isIntersecting&&want)},{threshold:.55}).observe(st);
go(0);

/* galerías */
const lb=$('#lb'),lbi=$('#lbi');let L=[],gi=0;
function show(i){gi=(i+L.length)%L.length;lbi.src=IM[L[gi]];lbi.alt='Imagen '+(gi+1)+' de '+L.length}
function gallery(el,list){
  list.forEach(([k,c],i)=>{
    const b=document.createElement('button');b.className='gi '+c;b.setAttribute('aria-label','Ver la imagen '+(i+1)+' en grande');
    const im=new Image();im.src=IM[k];im.alt='';b.append(im);
    b.onclick=()=>{L=list.map(x=>x[0]);show(i);lb.showModal()};el.append(b);
  });
}
gallery($('#gal'),[[1,''],[17,''],[3,'s2'],[5,'s4'],[4,'s2'],[6,'s2'],[7,'s2'],[8,'s2'],[9,'s4'],[10,'s2'],[11,'s2'],[12,'s2'],[13,'s2'],[14,'s4'],[15,'s4']]);
gallery($('#pho'),[['a17','pb'],['a1',''],['a7',''],['a2',''],['a3',''],['a4','pb pr'],['a5',''],['a8',''],['a6',''],['a9',''],['a10',''],['a11',''],['a12',''],['a13',''],['a14',''],['a15',''],['a16',''],['a18','']]);
$('#lp').onclick=()=>show(gi-1);$('#ln').onclick=()=>show(gi+1);$('#lx').onclick=()=>lb.close();
lb.addEventListener('click',e=>{if(e.target===lb)lb.close()});
lb.addEventListener('keydown',e=>{if(e.key=='ArrowRight')show(gi+1);if(e.key=='ArrowLeft')show(gi-1)});
/* app: video y pantallas */
const VID='assets/video/uniplata.mp4',vid=$('#vid');
if(VID)vid.src=VID;
vid.poster=IM.u1;
gallery($('#mk'),[['m1','mk']]);
gallery($('#aps'),[['u1',''],['u2',''],['u3',''],['u4',''],['u5',''],['u6','']]);
gallery($('#wts'),[['w1',''],['w2',''],['w3','']]);
if(!RM)new IntersectionObserver(([e])=>{e.isIntersecting?vid.play().catch(()=>{}):vid.pause()},{threshold:.5}).observe(vid);
/* vistas */
const V={miron:$('#v-miron'),addams:$('#v-addams'),app:$('#v-app')},H=$('#home');
function setView(k){H.hidden=!!k;for(const n in V)V[n].hidden=n!=k}
function route(){
  const h=location.hash.slice(1);
  if(V[h]){setView(h);scrollTo({top:0,behavior:'instant'})}
  else if(h=='contacto'){$('#contacto').scrollIntoView()}
  else{setView(null);const e=h&&document.getElementById(h);e?e.scrollIntoView():scrollTo({top:0,behavior:'instant'})}
}
addEventListener('hashchange',route);route();
