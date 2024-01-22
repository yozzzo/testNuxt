export default defineNuxtPlugin(() => {
  if (process.client) {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/mind-ar@1.2.2/dist/mindar-image-aframe.prod.js";
    script.onload = () => {
      // A-Frameのスクリプトが読み込まれた後の処理をここに記述
    };
    document.head.appendChild(script);
  }
});
