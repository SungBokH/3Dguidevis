import * as THREE from 'https://unpkg.com/three/build/three.module.js'

var camera, scene, renderer;
var geometry, material, mesh;

init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera( /* view angle*/45, /* aspect*/ window.innerWidth / window.innerHeight, /* near*/ 0.01,/* far*/ 10 );
    camera.position.set(500,2000,550);
    //camera.position.z = 1;

    scene = new THREE.Scene();

    geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    material = new THREE.MeshNormalMaterial();

    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    // orthographic cameras
	mapCamera = new THREE.OrthographicCamera(
        window.innerWidth / -2,		// Left
        window.innerWidth / 2,		// Right
        window.innerHeight / 2,		// Top
        window.innerHeight / -2,	// Bottom
        -5000,            			// Near 
        10000 );           			// Far 
        mapCamera.up = new THREE.Vector3(0,0,-1);
        mapCamera.lookAt( new THREE.Vector3(0,-1,0) );
        scene.add(mapCamera);


}

function animate() {

    requestAnimationFrame( animate );

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    renderer.render( scene, camera );

}