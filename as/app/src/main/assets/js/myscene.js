let step = 0.01;
let direction = -1;

// 1. Create a scene
const scene = new THREE.Scene();

// 2. Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5; // Move camera back so we can see the object

// 3. Create a renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 4. Create a 3D object (a cube)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshNormalMaterial({ color: 0x00ff00 }); // Green material
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 4. Create a 3D object (a cube)
const geometry1 = new THREE.BoxGeometry(20, 7, 1);
const material1 = new THREE.MeshBasicMaterial({ color: 0xADD8E6 }); // light blue material
const cube1 = new THREE.Mesh(geometry1, material1);
scene.add(cube1);
cube1.position.z = -10;

// Add a light source for better visual (optional for basic material, but good practice)
const light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);

// 5. Create an animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube every frame
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    camera.position.z += step*direction;
    console.log(camera.position.z);

    if (camera.position.z >= 8) {
        camera.position.z = 8;
        direction =-1;
    } else if (camera.position.z <= 2) {
        camera.position.z = 2.1;
        direction = 1;
    }

    renderer.render(scene, camera);
}

// Handle window resize for responsiveness
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}, false);

// Start the animation
animate();