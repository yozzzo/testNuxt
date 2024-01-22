// plugins/aframe.client.js
export default defineNuxtPlugin(() => {
  if (process.client) {
    const script = document.createElement("script");
    script.src = "https://aframe.io/releases/1.5.0/aframe.min.js";
    script.onload = () => {
      // A-Frameのスクリプトが読み込まれた後の処理をここに記述
    };
    document.head.appendChild(script);
  }
});
