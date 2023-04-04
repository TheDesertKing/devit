import { Player } from "@lottiefiles/react-lottie-player"

const animationSrc = "https://assets5.lottiefiles.com/packages/lf20_pGDY6F.json"
// This animation is by Alex FIQHI
// via lottie animations

const LoadingAnimation = () => {
  return (
    <Player
      autoplay
      loop
      style={{ height: "40vh", width: "40vw" }}
      src={animationSrc}
    ></Player>
  )
}

export default LoadingAnimation
