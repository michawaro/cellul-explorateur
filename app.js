const missions=[
 {title:"À l’intérieur de la cellule",sub:"Reconnaître les structures visibles",type:"qcm",question:"Quel élément contient l’information génétique et apparaît souvent comme une zone arrondie dans la cellule ?",options:["Le noyau","Le cytoplasme","La membrane plasmique","La matrice extracellulaire"],answer:0,explain:"Le noyau contient l’essentiel de l’information génétique. La membrane délimite la cellule et le cytoplasme occupe l’espace entre les deux.",image:"illustrations/cellule-elodee-sans-texte.webp",imageCaption:"Représentation d’une cellule végétale d’Élodée"},
 {title:"Une cellule chlorophyllienne",sub:"Lire un dessin d’observation",type:"qcm",question:"Quel élément vert, caractéristique des cellules végétales, réalise la photosynthèse ?",options:["Le chloroplaste","Le noyau","La paroi","La membrane plasmique"],answer:0,explain:"Les grains verts sont des chloroplastes contenant de la chlorophylle. Une cellule végétale possède aussi une paroi autour de la membrane.",image:"illustrations/cellule-elodee-sans-texte.webp",imageCaption:"Représentation d’une cellule végétale d’Élodée"},
 {title:"Représentation d’un épithelium",sub:"Changer d’échelle d’organisation",type:"qcm",question:"Quelle définition d’un tissu est la plus juste ?",options:["Un ensemble organisé de cellules associées, avec une matrice extracellulaire éventuelle","Une très grande cellule possédant plusieurs noyaux","Un groupe d’organes ayant exactement la même fonction","Un ensemble de cellules obligatoirement identiques et directement accolées"],answer:0,explain:"Un tissu est un ensemble organisé de cellules. Celles-ci peuvent être séparées ou reliées par une matrice extracellulaire.",image:"illustrations/cellules-epitheliales.webp",course:"Un épithélium est un tissu formé de cellules étroitement serrées et reliées entre elles, formant par exemple la couche de surface de la peau."},
 {title:"Animale ou végétale ?",sub:"Repérer deux différences clés",type:"qcm",question:"Quelles structures permettent de distinguer typiquement une cellule végétale d’une cellule animale ?",options:["La paroi cellulaire et les chloroplastes","Le noyau et le cytoplasme","La membrane plasmique et les mitochondries","Le noyau et la paroi cellulaire"],answer:0,explain:"La paroi et les chloroplastes sont caractéristiques des cellules végétales. Les cellules animales n’en possèdent généralement pas.",images:[{src:"illustrations/cellule-elodee-sans-texte.webp",alt:"Cellule végétale d’Élodée",scale:1,label:"Végétale"},{src:"illustrations/cellule-animale-buccale.webp",alt:"Cellule animale de muqueuse buccale",scale:.62,label:"Animale"}]},
 {title:"Le duel des cellules",sub:"Comparer sans confondre",type:"compare",question:"Quelle proposition compare correctement une bactérie et une cellule de muqueuse buccale ?",options:["La bactérie est généralement bien plus petite et ne possède pas de noyau.","La bactérie est plus petite, mais possède un noyau plus discret.","La cellule buccale est plus petite car elle ne possède pas de paroi."],answer:0,explain:"Les bactéries sont en général bien plus petites que les cellules animales et leur ADN n’est pas enfermé dans un noyau.",image:"illustrations/bacteries-cellule-buccale-v2.webp"},
 {title:"Déroule l’échelle",sub:"Manipuler avant de calculer",type:"scale",question:"Place le segment de 15 µm au début de la cellule, puis tire sur sa poignée jusqu’à l’autre extrémité. Combien de segments entiers entrent dans sa longueur ?",options:["Entre 7 et 8 segments","Entre 5 et 6 segments","Entre 8 et 9 segments","Entre 10 et 11 segments"],answer:0,explain:"On peut placer 7 segments complets, mais pas un huitième : la longueur correspond donc à un peu plus de 7 segments et à moins de 8.",image:"illustrations/elodee-estimation-interactive.webp",scaleReal:15,cellLeft:110/1200,cellSpan:844/1200,segmentCount:7.625,tapeTop:464/645,stretch:true,subject:"cellule d’Élodée"},
 {title:"Encadre la taille",sub:"Passer des segments aux micromètres",type:"qcm",question:"Le segment représente 15 µm. La cellule contient entre 7 et 8 segments. Quel intervalle de taille réelle peux-tu prévoir ?",options:["105 µm < taille < 120 µm","7 µm < taille < 8 µm","15 µm < taille < 105 µm","120 µm < taille < 135 µm"],answer:0,explain:"7 × 15 = 105 µm et 8 × 15 = 120 µm. Le résultat précis devra obligatoirement être compris entre ces deux valeurs.",image:"illustrations/elodee-encadrement-tape.webp",calculator:true},
 {title:"La formule des segments",sub:"Réfléchir avant de calculer",type:"formula",question:"Pour trouver combien de fois le segment entre dans une mesure, glisse les cartes « taille de l’objet » et « taille du segment » dans la formule.",cards:[{id:"objet",label:"taille de l’objet"},{id:"segment",label:"taille du segment"}],formulaOps:["÷"],resultLabel:"nombre de segments",answer:["objet","segment"],explain:"On divise la taille de l’objet (sur le dessin) par la taille du segment (sur le dessin) : taille de l’objet ÷ taille du segment = nombre de segments.",image:"illustrations/elodee-division-mesures.webp"},
 {title:"Combien de segments ?",sub:"Diviser pour mesurer",type:"calc",calcMode:"ratio",question:"Combien de fois le segment d’échelle entre-t-il dans la longueur dessinée de la cellule ? Complète : 12,2 ÷ … = … (valeur exacte ou arrondie au dixième).",answer:7.625,roundedAnswer:7.6,drawSize:12.2,scaleDraw:1.6,explain:"12,2 ÷ 1,6 = 7,625, soit 7,6 au dixième. La cellule contient donc un peu plus de 7 segments d’échelle.",image:"illustrations/elodee-division-mesures.webp",calculator:true},
 {title:"La formule de la taille réelle",sub:"Relier le dessin aux micromètres",type:"formula",question:"On a vu : nombre de segments = taille de l’objet ÷ taille du segment. Pour trouver la taille réelle, glisse les cartes « taille de l’objet », « taille du segment » et « valeur réelle » dans la formule.",cards:[{id:"objet",label:"taille de l’objet"},{id:"segment",label:"taille du segment"},{id:"reel",label:"valeur réelle"}],formulaOps:["÷","×"],resultLabel:"taille réelle",answer:["objet","segment","reel"],explain:"Taille réelle = taille de l’objet ÷ taille du segment × valeur réelle du segment.",image:"illustrations/elodee-division-mesures.webp"},
 {title:"La taille précise",sub:"Multiplier par la valeur réelle",type:"calc",calcMode:"scale",question:"Tu as 12,2 ÷ 1,6 = 7,625, ce qui signifie que le segment entre 7,625 fois dans la cellule. Multiplie par la valeur réelle du segment pour obtenir la taille réelle. Valeur exacte ou arrondie au dixième.",answer:114.375,roundedAnswer:114.4,drawSize:12.2,scaleDraw:1.6,scaleReal:15,explain:"12,2 ÷ 1,6 × 15 = 114,375 µm (ou 114,4 µm au dixième). Étapes : 12,2 ÷ 1,6 = 7,625, puis 7,625 × 15 = 114,375.",image:"illustrations/elodee-division-mesures.webp",calculator:true},
 {title:"L’épaisseur d’une feuille",sub:"Donner du sens au micromètre",type:"qcm",question:"Sachant que 10 feuilles mesurent 1 mm, soit 1 000 µm, quelle est l’épaisseur d’une feuille ?",options:["100 µm","10 µm","1 mm","1 000 µm"],answer:0,explain:"1 000 µm ÷ 10 = 100 µm. Une feuille mesure donc environ 100 µm — presque la longueur de la cellule d’Élodée (114,4 µm).",image:"illustrations/repere-feuilles-question.webp",calculator:true},
 {title:"Une échelle plus grande",sub:"Comparer avant de calculer",type:"scale",question:"Glisse le segment de 2 µm le long de la bactérie. Que peux-tu conclure ?",options:["La bactérie est plus petite que le segment, mais dépasse sa moitié","La bactérie contient entre 1 et 2 segments entiers","La bactérie est exactement deux fois plus longue que le segment","La bactérie est plus petite que la moitié du segment"],answer:0,explain:"Le segment entier est plus long que la bactérie, mais sa moitié est plus courte : la bactérie mesure donc entre 0,5 et 1 segment.",image:"illustrations/bacterie-mesure.webp",scaleReal:2,segmentFraction:.60,stretch:false,subject:"bactérie"},
 {title:"Encadre la bactérie",sub:"Passer aux micromètres",type:"qcm",question:"La bactérie mesure entre 0,5 et 1 segment, et un segment représente 2 µm. Quel est son intervalle de taille ?",options:["1 µm < taille < 2 µm","0,5 µm < taille < 1 µm","2 µm < taille < 4 µm","0 µm < taille < 0,5 µm"],answer:0,explain:"0,5 × 2 = 1 µm et 1 × 2 = 2 µm. La bactérie mesure donc entre 1 et 2 µm.",calculator:true},
 {title:"La taille de la bactérie",sub:"Appliquer la méthode complète",type:"calc",calcMode:"result",question:"Sur le document, la bactérie mesure 3,5 cm et le segment représentant 2 µm mesure 5 cm. Calcule la taille réelle de la bactérie. La valeur exacte ou son arrondi au dixième sont acceptés.",answer:1.4,roundedAnswer:1.4,drawSize:3.5,scaleDraw:5,scaleReal:2,explain:"3,5 ÷ 5 = 0,7 segment, puis 0,7 × 2 = 1,4 µm. Le résultat appartient bien à l’intervalle prévu entre 1 et 2 µm.",image:"illustrations/bacterie-mesure.webp",calculator:true}
];
let current=0,score=0,locked=false,currentAnswer=0,inAppDismissed=false,calcTarget=null,farthest=0,pathMin=0,pathMax=missions.length-1;
const PATH_STRUCTURES={min:0,max:4},PATH_MESURE={min:5,max:missions.length-1};
const records=[];
const SESSION_KEY="celluloscope-session";
function activeScreen(){
  return screens.find(s=>$(s).classList.contains("active"))||"#homeScreen";
}
function saveSession(){
  try{
    if(activeScreen()==="#homeScreen"&&!score&&!farthest&&!records.some(r=>r&&r.answered)) return;
    sessionStorage.setItem(SESSION_KEY,JSON.stringify({
      current,score,farthest,records,screen:activeScreen(),pathMin,pathMax
    }));
  }catch(_){}
}
function clearSession(){
  try{sessionStorage.removeItem(SESSION_KEY)}catch(_){}
}
function loadSession(){
  try{
    const raw=sessionStorage.getItem(SESSION_KEY);
    if(!raw) return null;
    const data=JSON.parse(raw);
    return data&&typeof data==="object"?data:null;
  }catch(_){return null}
}
function sessionHasProgress(data){
  if(!data) return false;
  if(data.screen==="#gameScreen"||data.screen==="#resultScreen") return true;
  if(data.score>0||data.farthest>0) return true;
  return Array.isArray(data.records)&&data.records.some(r=>r&&r.answered);
}
function hideResumeGate(){
  const gate=$("#resumeGate");
  if(!gate) return;
  gate.classList.remove("show");
  gate.setAttribute("aria-hidden","true");
  gate.inert=true;
}
function showResumeGate(data){
  const gate=$("#resumeGate"),text=$("#resumeText");
  if(!gate) return;
  const pMin=Math.min(Math.max(data.pathMin??0,0),missions.length-1);
  const pMax=Math.min(Math.max(data.pathMax??missions.length-1,pMin),missions.length-1);
  const m=Math.min(Math.max((data.current||0)-pMin+1,1),pMax-pMin+1);
  if(text) text.textContent=`Mission ${m} sur ${pMax-pMin+1} · ${data.score||0} pts`;
  gate.classList.add("show");
  gate.setAttribute("aria-hidden","false");
  gate.inert=false;
}
function applySession(data){
  pathMin=Math.min(Math.max(data.pathMin??0,0),missions.length-1);
  pathMax=Math.min(Math.max(data.pathMax??missions.length-1,pathMin),missions.length-1);
  current=Math.min(Math.max(data.current||0,pathMin),pathMax);
  score=data.score||0;
  farthest=Math.min(Math.max(data.farthest||0,pathMin),pathMax);
  records.length=0;
  if(Array.isArray(data.records)) data.records.forEach((r,i)=>{if(r) records[i]=r});
  $("#score").textContent=score;
  resetCalcState();closeCalc();
  if(data.screen==="#resultScreen") result();
  else if(data.screen==="#gameScreen"){show("#gameScreen");render()}
  else show("#homeScreen");
}
function resumeSession(){
  const data=loadSession();
  if(data) applySession(data);
  hideResumeGate();
}
function restartFromGate(){
  clearSession();
  hideResumeGate();
  current=0;score=0;farthest=0;pathMin=0;pathMax=missions.length-1;records.length=0;
  resetCalcState();closeCalc();
  show("#homeScreen");
}
function initResumeGate(){
  const data=loadSession();
  if(sessionHasProgress(data)) showResumeGate(data);
}
const calcState={tokens:[],num:"0",fresh:true,eqExpr:"",justEq:false};
const $=s=>document.querySelector(s), screens=["#homeScreen","#echelleIntroScreen","#gameScreen","#resultScreen"];
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
  document.documentElement.classList.toggle("fit",!(inApp&&portrait));
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
  placeCalc();
  if(window._scaleTapeSync) window._scaleTapeSync();
}
async function enterImmersive(){
  if(isInAppBrowser())return;
  const root=document.documentElement;
  const withTimeout=(p,ms=450)=>Promise.race([Promise.resolve(p).catch(()=>{}),new Promise(r=>setTimeout(r,ms))]);
  const req=root.requestFullscreen||root.webkitRequestFullscreen;
  if(req&&!document.fullscreenElement&&!document.webkitFullscreenElement){
    await withTimeout(req.call(root,{navigationUI:"hide"}));
  }
  if(isHandheld()){
    try{
      if(screen.orientation&&screen.orientation.lock) await withTimeout(screen.orientation.lock("landscape"));
    }catch(_){}
  }
  document.documentElement.classList.add("fs-tried");
  fitLayout();
}
function pathCount(){return pathMax-pathMin+1}
function pathMaxScore(){return pathCount()*100}
function pathErrors(){
  let n=0;
  for(let i=pathMin;i<=pathMax;i++) if(records[i]&&records[i].answered&&!records[i].ok) n++;
  return n;
}
function retryHint(){
  const n=pathErrors();
  const label=n===1?"1 erreur":`${n} erreurs`;
  return `${label} sur ce parcours. Rejoue pour essayer de faire mieux.`;
}
function isStructuresPath(){return pathMax<=PATH_STRUCTURES.max}
function goHome(){show("#homeScreen");saveSession()}
function show(id){
  screens.forEach(s=>$(s).classList.toggle("active",s===id));
  $("#hud").classList.toggle("hidden",id!=="#gameScreen");
  document.body.classList.toggle("on-result",id==="#resultScreen");
  const menuBtn=$("#menuBtn");
  if(menuBtn) menuBtn.classList.toggle("hidden",id==="#homeScreen");
  if(id!=="#gameScreen") closeCalc();
}
async function startPath(min,max){
  await enterImmersive();
  clearSession();
  pathMin=min;pathMax=max;
  current=min;score=0;locked=false;farthest=min;records.length=0;
  resetCalcState();closeCalc();
  $("#score").textContent=0;show("#gameScreen");render();saveSession();
}
const ECHELLE_SLIDES=[
  "illustrations/echelle/echelle-01.webp",
  "illustrations/echelle/echelle-pensif.webp",
  "illustrations/echelle/echelle-02.webp",
  "illustrations/echelle/echelle-03.webp",
  "illustrations/echelle/echelle-04.webp",
  "illustrations/echelle/echelle-05.webp",
  "illustrations/echelle/echelle-06.webp"
];
let echelleIndex=0;
function echelleActive(){return $("#echelleIntroScreen")&&$("#echelleIntroScreen").classList.contains("active")}
function renderEchelleSlide(){
  const img=$("#echelleSlide");
  if(!img) return;
  img.src=ECHELLE_SLIDES[echelleIndex];
  img.alt=`Comprendre une échelle · image ${echelleIndex+1} sur ${ECHELLE_SLIDES.length}`;
}
function echelleNext(){
  if(echelleIndex<ECHELLE_SLIDES.length-1){echelleIndex++;renderEchelleSlide()}
  else show("#homeScreen");
}
function echellePrev(){
  if(echelleIndex>0){echelleIndex--;renderEchelleSlide()}
  else show("#homeScreen");
}
async function startEchelleIntro(){
  await enterImmersive();
  echelleIndex=0;
  renderEchelleSlide();
  show("#echelleIntroScreen");
}
function rec(i){
  if(!records[i]) records[i]={};
  return records[i];
}
function canForward(){
  if(current<farthest) return true;
  return !!(records[current]&&records[current].answered);
}
function head(m){
  const calc=needsCalculator(m)?`<button class="calc-toggle" id="calcToggle" type="button" aria-label="Ouvrir la calculette" aria-expanded="false"><span class="calc-glyph" aria-hidden="true"></span><span class="calc-label">Calculette</span></button>`:"";
  const mNum=current-pathMin+1, mTotal=pathCount();
  return `<div class="mission-head"><button type="button" class="nav-arrow" id="prevMission" aria-label="Mission précédente"${current===pathMin?" disabled":""}>‹</button><div class="mission-num">${mNum}</div><div class="mission-titles"><span class="eyebrow">Mission ${mNum} sur ${mTotal}</span><h1>${m.title}</h1><p>${m.sub}</p></div>${calc}<button type="button" class="nav-arrow" id="nextMission" aria-label="Mission suivante"${canForward()?"":" disabled"}>›</button></div>`;
}
function image(m){
  if(m.images?.length){
    const figs=m.images.map(img=>{
      const scale=img.scale??1;
      const label=img.label?`<figcaption>${img.label}</figcaption>`:"";
      return `<figure class="cell-figure" style="--cell-scale:${scale}"><div class="cell-visual"><img src="${img.src}" alt="${img.alt||"Cellule"}">${label}</div></figure>`;
    }).join("");
    return `<div class="image-panel image-panel--cells">${figs}</div>`;
  }
  if(!m.image) return "";
  const course=m.course?`<p class="course-note">${m.course}</p>`:"";
  const caption=m.imageCaption?`<p class="image-caption">${m.imageCaption}</p>`:"";
  const alt=m.imageAlt||"Support d'observation pour la question";
  const panelCls=m.course||m.imageCaption?"image-panel image-panel--course":"image-panel";
  return `<div class="${panelCls}"><img src="${m.image}" alt="${alt}">${caption}${course}</div>`;
}
function scaleHelp(m){
  if(m.scaleHelp) return m.scaleHelp;
  if(m.stretch) return "Glisse le segment bleu, puis tire sur la poignée orange.";
  return `Glisse le segment bleu pour le comparer à ${m.subject||"l’objet"}.`;
}
function scaleLab(m){return `<div class="scale-lab"><div class="cell-stage" id="cellStage"><img src="${m.image}" alt="Support de mesure : ${m.subject}"><div class="scale-tape${m.stretch?"":" fixed"}" id="scaleTape" aria-label="Segment d’échelle déplaçable"><span class="tape-value">${m.scaleReal} µm</span>${m.stretch?'<b class="tape-handle" id="tapeHandle" title="Tirer pour dérouler"></b>':""}</div></div><div class="scale-help"><p class="scale-help-tip"><span class="scale-help-ico" aria-hidden="true">↔️</span>${scaleHelp(m)}</p><button class="secondary mini" id="resetTape" type="button">Recommencer</button></div></div>`}
function keypadHTML(){return `<div class="keypad" id="keypad" aria-label="Clavier numérique">${["1","2","3","4","5","6","7","8","9",",","0","⌫"].map(k=>`<button type="button" class="key" data-k="${k}">${k}</button>`).join("")}</div>`}
function formulaHTML(m,handheld){
  const mode=m.calcMode||"result";
  const im=handheld?"none":"decimal";
  const v=x=>String(x).replace(".",",");
  const blank=(id,label,ph)=>`<input id="${id}" inputmode="${im}" autocomplete="off" placeholder="${ph}" aria-label="${label}">`;
  if(mode==="ratio"){
    return `<div class="formula ratio"><input id="drawSize" value="${v(m.drawSize)}" readonly aria-label="Longueur du dessin"><span>÷</span>${blank("scaleDraw","Longueur dessinée du segment","…")}<span>=</span>${blank("calcAnswer","Nombre de segments","…")}<button class="primary" id="calcBtn">Vérifier</button></div>`;
  }
  if(mode==="scale"){
    return `<div class="formula scale"><input id="drawSize" value="${v(m.drawSize)}" readonly aria-label="Longueur du dessin"><span>÷</span><input id="scaleDraw" value="${v(m.scaleDraw)}" readonly aria-label="Longueur dessinée du segment"><span>×</span>${blank("scaleRealInput","Valeur réelle du segment en µm","…")}<span>=</span>${blank("calcAnswer","Taille réelle en micromètres","… µm")}<button class="primary" id="calcBtn">Vérifier</button></div>`;
  }
  return `<div class="formula"><input id="drawSize" value="${v(m.drawSize)}" readonly aria-label="Longueur du dessin"><span>÷</span><input id="scaleDraw" value="${v(m.scaleDraw)}" readonly aria-label="Longueur dessinée du segment"><span>× ${v(m.scaleReal)} µm =</span>${blank("calcAnswer","Taille réelle en micromètres","Réponse en µm")}<button class="primary" id="calcBtn">Vérifier</button></div>`;
}
function shuffleList(list){
  const a=list.slice();
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}
function formulaSortHTML(m){
  const r=rec(current);
  if(!r.cards) r.cards=shuffleList(m.cards);
  const ops=m.formulaOps||[];
  let row="";
  m.answer.forEach((_,i)=>{
    row+=`<div class="formula-slot" data-slot="${i}" tabindex="0" aria-label="Emplacement ${i+1} de la formule"></div>`;
    if(i<ops.length) row+=`<span>${ops[i]}</span>`;
  });
  const bank=r.cards.map(c=>`<button type="button" class="chip" data-card="${c.id}">${c.label}</button>`).join("");
  return `<div class="formula-sort"><div class="formula formula-drop">${row}<span>=</span><em class="formula-result">${m.resultLabel}</em><button class="primary" id="calcBtn">Vérifier</button></div><p class="formula-hint">Glisse les cartes dans les cases vides.</p><div class="formula-bank" id="formulaBank">${bank}</div></div>`;
}
function placedCards(){
  return [...document.querySelectorAll(".formula-slot")].map(s=>s.querySelector(".chip")?.dataset.card||"");
}
function needsCalculator(m){return !!(m&&(m.type==="calc"||m.calculator))}
function numOk(raw,exact,rounded){
  const c=parseFloat(String(raw).trim().replace(",","."));
  if(Number.isNaN(c)) return false;
  const decimals=(String(raw).trim().replace(",",".").split(".")[1]||"").length;
  if(Math.abs(c-exact)<.0005) return true;
  if(rounded!=null && decimals===1 && Math.abs(c-rounded)<.0005) return true;
  return false;
}
function shuffledOptions(m){const choices=m.options.map((text,index)=>({text,correct:index===m.answer}));for(let i=choices.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[choices[i],choices[j]]=[choices[j],choices[i]]}currentAnswer=choices.findIndex(choice=>choice.correct);return choices}
function render(){
  const m=missions[current];
  const r=rec(current);
  const handheld=document.documentElement.classList.contains("handheld");
  locked=!!r.answered;
  $("#missionLabel").textContent=`Mission ${current-pathMin+1}/${pathCount()}`;
  const pathDone=Math.min(Math.max(farthest-pathMin+(records[farthest]&&records[farthest].answered?1:0),0),pathCount());
  $("#progressBar").style.width=`${pathDone/pathCount()*100}%`;
  const hasMedia=m.type==="scale"||!!m.image||!!m.images?.length;
  let quiz=`<div class="question">${m.question}</div>`;
  if(m.type==="qcm"||m.type==="compare"||m.type==="scale"){
    if(!r.options) r.options=shuffledOptions(m);
    else currentAnswer=r.options.findIndex(choice=>choice.correct);
    quiz+=`<div class="${m.type==="compare"?"compare":"options"}">${r.options.map((choice,i)=>{
      const cls=["option"];
      if(r.answered){
        if(choice.correct) cls.push("good");
        if(i===r.pick&&!choice.correct) cls.push("bad");
      }
      return `<button class="${cls.join(" ")}" data-i="${i}"${r.answered?" disabled":""}>${choice.text}</button>`;
    }).join("")}</div>`;
  }
  if(m.type==="calc") quiz+=formulaHTML(m,handheld);
  if(m.type==="formula") quiz+=formulaSortHTML(m);
  const pad=m.type==="calc"&&handheld&&!r.answered?keypadHTML():"";
  const nextLabel=current===pathMax&&current===farthest?"Voir mon résultat":"Mission suivante →";
  const kind=m.type==="calc"?" is-calc":m.type==="formula"?" is-formula":"";
  $("#missionCard").innerHTML=head(m)+`<div class="feedback" id="feedback"></div><div class="mission-main${hasMedia?" has-media":""}${kind}">${m.type==="scale"?scaleLab(m):image(m)}<div class="mission-quiz">${quiz}</div>${pad}</div><div class="actions"><button class="primary hidden" id="nextBtn">${nextLabel}</button></div>`;
  document.querySelectorAll(".option").forEach(b=>b.onclick=()=>answerOption(+b.dataset.i));
  if(m.type==="scale") initScaleLab(m);
  if(m.type==="formula") initFormula(m,r);
  if(m.type==="calc"){
    if(r.answered){
      if(r.calc){
        if(r.calc.scaleDraw!=null&&$("#scaleDraw")) $("#scaleDraw").value=r.calc.scaleDraw;
        if(r.calc.scaleRealInput!=null&&$("#scaleRealInput")) $("#scaleRealInput").value=r.calc.scaleRealInput;
        if(r.calc.calcAnswer!=null&&$("#calcAnswer")) $("#calcAnswer").value=r.calc.calcAnswer;
      }
      document.querySelectorAll(".formula input, #calcBtn").forEach(el=>el.disabled=true);
    }else wireCalc(m,handheld);
  }
  if(r.answered){
    $("#feedback").innerHTML=`<b>${r.ok?"✓ Bien vu !":"✗ Pas tout à fait."}</b> ${r.explain}`;
    $("#feedback").style.background=r.ok?"#e6faef":"#fff1ed";
    $("#nextBtn").classList.remove("hidden");
  }
  syncCalc(m);
  alignFeedback();
  wireCalcToggle();
  $("#nextBtn").onclick=next;
  $("#prevMission").onclick=prev;
  $("#nextMission").onclick=()=>{if(canForward()) next();};
}
function wireCalc(m,handheld){
  $("#calcBtn").onclick=answerCalc;
  const blanks=calcBlanks();
  calcTarget=blanks[0]||$("#calcAnswer");
  blanks.forEach(el=>{
    el.classList.toggle("armed",el===calcTarget);
    el.onfocus=()=>armInput(el,blanks);
    el.onclick=()=>armInput(el,blanks);
  });
  wireCalcFieldKeys(blanks);
  if(handheld){
    blanks.forEach(el=>{el.readOnly=true;el.blur()});
    document.querySelectorAll(".key").forEach(btn=>btn.onclick=()=>{
      if(locked||!calcTarget)return;
      const k=btn.dataset.k;
      if(k==="⌫") calcTarget.value=calcTarget.value.slice(0,-1);
      else if(k==="," && (calcTarget.value.includes(",")||calcTarget.value.includes("."))) return;
      else calcTarget.value+=k;
    });
  }else if(calcTarget) calcTarget.focus();
}
function calcBlanks(){
  return [...document.querySelectorAll(".formula input:not([readonly])")];
}
function armInput(el,blanks){
  calcTarget=el;
  blanks.forEach(f=>f.classList.toggle("armed",f===el));
}
function focusCalcBlank(idx,blanks){
  if(!blanks.length||idx<0||idx>=blanks.length) return false;
  const el=blanks[idx];
  armInput(el,blanks);
  if(!el.readOnly) el.focus();
  return true;
}
function wireCalcFieldKeys(blanks){
  blanks.forEach(el=>{
    el.onkeydown=e=>{
      if(locked||missions[current].type!=="calc") return;
      const list=calcBlanks();
      const i=list.indexOf(el);
      if(i<0) return;
      if(e.key==="ArrowRight"||e.key==="ArrowDown"){
        e.preventDefault();
        focusCalcBlank(i+1,list);
        return;
      }
      if(e.key==="ArrowLeft"||e.key==="ArrowUp"){
        e.preventDefault();
        focusCalcBlank(i-1,list);
        return;
      }
      if(e.key==="Enter"||e.key==="NumpadEnter"){
        e.preventDefault();
        if(i<list.length-1) focusCalcBlank(i+1,list);
        else if(!locked) answerCalc();
      }
    };
  });
}
function initFormula(m,r){
  const bank=$("#formulaBank");
  const slots=[...document.querySelectorAll(".formula-slot")];
  const chips=[...document.querySelectorAll(".chip")];
  let selected=null, dragChip=null, dragging=false, ghost=null, startX=0, startY=0, skipClick=false;
  const clearSel=()=>{chips.forEach(c=>c.classList.remove("armed")); selected=null};
  const toBank=chip=>{if(bank) bank.appendChild(chip); chip.classList.remove("armed")};
  const place=(chip,slot)=>{
    const prev=slot.querySelector(".chip");
    const fromSlot=chip.parentElement&&chip.parentElement.classList.contains("formula-slot")?chip.parentElement:null;
    if(prev&&prev!==chip){
      if(fromSlot) fromSlot.appendChild(prev);
      else if(bank) bank.appendChild(prev);
    }
    slot.appendChild(chip);
    chip.classList.remove("armed");
    selected=null;
  };
  chips.forEach(chip=>{
    chip.onclick=()=>{
      if(locked||skipClick){skipClick=false;return}
      if(chip.parentElement&&chip.parentElement.classList.contains("formula-slot")){
        toBank(chip); clearSel(); return;
      }
      if(selected===chip){clearSel();return}
      clearSel(); selected=chip; chip.classList.add("armed");
    };
    chip.onpointerdown=e=>{
      if(locked||e.button) return;
      dragChip=chip; dragging=false; startX=e.clientX; startY=e.clientY;
      try{chip.setPointerCapture(e.pointerId)}catch(_){}
    };
    chip.onpointermove=e=>{
      if(dragChip!==chip) return;
      const dx=e.clientX-startX, dy=e.clientY-startY;
      if(!dragging&&dx*dx+dy*dy>64){
        dragging=true;
        ghost=chip.cloneNode(true);
        ghost.classList.add("chip-ghost");
        ghost.setAttribute("aria-hidden","true");
        document.body.appendChild(ghost);
        chip.classList.add("picked");
      }
      if(dragging&&ghost){
        ghost.style.left=`${e.clientX-ghost.offsetWidth/2}px`;
        ghost.style.top=`${e.clientY-ghost.offsetHeight/2}px`;
      }
    };
    chip.onpointerup=chip.onpointercancel=e=>{
      if(dragChip!==chip) return;
      if(ghost) ghost.remove();
      chip.classList.remove("picked");
      if(dragging){
        skipClick=true;
        const el=document.elementFromPoint(e.clientX,e.clientY);
        const slot=el&&el.closest(".formula-slot");
        if(slot) place(chip,slot);
        else if(el&&el.closest("#formulaBank")) toBank(chip);
      }
      dragging=false; dragChip=null; ghost=null;
    };
  });
  slots.forEach(slot=>{
    slot.onclick=()=>{
      if(locked||!selected) return;
      place(selected,slot);
    };
  });
  if(r.answered&&r.placed){
    r.placed.forEach((id,i)=>{
      const chip=document.querySelector(`.chip[data-card="${id}"]`);
      if(chip&&slots[i]) slots[i].appendChild(chip);
    });
    slots.forEach((s,i)=>{
      const id=s.querySelector(".chip")?.dataset.card;
      s.classList.add(id===m.answer[i]?"good":"bad");
    });
    chips.forEach(c=>c.disabled=true);
    if($("#calcBtn")) $("#calcBtn").disabled=true;
  }else if($("#calcBtn")) $("#calcBtn").onclick=answerFormula;
}
function answerFormula(){
  if(locked) return;
  const m=missions[current];
  const placed=placedCards();
  if(placed.some(id=>!id)){toast("Glisse toutes les cartes dans la formule.");return}
  locked=true;
  const ok=m.answer.every((id,i)=>placed[i]===id);
  rec(current).placed=placed;
  document.querySelectorAll(".formula-slot").forEach((s,i)=>{
    s.classList.add(placed[i]===m.answer[i]?"good":"bad");
  });
  document.querySelectorAll(".chip, #calcBtn").forEach(el=>el.disabled=true);
  finish(ok,m.explain);
}
const TAPE_VISUAL_K=6.5/7.625;
function stageImageRect(stage){
  const img=stage.querySelector("img"),sw=stage.clientWidth,sh=stage.clientHeight;
  if(!img||!sw||!sh) return{left:0,top:0,width:sw,height:sh};
  const ar=img.naturalWidth/img.naturalHeight||1200/645,r=sw/sh;
  if(r>ar){const dh=sh,dw=dh*ar;return{left:(sw-dw)/2,top:0,width:dw,height:dh}}
  const dw=sw,dh=dw/ar;return{left:0,top:(sh-dh)/2,width:dw,height:dh};
}
function tapeWidthPx(tape){return parseFloat(tape.style.width)||tape.offsetWidth}
function segmentUnit(m,stage){
  if(m.cellSpan!=null&&m.segmentCount!=null){
    const cellW=cellMetrics(m,stage).width;
    return cellW/m.segmentCount*TAPE_VISUAL_K;
  }
  const rect=stageImageRect(stage);
  return rect.width*(m.segmentFraction||.1);
}
function cellMetrics(m,stage){
  const rect=stageImageRect(stage);
  const left=m.cellLeft!=null?rect.left+m.cellLeft*rect.width:rect.left+rect.width*(m.tapeLeft?parseFloat(m.tapeLeft)/100:.03);
  const width=m.cellSpan!=null?m.cellSpan*rect.width:rect.width*(m.segmentFraction||.1)*10;
  let top;
  if(typeof m.tapeTop==="number") top=rect.top+m.tapeTop*rect.height;
  else if(m.tapeTop&&String(m.tapeTop).includes("%")) top=stage.clientHeight*parseFloat(m.tapeTop)/100;
  else top=rect.top+.78*rect.height;
  return{left,width,top};
}
function alignFeedback(){
  const head=document.querySelector(".mission-head"),card=document.querySelector(".mission-card");
  if(head&&card) card.style.setProperty("--feedback-top",head.offsetHeight+4+"px");
}
function captureTapeNorm(m,stage,tape){
  const rect=stageImageRect(stage),seg=segmentUnit(m,stage);
  if(!rect.width||!seg) return null;
  return{
    relLeft:(tape.offsetLeft-rect.left)/rect.width,
    relTop:(tape.offsetTop-rect.top)/rect.height,
    widthSegs:tapeWidthPx(tape)/seg
  };
}
function saveTapeState(){
  const stage=$("#cellStage"),tape=$("#scaleTape");
  if(!stage||!tape) return;
  const m=missions[current],norm=captureTapeNorm(m,stage,tape);
  if(norm) rec(current).tapeNorm=norm;
  delete rec(current).tape;
}
function lockTape(){
  const tape=$("#scaleTape"),handle=$("#tapeHandle"),btn=$("#resetTape");
  if(tape){tape.style.pointerEvents="none";tape.dataset.locked="1"}
  if(handle) handle.style.display="none";
  if(btn) btn.disabled=true;
}
function unlockTape(){
  const tape=$("#scaleTape"),handle=$("#tapeHandle"),btn=$("#resetTape");
  if(tape){tape.style.pointerEvents="auto";delete tape.dataset.locked}
  if(handle) handle.style.display="";
  if(btn) btn.disabled=false;
}
function initScaleLab(m){
  if(window._scaleTapeRO){window._scaleTapeRO.disconnect();window._scaleTapeRO=null}
  const stage=$("#cellStage"),tape=$("#scaleTape"),handle=$("#tapeHandle"),r=rec(current);
  if(!stage||!tape) return;
  let action=null,startX=0,startY=0,startLeft=0,startTop=0,startWidth=0,segment=0,syncing=false,tapeLocked=!!r.answered;
  const applySegment=seg=>{segment=seg;tape.style.setProperty("--segment",`${seg}px`)};
  const defaultNorm=()=>{
    const cell=cellMetrics(m,stage),rect=stageImageRect(stage);
    return{
      relLeft:m.cellLeft!=null?m.cellLeft:(cell.left-rect.left)/rect.width,
      relTop:(cell.top-rect.top)/rect.height,
      widthSegs:1
    };
  };
  const applyNorm=(norm)=>{
    const rect=stageImageRect(stage),seg=segmentUnit(m,stage);
    if(!rect.width||!seg) return;
    applySegment(seg);
    tape.style.left=`${rect.left+norm.relLeft*rect.width}px`;
    tape.style.top=`${rect.top+norm.relTop*rect.height}px`;
    tape.style.width=`${Math.max(seg,norm.widthSegs*seg)}px`;
  };
  const syncTape=()=>{
    if(syncing) return;
    syncing=true;
    if(!r.tapeNorm&&r.tape){
      const t=r.tape,rect=stageImageRect(stage),seg=segmentUnit(m,stage);
      if(rect.width&&seg){
        r.tapeNorm={
          relLeft:((parseFloat(t.left)||rect.left)-rect.left)/rect.width,
          relTop:((parseFloat(t.top)||rect.top)-rect.top)/rect.height,
          widthSegs:(parseFloat(t.width)||seg)/seg
        };
      }
      delete r.tape;
    }
    applyNorm(r.tapeNorm||defaultNorm());
    syncing=false;
  };
  const maxStretch=()=>{
    let max=stage.clientWidth-tape.offsetLeft-5;
    if(m.cellSpan!=null&&m.cellLeft!=null){
      const cell=cellMetrics(m,stage);
      max=Math.max(segment,cell.left+cell.width-tape.offsetLeft);
    }
    return max;
  };
  const down=(e,mode)=>{
    if(tapeLocked) return;
    e.preventDefault();
    action=mode;
    startX=e.clientX;startY=e.clientY;
    startLeft=tape.offsetLeft;startTop=tape.offsetTop;startWidth=tapeWidthPx(tape);
    tape.setPointerCapture(e.pointerId);
  };
  tape.onpointerdown=e=>{if(e.target!==handle)down(e,"move")};
  if(handle) handle.onpointerdown=e=>down(e,"resize");
  tape.onpointermove=e=>{
    if(!action) return;
    if(action==="resize"){
      tape.style.width=`${Math.max(segment,Math.min(maxStretch(),startWidth+e.clientX-startX))}px`;
    }else{
      const left=Math.max(0,Math.min(stage.clientWidth-tape.offsetWidth,startLeft+e.clientX-startX));
      const top=Math.max(0,Math.min(stage.clientHeight-tape.offsetHeight,startTop+e.clientY-startY));
      tape.style.left=`${left}px`;
      tape.style.top=`${top}px`;
    }
  };
  tape.onpointerup=tape.onpointercancel=()=>{
    action=null;
    if(!r.answered){
      const norm=captureTapeNorm(m,stage,tape);
      if(norm){
        if(m.segmentCount&&norm.widthSegs>=m.segmentCount*.96) norm.widthSegs=m.segmentCount;
        r.tapeNorm=norm;
      }
      delete r.tape;
      if(r.tapeNorm) applyNorm(r.tapeNorm);
    }
  };
  const resetBtn=$("#resetTape");
  if(resetBtn) resetBtn.onclick=e=>{
    e.preventDefault();
    e.stopPropagation();
    action=null;
    tapeLocked=false;
    unlockTape();
    delete r.tapeNorm;
    delete r.tape;
    applyNorm(defaultNorm());
    const norm=captureTapeNorm(m,stage,tape);
    if(norm) r.tapeNorm=norm;
  };
  const img=stage.querySelector("img");
  if(img&&!img.complete) img.addEventListener("load",()=>syncTape(),{once:true});
  syncTape();
  const ro=typeof ResizeObserver!=="undefined"?new ResizeObserver(()=>syncTape()):null;
  if(ro){ro.observe(stage);window._scaleTapeRO=ro}
  window._scaleTapeSync=()=>{if(missions[current].type==="scale") syncTape()};
  if(tapeLocked) lockTape();
  else unlockTape();
}
function answerOption(i){if(locked)return;const m=missions[current];const r=rec(current);r.pick=i;locked=true;document.querySelectorAll(".option").forEach((b,j)=>{b.disabled=true;if(j===currentAnswer)b.classList.add("good");if(j===i&&i!==currentAnswer)b.classList.add("bad")});finish(i===currentAnswer,m.explain)}
function n(v){return parseFloat(v.trim().replace(",","."))}
function answerCalc(){
  if(locked)return;
  const m=missions[current], mode=m.calcMode||"result";
  const freeze=()=>{
    locked=true;
    document.querySelectorAll(".formula input, #calcBtn").forEach(el=>el.disabled=true);
    const pad=$("#keypad"); if(pad) pad.classList.add("hidden");
  };
  if(mode==="ratio"){
    const divRaw=$("#scaleDraw").value, quotRaw=$("#calcAnswer").value;
    if(!divRaw.trim()||!quotRaw.trim()){toast("Complète les deux cases : 12,2 ÷ … = …");return}
    freeze();
    const ok=numOk(divRaw,m.scaleDraw,m.scaleDraw)&&numOk(quotRaw,m.answer,m.roundedAnswer);
    finish(ok,(ok?"":`Tu as écrit 12,2 ÷ ${divRaw.trim()||"…"} = ${quotRaw.trim()||"…"}. `)+m.explain);
    return;
  }
  if(mode==="scale"){
    const realRaw=$("#scaleRealInput").value, resRaw=$("#calcAnswer").value;
    if(!realRaw.trim()||!resRaw.trim()){toast("Indique × ? µm et le résultat.");return}
    freeze();
    const realOk=numOk(realRaw,m.scaleReal,m.scaleReal), resOk=numOk(resRaw,m.answer,m.roundedAnswer), ok=realOk&&resOk;
    const shown=`12,2 ÷ 1,6 × ${realRaw.trim()||"…"} = ${resRaw.trim()||"…"}`;
    finish(ok,(ok?"":`Tu as écrit ${shown}. `)+m.explain);
    return;
  }
  const raw=$("#calcAnswer").value.trim().replace(",","."),c=parseFloat(raw);
  if(Number.isNaN(c)){toast("Saisis ton résultat dans la dernière case.");return}
  freeze();
  const decimals=(raw.split(".")[1]||"").length,exact=Math.abs(c-m.answer)<.0005,rounded=decimals===1&&Math.abs(c-m.roundedAnswer)<.0005,ok=exact||rounded;
  finish(ok,m.explain+(ok?"":" Reprends : longueur de l’objet ÷ longueur du segment × valeur réelle du segment."));
}
function finish(ok,text){
  const r=rec(current);
  if(!r.answered){
    if(ok){score+=100;$("#score").textContent=score}
    r.answered=true;r.ok=ok;r.explain=text;
    if(missions[current].type==="calc"){
      r.calc={
        scaleDraw:$("#scaleDraw")?$("#scaleDraw").value:null,
        scaleRealInput:$("#scaleRealInput")?$("#scaleRealInput").value:null,
        calcAnswer:$("#calcAnswer")?$("#calcAnswer").value:null
      };
    }
    if(missions[current].type==="formula") r.placed=placedCards();
    if(missions[current].type==="scale"){saveTapeState();lockTape()}
  }
  $("#feedback").innerHTML=`<b>${ok?"✓ Bien vu !":"✗ Pas tout à fait."}</b> ${text}`;
  $("#feedback").style.background=ok?"#e6faef":"#fff1ed";
  alignFeedback();
  $("#nextBtn").classList.remove("hidden");
  const fwd=$("#nextMission");
  if(fwd) fwd.disabled=false;
  saveSession();
}
function prev(){if(current>pathMin) goTo(current-1)}
function next(){
  if(!canForward()) return;
  if(current<farthest){goTo(current+1);return}
  if(current===pathMax){result();return}
  if(current+1>pathMax) return;
  farthest=Math.min(current+1,pathMax);
  goTo(farthest);
}
function goTo(i){
  if(missions[current].type==="scale"&&!rec(current).answered) saveTapeState();
  current=Math.min(Math.max(i,pathMin),pathMax);
  render();
  saveSession();
}
function result(){
  show("#resultScreen");
  const max=pathMaxScore();
  $("#finalScore").textContent=score;
  const maxEl=$("#finalScoreMax");
  if(maxEl) maxEl.textContent=`/ ${max.toLocaleString("fr-FR")} points`;
  $("#progressBar").style.width="100%";
  let title,text,badge;
  if(isStructuresPath()){
    if(score>=max*.8){title="Expert des cellules";text="Tu sais reconnaître les structures et comparer cellules végétales, animales et bactéries.";badge="🏆"}
    else if(score>=max*.56){title="Observateur attentif";text="Les bases sont solides. Rejoue une fois pour ancrer paroi, chloroplastes et différences de taille.";badge="🔬"}
    else{title="Apprenti biologiste";text=retryHint();badge="🌱"}
  }else{
    if(score>=max*.85){title="Expert du microscope";text="Tu sais relier observation, ordre de grandeur et calcul d’échelle. L’échantillon n’a plus de secret pour toi.";badge="🏆"}
    else if(score>=max*.6){title="Explorateur confirmé";text="Les bases sont solides. Rejoue une fois pour verrouiller la méthode de calcul et le vocabulaire.";badge="🔬"}
    else{title="Apprenti observateur";text=retryHint();badge="🌱"}
  }
  $("#resultTitle").textContent=title;
  $("#resultText").textContent=text;
  $("#resultBadge").textContent=badge;
  const promo=$("#resultPromo"), recapS=$("#recapStructures"), recapM=$("#recapMesure");
  if(promo) promo.classList.toggle("hidden",!isStructuresPath());
  if(recapS) recapS.classList.add("hidden");
  if(recapM) recapM.classList.add("hidden");
  saveSession();
}
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
function parseFr(s){return parseFloat(String(s).replace(",","."))||0}
function formatFr(n){
  if(!Number.isFinite(n)) return "Erreur";
  const r=Math.round(n*1e6)/1e6;
  return String(r).replace(".",",");
}
function applyOp(a,op,b){
  if(op==="+") return a+b;
  if(op==="-") return a-b;
  if(op==="×") return a*b;
  if(op==="÷") return b===0?NaN:a/b;
  return b;
}
function prettyOp(x){return x==="-"?"−":x}
function evalTokens(seq){
  const t=seq.slice();
  const pass=ops=>{
    let i=0;
    while(i<t.length){
      if(ops.includes(t[i])){
        const r=applyOp(parseFr(t[i-1]),t[i],parseFr(t[i+1]));
        t.splice(i-1,3,formatFr(r));
        i=Math.max(0,i-1);
      }else i++;
    }
  };
  pass(["×","÷"]);
  pass(["+","-"]);
  return t[0]||"0";
}
function updateCalcScreen(){
  const s=calcState;
  const exprEl=$("#calcExpr"), valEl=$("#calcScreen");
  let expr="";
  if(s.justEq) expr=s.eqExpr;
  else if(s.tokens.length) expr=s.tokens.map(prettyOp).join(" ")+(s.fresh?"":" "+s.num);
  if(exprEl) exprEl.textContent=expr;
  if(valEl) valEl.textContent=s.num;
}
function resetCalcState(){
  calcState.tokens=[];
  calcState.num="0";
  calcState.fresh=true;
  calcState.eqExpr="";
  calcState.justEq=false;
  updateCalcScreen();
}
function calcPress(k){
  const s=calcState;
  if(k==="C"){resetCalcState();return}
  if(k==="⌫"){
    if(s.justEq){resetCalcState();return}
    if(!s.fresh&&s.num.length>1){s.num=s.num.slice(0,-1)}
    else if(!s.fresh){s.num="0";s.fresh=true}
    else if(s.tokens.length){
      const last=s.tokens.pop();
      if("+-×÷".includes(last)){
        s.num=s.tokens.pop()||"0";
        s.fresh=true;
      }else{s.num=last;s.fresh=false}
    }
    updateCalcScreen();
    return;
  }
  if("+-×÷".includes(k)){
    if(s.justEq){
      s.tokens=[s.num];
      s.justEq=false;
      s.eqExpr="";
    }else if(!s.fresh) s.tokens.push(s.num);
    else if(!s.tokens.length) s.tokens.push(s.num);
    if("+-×÷".includes(s.tokens[s.tokens.length-1])) s.tokens[s.tokens.length-1]=k;
    else s.tokens.push(k);
    s.fresh=true;
    s.num="0";
    updateCalcScreen();
    return;
  }
  if(k==="="){
    if(s.justEq) return;
    const seq=s.tokens.slice();
    if(!seq.length) return;
    if("+-×÷".includes(seq[seq.length-1])) seq.push(s.num);
    else if(!s.fresh) seq.push(s.num);
    if(seq.length<3) return;
    s.eqExpr=seq.map(prettyOp).join(" ")+" =";
    s.num=evalTokens(seq);
    s.tokens=[];
    s.fresh=true;
    s.justEq=true;
    updateCalcScreen();
    return;
  }
  if(s.justEq){
    s.tokens=[];
    s.eqExpr="";
    s.justEq=false;
    s.num="0";
    s.fresh=true;
  }
  if(k===","){
    if(s.fresh){s.num="0,";s.fresh=false}
    else if(!s.num.includes(",")) s.num+=",";
  }else{
    if(s.fresh||s.num==="0"){s.num=k;s.fresh=false}
    else s.num+=k;
  }
  updateCalcScreen();
}
function placeCalc(){
  const pop=$("#calcPop"), btn=$("#calcToggle");
  if(!pop||pop.hidden||!btn) return;
  const r=btn.getBoundingClientRect();
  const w=pop.offsetWidth||280;
  const h=pop.offsetHeight||320;
  let left=r.right-w;
  left=Math.max(8,Math.min(left,window.innerWidth-w-8));
  let top=r.bottom+8;
  if(top+h>window.innerHeight-8) top=Math.max(8,r.top-h-8);
  pop.style.top=top+"px";
  pop.style.left=left+"px";
  pop.style.right="auto";
  pop.style.bottom="auto";
  pop.style.transform="none";
}
function closeCalc(){
  const pop=$("#calcPop"), btn=$("#calcToggle");
  if(pop){pop.hidden=true;pop.classList.remove("open")}
  if(btn) btn.setAttribute("aria-expanded","false");
}
function toggleCalc(){
  const pop=$("#calcPop"), btn=$("#calcToggle");
  if(!pop||!btn) return;
  const open=pop.hidden;
  pop.hidden=!open;
  pop.classList.toggle("open",open);
  btn.setAttribute("aria-expanded",open?"true":"false");
  if(open){
    updateCalcScreen();
    requestAnimationFrame(placeCalc);
  }
}
function wireCalcToggle(){
  const btn=$("#calcToggle");
  if(!btn) return;
  const open=$("#calcPop")&&!$("#calcPop").hidden;
  btn.setAttribute("aria-expanded",open?"true":"false");
  btn.onclick=e=>{e.stopPropagation();toggleCalc()};
}
function syncCalc(m){
  if(!needsCalculator(m)) closeCalc();
  else{
    updateCalcScreen();
    placeCalc();
  }
}
const pathStructures=$("#pathStructures"), pathAideEchelle=$("#pathAideEchelle"), pathMesure=$("#pathMesure");
if(pathStructures) pathStructures.onclick=()=>startPath(PATH_STRUCTURES.min,PATH_STRUCTURES.max);
if(pathAideEchelle) pathAideEchelle.onclick=()=>startEchelleIntro();
const echelleHitBack=$("#echelleHitBack"), echelleHitFwd=$("#echelleHitFwd");
if(echelleHitBack) echelleHitBack.onclick=e=>{e.stopPropagation();echellePrev()};
if(echelleHitFwd) echelleHitFwd.onclick=e=>{e.stopPropagation();echelleNext()};
if(pathMesure) pathMesure.onclick=()=>startPath(PATH_MESURE.min,PATH_MESURE.max);
$("#retryBtn").onclick=()=>startPath(pathMin,pathMax);
$("#reviewBtn").onclick=()=>{
  const recap=isStructuresPath()?$("#recapStructures"):$("#recapMesure");
  if(recap) recap.classList.toggle("hidden");
};
const menuBtn=$("#menuBtn"), menuResultBtn=$("#menuResultBtn");
if(menuBtn) menuBtn.onclick=goHome;
if(menuResultBtn) menuResultBtn.onclick=goHome;
$("#homeBtn").onclick=goHome;
const resumeBtn=$("#resumeBtn"), restartBtn=$("#restartBtn");
if(resumeBtn) resumeBtn.onclick=resumeSession;
if(restartBtn) restartBtn.onclick=restartFromGate;
addEventListener("pagehide",saveSession);
document.addEventListener("pointerdown",()=>{if(!isInAppBrowser()) enterImmersive();},{passive:true});
const openBtn=$("#openBrowserBtn"), stayBtn=$("#stayHereBtn"), help=$("#browserHelp");
if(help){
  help.textContent=/iPhone|iPad|iPod/i.test(navigator.userAgent)
    ?"iPhone : appuie sur ··· en bas, puis « Ouvrir dans Safari »."
    :"Android : le bouton ouvre Chrome. Sinon, menu ⋮ puis « Ouvrir dans Chrome ».";
}
if(openBtn) openBtn.onclick=openInBrowser;
if(stayBtn) stayBtn.onclick=dismissInAppGate;
document.querySelectorAll(".ck").forEach(b=>b.onclick=()=>calcPress(b.dataset.k));
document.addEventListener("pointerdown",e=>{
  if(!$("#calcPop")||$("#calcPop").hidden) return;
  if(e.target.closest("#calcPop, #calcToggle")) return;
  closeCalc();
});
function gameActive(){return $("#gameScreen")&&$("#gameScreen").classList.contains("active")}
function overlayBlocks(){
  return document.body.classList.contains("locked-portrait")
    || ($("#fsGate")&&$("#fsGate").classList.contains("show"))
    || ($("#browserGate")&&$("#browserGate").classList.contains("show"))
    || ($("#resumeGate")&&$("#resumeGate").classList.contains("show"));
}
function mapCalcKey(e){
  const k=e.key;
  if(k>="0"&&k<="9") return k;
  if(k===","||k==="."||k==="Decimal") return ",";
  if(k==="+"||k==="Add") return "+";
  if(k==="-"||k==="Subtract") return "-";
  if(k==="*"||k==="x"||k==="X"||k==="Multiply") return "×";
  if(k==="/"||k==="Divide") return "÷";
  if(k==="Enter"||k==="="||k==="NumpadEnter") return "=";
  if(k==="Backspace") return "⌫";
  if(k==="Delete"||((k==="c"||k==="C")&&!e.shiftKey)) return "C";
  return "";
}
document.addEventListener("keydown",e=>{
  if(echelleActive()&&!overlayBlocks()){
    if(e.ctrlKey||e.metaKey||e.altKey) return;
    e.preventDefault();
    if(e.key==="ArrowLeft"||e.key==="Backspace") echellePrev();
    else echelleNext();
    return;
  }
  if(!gameActive()||overlayBlocks()) return;
  if(e.ctrlKey||e.metaKey||e.altKey) return;
  const calcOpen=$("#calcPop")&&!$("#calcPop").hidden;
  if(calcOpen){
    if(e.key==="Escape"){e.preventDefault();closeCalc();return}
    const mapped=mapCalcKey(e);
    if(mapped){e.preventDefault();calcPress(mapped);return}
  }
  const inField=/^(INPUT|TEXTAREA)$/.test(e.target.tagName);
  const calcFields=missions[current].type==="calc"?calcBlanks():[];
  if(inField&&calcFields.length&&calcFields.includes(e.target)) return;
  if(e.key==="Enter"){
    e.preventDefault();
    if(canForward()){next();return}
    if($("#calcBtn")&&!locked){
      if(missions[current].type==="formula") answerFormula();
      else answerCalc();
    }
    return;
  }
  if(inField) return;
  if(e.key==="ArrowLeft"){e.preventDefault();prev();return}
  if(e.key==="ArrowRight"){e.preventDefault();if(canForward()) next()}
});
fitLayout();
initResumeGate();
addEventListener("resize",fitLayout);
addEventListener("orientationchange",()=>setTimeout(fitLayout,80));
document.addEventListener("fullscreenchange",fitLayout);
document.addEventListener("webkitfullscreenchange",fitLayout);
if(window.visualViewport) visualViewport.addEventListener("resize",fitLayout);
const ytBell=$("#ytBell");
if(ytBell) ytBell.addEventListener("click",()=>{
  ytBell.classList.add("is-tip");
  setTimeout(()=>ytBell.classList.remove("is-tip"),5200);
});
document.addEventListener("touchmove",e=>{
  if(!document.documentElement.classList.contains("fit"))return;
  if(e.target.closest(".recap, .cell-stage, .scale-tape, .feedback, .yt-dock, .chip, .formula-slot, .formula-sort, .echelle-stage"))return;
  e.preventDefault();
},{passive:false});
