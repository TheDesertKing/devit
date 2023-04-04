import LoadingAnimation from "./loadingAnimation"

const Loading = ({ children }) => {
  return (
    <div className="blur-background">
      <LoadingAnimation />
      <div className="loading">{children}</div>
    </div>
  )
}

export default Loading
