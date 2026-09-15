const missions=[
 {title:"À l’intérieur de la cellule",sub:"Reconnaître les structures visibles",type:"qcm",question:"Quel élément contient l’information génétique et apparaît souvent comme une zone arrondie dans la cellule ?",options:["Le noyau","Le cytoplasme","La membrane plasmique","La matrice extracellulaire"],answer:0,explain:"Le noyau contient l’essentiel de l’information génétique. La membrane délimite la cellule et le cytoplasme occupe l’espace entre les deux.",image:"illustrations/cellule-elodee-sans-texte.webp"},
 {title:"Une cellule chlorophyllienne",sub:"Lire un dessin d’observation",type:"qcm",question:"Quel élément vert, caractéristique des cellules d’Élodée observées, réalise la photosynthèse ?",options:["Le chloroplaste","Le noyau","La paroi","La membrane plasmique"],answer:0,explain:"Les grains verts sont des chloroplastes contenant de la chlorophylle. Une cellule végétale possède aussi une paroi autour de la membrane.",image:"illustrations/cellule-elodee-sans-texte.webp"},
 {title:"Cellule ou tissu ?",sub:"Changer d’échelle d’organisation",type:"qcm",question:"Quelle définition d’un tissu est la plus juste ?",options:["Un ensemble organisé de cellules associées, avec une matrice extracellulaire éventuelle","Une très grande cellule possédant plusieurs noyaux","Un groupe d’organes ayant exactement la même fonction","Un ensemble de cellules obligatoirement identiques et directement accolées"],answer:0,explain:"Un tissu est un ensemble organisé de cellules. Celles-ci peuvent être séparées ou reliées par une matrice extracellulaire.",image:null},
 {title:"Le duel des cellules",sub:"Comparer sans confondre",type:"compare",question:"Quelle proposition compare correctement une bactérie et une cellule de muqueuse buccale ?",options:["La bactérie est généralement bien plus petite et ne possède pas de noyau.","La bactérie est plus petite, mais possède un noyau plus discret.","La cellule buccale est plus petite car elle ne possède pas de paroi."],answer:0,explain:"Les bactéries sont en général bien plus petites que les cellules animales et leur ADN n’est pas enfermé dans un noyau.",image:"illustrations/bacteries-cellule-buccale-v2.webp"},
 {title:"Déroule l’échelle",sub:"Manipuler avant de calculer",type:"scale",question:"Place le segment de 15 µm au début de la cellule, puis tire sur sa poignée jusqu’à l’autre extrémité. Combien de segments entiers entrent dans sa longueur ?",options:["Entre 7 et 8 segments","Entre 5 et 6 segments","Entre 8 et 9 segments","Entre 10 et 11 segments"],answer:0,explain:"On peut placer 7 segments complets, mais pas un huitième : la longueur correspond donc à un peu plus de 7 segments et à moins de 8.",image:"illustrations/elodee-estimation-interactive.webp",scaleReal:15,segmentFraction:.077,stretch:true,subject:"cellule d’Élodée"},
 {title:"Encadre la taille",sub:"Passer des segments aux micromètres",type:"qcm",question:"Le segment représente 15 µm. La cellule contient entre 7 et 8 segments. Quel intervalle de taille réelle peux-tu prévoir ?",options:["105 µm < taille < 120 µm","7 µm < taille < 8 µm","15 µm < taille < 105 µm","120 µm < taille < 135 µm"],answer:0,explain:"7 × 15 = 105 µm et 8 × 15 = 120 µm. Le résultat précis devra obligatoirement être compris entre ces deux valeurs.",image:"illustrations/elodee-encadrement-15um.webp"},
 {title:"La taille précise",sub:"Mesurer, diviser puis multiplier",type:"calc",question:"Le dessin mesure 12,2 cm. Le segment de 15 µm mesure 1,6 cm sur ce même dessin. Calcule la taille réelle de la cellule. La valeur exacte ou sa valeur arrondie au dixième sont acceptées.",answer:114.375,roundedAnswer:114.4,drawSize:12.2,scaleDraw:1.6,scaleReal:15,explain:"12,2 ÷ 1,6 = 7,625 segments, puis 7,625 × 15 = 114,375 µm, soit environ 114,4 µm.",image:"illustrations/methode-division.webp"},
 {title:"Le sens du micromètre",sub:"Calculer un ordre de grandeur",type:"qcm",question:"Dix feuilles empilées mesurent environ 1 mm, soit 1 000 µm. Combien de cellules de 114,4 µm faudrait-il aligner pour atteindre environ 1 mm ?",options:["Environ 8,7 cellules","Environ 1,1 cellule","Environ 11,4 cellules","Environ 87 cellules"],answer:0,explain:"1 000 ÷ 114,4 ≈ 8,7. Il faudrait donc presque 9 cellules alignées pour atteindre 1 mm.",image:"illustrations/repere-micrometre.webp"},
 {title:"Une échelle plus grande",sub:"Comparer avant de calculer",type:"scale",question:"Glisse le segment de 2 µm le long de la bactérie. Que peux-tu conclure ?",options:["La bactérie est plus petite que le segment, mais dépasse sa moitié","La bactérie contient entre 1 et 2 segments entiers","La bactérie est exactement deux fois plus longue que le segment","La bactérie est plus petite que la moitié du segment"],answer:0,explain:"Le segment entier est plus long que la bactérie, mais sa moitié est plus courte : la bactérie mesure donc entre 0,5 et 1 segment.",image:"illustrations/bacterie-mesure.webp",scaleReal:2,segmentFraction:.60,stretch:false,subject:"bactérie"},
 {title:"Encadre la bactérie",sub:"Passer aux micromètres",type:"qcm",question:"La bactérie mesure entre 0,5 et 1 segment, et un segment représente 2 µm. Quel est son intervalle de taille ?",options:["1 µm < taille < 2 µm","0,5 µm < taille < 1 µm","2 µm < taille < 4 µm","0 µm < taille < 0,5 µm"],answer:0,explain:"0,5 × 2 = 1 µm et 1 × 2 = 2 µm. La bactérie mesure donc entre 1 et 2 µm."},
 {title:"La taille de la bactérie",sub:"Appliquer la méthode complète",type:"calc",question:"Sur le document, la bactérie mesure 3,5 cm et le segment représentant 2 µm mesure 5 cm. Calcule la taille réelle de la bactérie. La valeur exacte ou son arrondi au dixième sont acceptés.",answer:1.4,roundedAnswer:1.4,drawSize:3.5,scaleDraw:5,scaleReal:2,explain:"3,5 ÷ 5 = 0,7 segment, puis 0,7 × 2 = 1,4 µm. Le résultat appartient bien à l’intervalle prévu entre 1 et 2 µm.",image:"illustrations/bacterie-mesure.webp"}
];
let current=0,score=0,locked=false,currentAnswer=0,inAppDismissed=false;
const $=s=>document.querySelector(s), screens=["#homeScreen","#gameScreen","#resultScreen"];
function isHandheld(){
  return navigator.maxTouchPoints>0
    || window.matchMedia("(pointer: coarse)").matches
    || /Mobi|Android|iPhone|iPad|iPod|SamsungBrowser|Mobile/i.test(navigator.userAgent);
}
function isInAppBrowser(){
  const ua=navigator.userAgent||"";
  const ref=document.referrer||"";
  return /FBAN|FBAV|FB_IAB|FB4A|FBIOS|FBSS|Instagram|Line\/|Twitter|TikTok|Bytedance|musical_ly|Snapchat|Messenger|WhatsApp|LinkedInApp|Pinterest|MicroMessenger/i.test(ua)
    || /facebook\.com|instagram\.com|l\.facebook\.com|lm\.facebook\.com/i.test(ref)
    || document.documentElement.classList.contains("in-app");
}
function fullscreenLikely(){
  if(isInAppBrowser()) return false;
  if(/iPhone|iPod/.test(navigator.userAgent)) return false;
  return !!(document.documentElement.requestFullscreen||document.documentElement.webkitRequestFullscreen);
}
function fitLayout(){
  const h=Math.round(window.visualViewport?visualViewport.height:window.innerHeight);
  const w=Math.round(window.visualViewport?visualViewport.width:window.innerWidth);
  const handheld=isHandheld();
  const portrait=h>w;
  const compact=h<=520;
  document.documentElement.style.setProperty("--vh",h+"px");
  document.documentElement.classList.toggle("handheld",handheld);
  document.documentElement.classList.toggle("portrait",portrait);
  document.documentElement.classList.toggle("landscape",!portrait);
  document.documentElement.classList.toggle("compact",compact);
  const inApp=isInAppBrowser();
  document.documentElement.classList.toggle("in-app",inApp);
  const fullscreen=!!(document.fullscreenElement||document.webkitFullscreenElement);
  document.documentElement.classList.toggle("is-fullscreen",fullscreen);
  const overlay=$("#rotateOverlay");
  if(overlay){
    const showRotate=handheld&&portrait&&!inApp;
    overlay.classList.toggle("show",showRotate);
    overlay.setAttribute("aria-hidden",showRotate?"false":"true");
    overlay.inert=!showRotate;
    document.body.classList.toggle("locked-portrait",showRotate);
  }
  const gate=$("#fsGate");
  if(gate){
    const showGate=!inApp&&handheld&&!portrait&&!fullscreen&&!document.documentElement.classList.contains("fs-tried")&&fullscreenLikely();
    gate.classList.toggle("show",showGate);
    gate.setAttribute("aria-hidden",showGate?"false":"true");
    gate.inert=!showGate;
  }
  const browserGate=$("#browserGate");
  if(browserGate){
    let dismissed=inAppDismissed;
    try{dismissed=dismissed||sessionStorage.getItem("celluloscope-inapp")==="1";}catch(_){}
    const showBrowser=inApp&&!dismissed;
    browserGate.classList.toggle("show",showBrowser);
    browserGate.setAttribute("aria-hidden",showBrowser?"false":"true");
    browserGate.inert=!showBrowser;
  }
}
async function enterImmersive(){
  if(!isHandheld()||isInAppBrowser())return;
  const root=document.documentElement;
  const withTimeout=(p,ms=450)=>Promise.race([Promise.resolve(p).catch(()=>{}),new Promise(r=>setTimeout(r,ms))]);
  const req=root.requestFullscreen||root.webkitRequestFullscreen;
  if(req&&!document.fullscreenElement&&!document.webkitFullscreenElement){
    await withTimeout(req.call(root,{navigationUI:"hide"}));
  }
  try{
    if(screen.orientation&&screen.orientation.lock) await withTimeout(screen.orientation.lock("landscape"));
  }catch(_){}
  document.documentElement.classList.add("fs-tried");
  fitLayout();
}
function show(id){
  screens.forEach(s=>$(s).classList.toggle("active",s===id));
  $("#hud").classList.toggle("hidden",id!=="#gameScreen");
  document.body.classList.toggle("on-result",id==="#resultScreen");
}
async function start(){
  await enterImmersive();
  current=0;score=0;locked=false;$("#score").textContent=0;show("#gameScreen");render();
}
function head(m){return `<div class="mission-head"><div class="mission-num">${current+1}</div><div><span class="eyebrow">Mission ${current+1} sur ${missions.length}</span><h1>${m.title}</h1><p>${m.sub}</p></div></div>`}
function image(m){return m.image?`<div class="image-panel"><img src="${m.image}" alt="Support d'observation pour la question"></div>`:""}
function scaleLab(m){return `<div class="scale-lab"><div class="cell-stage" id="cellStage"><img src="${m.image}" alt="Support de mesure : ${m.subject}"><div class="scale-tape${m.stretch?"":" fixed"}" id="scaleTape" aria-label="Segment d’échelle déplaçable"><span class="tape-value">${m.scaleReal} µm</span>${m.stretch?'<b class="tape-handle" id="tapeHandle" title="Tirer pour dérouler"></b>':""}</div></div><div class="scale-help"><span>↔️ ${m.stretch?"Glisse le segment bleu, puis tire sur la poignée orange.":"Glisse le segment bleu pour le comparer à la bactérie."}</span><button class="secondary mini" id="resetTape" type="button">Recommencer</button></div></div>`}
function keypadHTML(){return `<div class="keypad" id="keypad" aria-label="Clavier numérique">${["1","2","3","4","5","6","7","8","9",",","0","⌫"].map(k=>`<button type="button" class="key" data-k="${k}">${k}</button>`).join("")}</div>`}
function shuffledOptions(m){const choices=m.options.map((text,index)=>({text,correct:index===m.answer}));for(let i=choices.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[choices[i],choices[j]]=[choices[j],choices[i]]}currentAnswer=choices.findIndex(choice=>choice.correct);return choices}
function render(){
  locked=false;
  const m=missions[current];
  const handheld=document.documentElement.classList.contains("handheld");
  $("#missionLabel").textContent=`Mission ${current+1}/${missions.length}`;
  $("#progressBar").style.width=`${current/missions.length*100}%`;
  const hasMedia=m.type==="scale"||!!m.image;
  let quiz=`<div class="question">${m.question}</div>`;
  if(m.type==="qcm"||m.type==="compare"||m.type==="scale"){
    const choices=shuffledOptions(m);
    quiz+=`<div class="${m.type==="compare"?"compare":"options"}">${choices.map((choice,i)=>`<button class="option" data-i="${i}">${choice.text}</button>`).join("")}</div>`;
  }
  if(m.type==="calc"){
    quiz+=`<div class="formula"><input id="drawSize" value="${String(m.drawSize).replace('.',',')}" readonly aria-label="Longueur du dessin"><span>÷</span><input id="scaleDraw" value="${String(m.scaleDraw).replace('.',',')}" readonly aria-label="Longueur dessinée du segment"><span>× ${String(m.scaleReal).replace('.',',')} µm =</span><input id="calcAnswer" inputmode="${handheld?"none":"decimal"}" autocomplete="off" placeholder="Réponse en µm" aria-label="Taille réelle en micromètres"><button class="primary" id="calcBtn">Vérifier</button></div>`;
  }
  const pad=m.type==="calc"&&handheld?keypadHTML():"";
  $("#missionCard").innerHTML=head(m)+`<div class="mission-main${hasMedia?" has-media":""}${m.type==="calc"?" is-calc":""}">${m.type==="scale"?scaleLab(m):image(m)}<div class="mission-quiz">${quiz}</div>${pad}</div><div class="feedback" id="feedback"></div><div class="actions"><button class="primary hidden" id="nextBtn">${current===missions.length-1?"Voir mon résultat":"Mission suivante →"}</button></div>`;
  document.querySelectorAll(".option").forEach(b=>b.onclick=()=>answerOption(+b.dataset.i));
  if(m.type==="scale") initScaleLab(m);
  if(m.type==="calc"){
    const input=$("#calcAnswer");
    $("#calcBtn").onclick=answerCalc;
    input.onkeydown=e=>{if(e.key==="Enter")answerCalc()};
    if(handheld){
      input.readOnly=true;
      input.blur();
      document.querySelectorAll(".key").forEach(btn=>btn.onclick=()=>{
        if(locked)return;
        const k=btn.dataset.k;
        if(k==="⌫") input.value=input.value.slice(0,-1);
        else if(k==="," && (input.value.includes(",")||input.value.includes("."))) return;
        else input.value+=k;
      });
    }else input.focus();
  }
  $("#nextBtn").onclick=next;
  if(!handheld) window.scrollTo({top:0,behavior:"smooth"});
}
function initScaleLab(m){const stage=$("#cellStage"),tape=$("#scaleTape"),handle=$("#tapeHandle");let action=null,startX=0,startY=0,startLeft=0,startTop=0,startWidth=0,segment=0;const reset=()=>{segment=stage.clientWidth*m.segmentFraction;tape.style.setProperty("--segment",`${segment}px`);tape.style.width=`${segment}px`;tape.style.left="3%";tape.style.top="78%"};const down=(e,mode)=>{e.preventDefault();action=mode;startX=e.clientX;startY=e.clientY;startLeft=tape.offsetLeft;startTop=tape.offsetTop;startWidth=tape.offsetWidth;tape.setPointerCapture(e.pointerId)};tape.onpointerdown=e=>{if(e.target!==handle)down(e,"move")};if(handle)handle.onpointerdown=e=>down(e,"resize");tape.onpointermove=e=>{if(!action)return;if(action==="resize"){const max=stage.clientWidth-tape.offsetLeft-5;tape.style.width=`${Math.max(segment,Math.min(max,startWidth+e.clientX-startX))}px`}else{const left=Math.max(0,Math.min(stage.clientWidth-tape.offsetWidth,startLeft+e.clientX-startX));const top=Math.max(0,Math.min(stage.clientHeight-tape.offsetHeight,startTop+e.clientY-startY));tape.style.left=`${left}px`;tape.style.top=`${top}px`}};tape.onpointerup=tape.onpointercancel=()=>action=null;$("#resetTape").onclick=reset;reset()}
function answerOption(i){if(locked)return;const m=missions[current];locked=true;document.querySelectorAll(".option").forEach((b,j)=>{b.disabled=true;if(j===currentAnswer)b.classList.add("good");if(j===i&&i!==currentAnswer)b.classList.add("bad")});finish(i===currentAnswer,m.explain)}
function n(v){return parseFloat(v.trim().replace(",","."))}
function answerCalc(){if(locked)return;const m=missions[current],raw=$("#calcAnswer").value.trim().replace(",","."),c=parseFloat(raw);if(Number.isNaN(c)){toast("Saisis ton résultat dans la dernière case.");return}locked=true;const decimals=(raw.split(".")[1]||"").length,exact=Math.abs(c-m.answer)<.0005,rounded=decimals===1&&Math.abs(c-m.roundedAnswer)<.0005,ok=exact||rounded;["#drawSize","#scaleDraw","#calcAnswer"].forEach(s=>$(s).disabled=true);$("#calcBtn").disabled=true;const pad=$("#keypad");if(pad)pad.classList.add("hidden");finish(ok,m.explain+(ok?"":" Reprends : longueur de l’objet ÷ longueur du segment × valeur réelle du segment."))}
function finish(ok,text){if(ok){score+=100;$("#score").textContent=score}$("#feedback").innerHTML=`<b>${ok?"✓ Bien vu !":"✗ Pas tout à fait."}</b> ${text}`;$("#feedback").style.background=ok?"#e6faef":"#fff1ed";$("#nextBtn").classList.remove("hidden")}
function next(){current++;if(current<missions.length)render();else result()}
function result(){show("#resultScreen");$("#finalScore").textContent=score;$("#progressBar").style.width="100%";let title,text,badge;if(score>=900){title="Expert du microscope";text="Tu sais relier observation, ordre de grandeur et calcul d’échelle. L’échantillon n’a plus de secret pour toi.";badge="🏆"}else if(score>=650){title="Explorateur confirmé";text="Les bases sont solides. Rejoue une fois pour verrouiller la méthode de calcul et le vocabulaire.";badge="🔬"}else{title="Apprenti observateur";text="Tu progresses. Relis les corrections, puis retente les missions : elles changent vite de difficulté quand la méthode est comprise.";badge="🌱"}$("#resultTitle").textContent=title;$("#resultText").textContent=text;$("#resultBadge").textContent=badge;$("#recap").classList.add("hidden")}
function toast(t){const el=$("#toast");el.textContent=t;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),1800)}
function openInBrowser(){
  const hostPath=location.host+location.pathname+location.search;
  const url=location.href;
  const ua=navigator.userAgent||"";
  if(/Android/i.test(ua)){
    location.href="intent://"+hostPath+"#Intent;scheme=https;action=android.intent.action.VIEW;S.browser_fallback_url="+encodeURIComponent(url)+";end";
    return;
  }
  if(/iPhone|iPad|iPod/i.test(ua)){
    if(navigator.clipboard&&navigator.clipboard.writeText) navigator.clipboard.writeText(url).catch(()=>{});
    location.href="x-safari-https://"+hostPath;
    toast("Si rien ne s’ouvre : ··· puis « Ouvrir dans Safari ».");
    return;
  }
  window.open(url,"_blank","noopener");
}
function dismissInAppGate(){
  inAppDismissed=true;
  try{sessionStorage.setItem("celluloscope-inapp","1");}catch(_){}
  fitLayout();
}
$("#startBtn").onclick=start;
$("#retryBtn").onclick=start;
$("#reviewBtn").onclick=()=>$("#recap").classList.toggle("hidden");
$("#homeBtn").onclick=()=>show("#homeScreen");
document.addEventListener("pointerdown",()=>{if(isHandheld()&&!isInAppBrowser()) enterImmersive();},{passive:true});
const openBtn=$("#openBrowserBtn"), stayBtn=$("#stayHereBtn"), help=$("#browserHelp");
if(help){
  help.textContent=/iPhone|iPad|iPod/i.test(navigator.userAgent)
    ?"iPhone : appuie sur ··· en bas, puis « Ouvrir dans Safari »."
    :"Android : le bouton ouvre Chrome. Sinon, menu ⋮ puis « Ouvrir dans Chrome ».";
}
if(openBtn) openBtn.onclick=openInBrowser;
if(stayBtn) stayBtn.onclick=dismissInAppGate;
fitLayout();
addEventListener("resize",fitLayout);
addEventListener("orientationchange",()=>setTimeout(fitLayout,80));
document.addEventListener("fullscreenchange",fitLayout);
document.addEventListener("webkitfullscreenchange",fitLayout);
if(window.visualViewport) visualViewport.addEventListener("resize",fitLayout);
document.addEventListener("touchmove",e=>{
  if(!document.documentElement.classList.contains("handheld"))return;
  if(document.documentElement.classList.contains("in-app"))return;
  if(e.target.closest(".recap, .cell-stage, .scale-tape"))return;
  e.preventDefault();
},{passive:false});
