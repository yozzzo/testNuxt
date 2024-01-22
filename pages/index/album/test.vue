<template>
  <div class="container">
    <div class="arjs-loader">
      <div>Loading, please wait...</div>
    </div>
    <a-scene vr-mode-ui="enabled: false;" renderer="logarithmicDepthBuffer: true;" embedded
      arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
      <a-nft type="nft" url="/trex" smooth="true" smoothCount="10" smoothTolerance=".01" smoothThreshold="5">
        <a-entity gltf-model="/scene.gltf" scale="5 5 5" position="50 150 0">
        </a-entity>
      </a-nft>
      <a-entity camera></a-entity>
    </a-scene>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "useHeadデモ",
  script: [
    {
      type: "text/javascript",
      src: "https://github.com/AR-js-org/AR.js/blob/master/aframe/build/aframe-ar-nft.js",
    },
    {
      type: "text/javascript",
      src: "https://github.com/AR-js-org/AR.js/blob/master/three.js/build/ar.js",
    }
  ]
})
</script>
<style>
.arjs-loader {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.arjs-loader div {
  text-align: center;
  font-size: 1.25em;
  color: white;
}
</style>