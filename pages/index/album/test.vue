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