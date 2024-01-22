<template>
  <div>AR画面</div>
  <!-- <a-scene mindar-image="imageTargetSrc: ./../../../../assets/marker.mind" color-space="sRGB" -->
  <a-scene mindar-image="imageTargetSrc: /marker.mind" color-space="sRGB"
    renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false"
    device-orientation-permission-ui="enabled: false">
    <a-assets timeout="100000">
      <!-- <video id="video-src" src="@/static/cm.mp4" preload="auto" controls playsinline timeout="100000">

      </video> -->
      <img id="ready" src="../../../assets/ready.png" timeout="100000" />
    </a-assets>
    <a-camera position="0 0 0" look-controls="enabled: false" cursor="fuse: false; rayOrigin: mouse;"
      raycaster="objects: .clickable"></a-camera>
    <!-- トラッキングが外れても表示し続け、0.2秒外れたままなら固定で表示するようにしたい。AFRAME.registerComponent('mindar-image-target'を調べる -->
    <a-entity mindar-image-target="targetIndex: 0" mindar-image-target-visible="visible: true">
      <a-plane src="#ready" class="clickable" position="0 0 0.1" height="0.56" width="0.97" rotation="0 0 0"></a-plane>
    </a-entity>
  </a-scene>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHead } from '#imports'

const aFrameLoaded = ref(false)
const mindARLoaded = ref(false)

onMounted(() => {
  useHead({
    script: [
      {
        type: "text/javascript",
        src: "https://aframe.io/releases/1.4.2/aframe.min.js",
        onload: () => aFrameLoaded.value = true,
      },
      {
        type: "text/javascript",
        src: "https://cdn.jsdelivr.net/npm/mind-ar@1.2.2/dist/mindar-image-aframe.prod.js",
        onload: () => mindARLoaded.value = true,
      }
    ]
  })
})

// コンポーネント内でaFrameLoadedとmindARLoadedの状態を使用してロジックを制御する
</script>

<!-- <script setup lang="ts"> -->
<!-- // import 'mind-ar/dist/mindar-image.prod.js'
// //   import 'aframe'
    // import 'mind-ar/dist/mindar-image-aframe.prod.js'
    
    // onMounted(
    //     (): void => {
    //         // エンティティを取得
    //         let plane = document.querySelector('a-plane');
    //         let video = document.querySelector('video');
    //         let isPlaying = false;
    //         // タップイベントリスナーを追加

    //         if (plane) {
    //             plane.addEventListener('click', function() {
    //                 // Add your event listener code here
    //             });
            
    //             if (video && !isPlaying) {
    //             // a-planeのsrcをvideo-srcに変更
    //                 plane.setAttribute('src', '#video-src');
    //                 video.play();
    //                 isPlaying = true;
    //             }
    //         }
    //     },
    // ); -->
<!-- </script> -->
