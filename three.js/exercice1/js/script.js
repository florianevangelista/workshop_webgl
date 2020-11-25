// Créer la scène 
const scene = new THREE.Scene();

// Création de la caméra 
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Créer un renderer pour afficher les éléments de notre scène
const renderer = new THREE.WebGLRenderer();

// On ajoute le contrôle de la caméra
const controls = new THREE.OrbitControls( camera, renderer.domElement );

// On défini la taille du renderer
renderer.setSize( window.innerWidth, window.innerHeight );
// On ajoute l'objet du renderer au body
document.body.appendChild( renderer.domElement );

// Création du cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
// On donne la couleur de l'élément (Phong material est le plus brillant material)
const material = new THREE.MeshPhongMaterial( { color: "#3b5998" } );
// On associe l'élement créé avec sa texture (Mesh idem que babylon.js)
const cube = new THREE.Mesh( geometry, material );
// Ajout du cube sur la scène
scene.add( cube );

// On recule la caméra car actuellement le cube est dans la caméra
camera.position.z = 5;

// On crée une lumière d'ambiance pour pouvoir la scène
const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
// On ajoute la lumière sur la scène
scene.add(ambientLight);

// Création d'une deuxième lumière pour créer un contraste
const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
// On donne la direction à notre lampe
directionalLight.position.set(1,1,0);
scene.add(directionalLight);

// On crée le rendu pour que la scène soit visible à l'écran
const animate = function () {
    // à chaque frame il exécute la function animate
    requestAnimationFrame( animate );
    // chaque frame le cube va tourner de 0.01 sur les deux axes
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    // Création du rendu contenant la scène et la caméra
    renderer.render( scene, camera );
};

// Appel de la function animate
animate();