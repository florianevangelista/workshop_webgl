// On défini les variables à l'extérieur de la fonction pour les avoires en global
let scene, camera, renderer;

function init() {
    // Créer la scène 
  scene = new THREE.Scene();
    // Création de la caméra 
  camera = new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,45,30000);
    // On règle la position de la caméra sur les 3 axes de sorte à ce que nous nous retrouvons dans le cube
  camera.position.set(-900,-200,-900);
  // Créer un renderer pour afficher les éléments de notre scène
  renderer = new THREE.WebGLRenderer();
  // On défini la taille du renderer
  renderer.setSize(window.innerWidth,window.innerHeight);
  // On ajoute l'objet du renderer au body
  document.body.appendChild(renderer.domElement);
  // On ajoute le contrôle de la caméra
  let controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.addEventListener('change', renderer);
  // On défini les distances pour le zoom du contrôleur
  controls.minDistance = 500;
  controls.maxDistance = 1500;
  
  // On crée un tableau vide pour y placer par la suite tout les côtés du cube associé à sa texture
  let materialArray = [];
  // On charge chaque texture que l'on assigne à une variable pour chaques images
  let texture_ft = new THREE.TextureLoader().load( './img/arid2_ft.jpg');
  let texture_bk = new THREE.TextureLoader().load( './img/arid2_bk.jpg');
  let texture_up = new THREE.TextureLoader().load( './img/arid2_up.jpg');
  let texture_dn = new THREE.TextureLoader().load( './img/arid2_dn.jpg');
  let texture_rt = new THREE.TextureLoader().load( './img/arid2_rt.jpg');
  let texture_lf = new THREE.TextureLoader().load( './img/arid2_lf.jpg');
    
  // On passe un objet contenant une propirétée map qui permet de donner une texture aux côtés de notre cube
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));

  for (let i = 0; i < materialArray.length; i++)
  // On défini que le côté exposé sera le côté arrière (le côté faisant face à l'intérieur du solide), car nous sommes à l'intérieur du cube
     materialArray[i].side = THREE.BackSide;
     // Création du cube
  let skyboxGeo = new THREE.BoxGeometry( 10000, 10000, 10000);
  // On associe l'élement créé avec sa texture 
  let skybox = new THREE.Mesh( skyboxGeo, materialArray );
  // Ajout du cube sur la scène
  scene.add( skybox );  
  animate();
}
function animate() {
    // Création du rendu contenant la scène et la caméra
  renderer.render(scene,camera);
  // à chaque frame il exécute la function animate
  requestAnimationFrame(animate);
}
init();