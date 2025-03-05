import DotLottiePlayer from '@aarsteinmedia/dotlottie-player-light'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.component('DotLottiePlayer', DotLottiePlayer)
})
