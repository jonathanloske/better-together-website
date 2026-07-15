export function renderLiteYoutube({ videoId, title, className = "" }) {
  return `<div
  class="lite-youtube ${className}"
  data-video-id="${videoId}"
  data-video-title="${title}"
  role="button"
  tabindex="0"
  aria-label="${title}"
  style="aspect-ratio: 16 / 9; background-color: #000; position: relative; background-image: url(https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg); background-size: cover; background-position: center; cursor: pointer;"
>
  <button
    type="button"
    class="lite-youtube-play"
    aria-label="${title}"
    style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 68px; height: 48px; background-color: rgba(0, 0, 0, 0.8); border-radius: 14px; border: none; cursor: pointer;"
  >
    <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
      <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00" />
      <path d="M 45,24 27,14 27,34" fill="#fff" />
    </svg>
  </button>
</div>`;
}
