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
      await this.warpSpeed("-sky", "-ground");
      this.camera.position.set(8.5, 4, 1.2);
      this.camera.rotation.set(-1.5, 1.2, 1.5);

      this.camera.lookAt(0, 0, 0);

      // island
      const addBook = async () => {
        //this.camera.position.set(20, 10, 0);
        const object = await this.load.gltf("island");
        const scene = object.scenes[0];

        this.island = new ExtendedObject3D();
        this.island.name = "scene";
        this.island.add(scene);

        this.island.castShadow = true; // Permitir que el objeto proyecte sombras
        this.island.receiveShadow = true;

        this.add.existing(this.island);
        this.island.traverse((child) => {
          child.castShadow = child.receiveShadow = true;
          if (child.name == "RockA") {
            this.roackA = child;
          }
        });
      };

      addBook();

    }

    update() {
      const initialY = -4.5; // Posición inicial en el eje Y
      const amplitude = 2;
      const time = Date.now() * 0.001; // Obtener el tiempo actual en segundos
      const deltaY = Math.sin(time) * amplitude; // Calcular el cambio en el eje Y usando la función seno

      if (this.roackA) {
        this.roackA.position.y = initialY + deltaY;
      }
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
