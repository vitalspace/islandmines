<script lang="ts">
  export let canvasWidth: number;
  export let canvasheith: number;

  import {
    Project,
    PhysicsLoader,
    Scene3D,
    ExtendedObject3D,
    THREE,
    JoyStick,
    ThirdPersonControls,
    PointerLock,
    PointerDrag,
  } from "enable3d";

  class MainScene extends Scene3D {
    box: any;
    island: ExtendedObject3D;
    roackA: any;
    constructor() {
      //@ts-ignore
      super("MainScene");
    }

    init() {
      console.log("Init");
      this.renderer.setPixelRatio(1);
      this.renderer.setSize(canvasWidth, canvasheith);
    }

    async preload() {
      console.log("Preload");
      await this.load.preload("island", "assets/island.glb");
    }

    async create() {
      console.log("create");

      // Resize window.
      //   const resize = () => {
      //     const newWidth = window.innerWidth;
      //     const newHeight = window.innerHeight;

      //     this.renderer.setSize(newWidth, newHeight);
      //     //@ts-ignore
      //     this.camera.aspect = newWidth / newHeight;
      //     this.camera.updateProjectionMatrix();
      //   };

      //   window.onresize = resize;
      //   resize();

      // set up scene (light, ground, grid, sky, orbitControls)
      //this.camera.position.set(0, 0, 0);
      // this.warpSpeed("-ground", "-sky");
      await this.warpSpeed("-sky", "-ground");
      this.camera.position.set(8.5, 4, 1.2);
      this.camera.rotation.set(-1.5, 1.2, 1.5);

      this.camera.lookAt(0, 0, 0);

      // camera.zoom = 100;
      // orbitControls.target.set(100, 5, 0)

      // island

      const addBook = async () => {
        //this.camera.position.set(20, 10, 0);
        const object = await this.load.gltf("island");
        const scene = object.scenes[0];

        this.island = new ExtendedObject3D();
        this.island.name = "scene";
        this.island.add(scene);
        this.add.existing(this.island);

        // add animations
        // sadly only the flags animations works
        // object.animations.forEach((anim, i) => {
        //   book.mixer = this.animationMixers.create(book);
        //   // overwrite the action to be an array of actions
        //   book.action = [];
        //   book.action[i] = book.mixer.clipAction(anim);
        //   book.action[i].play();
        // });

        this.island.traverse((child) => {
          if (child.name == "RockA") {
            this.roackA = child
            console.log(this.roackA)
          }
          // if (child.isMesh) {
            
            

            // child.castShadow = child.receiveShadow = false;
            // child.material.metalness = 0;
            // child.material.roughness = 1;

            // if (/mesh/i.test(child.name)) {
            //   this.physics.add.existing(child, {
            //     shape: "concave",
            //     mass: 0,
            //     collisionFlags: 1,
            //     autoCenter: false,
            //   });
            //   child.body.setAngularFactor(0, 0, 0);
            //   child.body.setLinearFactor(0, 0, 0);
            // }
          // }
        });
      };

      addBook();

      function manejarEventoScroll(event) {
        // console.log("Position", camera.position)
        // console.log("Rotation", camera.rotation)
      }

      window.addEventListener("wheel", manejarEventoScroll);

      // enable physics debug
      //   this.physics.debug?.enable();

      // position camera

      // blue box
      // this.box = this.add.box({ y: 2 }, { lambert: { color: "deepskyblue" } });

      // pink box
      //   this.physics.add.box({ y: 10 }, { lambert: { color: "hotpink" } });

      //   // green sphere
      //   const geometry = new THREE.SphereGeometry(0.8, 16, 16);
      //   const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
      //   const cube = new THREE.Mesh(geometry, material);
      //   cube.position.set(0.2, 3, 0);
      //   this.scene.add(cube);
      // add physics to an existing object
      //@ts-ignore
      //   this.physics.add.existing(cube);
    }

    update() {
      const initialY = -4.5; // Posición inicial en el eje Y
      const amplitude = 2;
      const time = Date.now() * 0.001; // Obtener el tiempo actual en segundos
      const deltaY = Math.sin(time) * amplitude; // Calcular el cambio en el eje Y usando la función seno


      if(this.roackA) {
        this.roackA.position.y = initialY + deltaY;
        console.log(this.roackA.posicion)
      }



      // Actualizar la posición del objeto en el eje Y

      // console.log(this.camera)
      // this.box.rotation.x += 0.01;
      // this.box.rotation.y += 0.01;
    }
  }

  PhysicsLoader(
    "lib/ammo/kripken",
    () =>
      new Project({
        scenes: [MainScene],
        antialias: true,
        parent: "test",
        alpha: true,
      })
  );
</script>
