<script setup lang="ts">
useHead({
  title: "useHeadデモ",
  script: [
    {
      type: "text/javascript",
      src: "https://aframe.io/releases/1.4.2/aframe.min.js",
    },
    {
      type: "text/javascript",
      src: "https://cdn.jsdelivr.net/npm/mind-ar@1.2.2/dist/mindar-image-aframe.prod.js",
    }
  ]
})
</script>


<template>
  accountのテスト
  <div>
    <a-scene mindar="imageTargetSrc: /marker.mind; autoStart: false; uiLoading: false; uiError: false;" embedded
      arjs="sourceType: webcam; debugUIEnabled: false;">
      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-assets>
        <!-- 画像ターゲットのアセットを定義 -->
        <a-asset-item id="target-file" src="@/ready.png"></a-asset-item>
      </a-assets>

      <a-image-target preset="hiro">
        <!-- ARコンテンツをここに追加 -->
        <a-box position="0 0.5 0" material="color: red;"></a-box>
      </a-image-target>
    </a-scene>
  </div>
</template>