import '../index.css'

const BackgroundLayout = ({ background, title, children }) => {
  return (
    <div 
        className="welcome-screen overlay--claro"
        style={{ backgroundImage: `url(${background})` }}
    >
            {title && 
            <h1 className="welcome-text move">{title}</h1>}
            {children}
    </div>
  )
}

export default BackgroundLayout