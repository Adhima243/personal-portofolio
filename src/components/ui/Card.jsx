const Card = ({ children, className = '' }) => {
  return <div className={`glass-card rounded-3xl ${className}`}>{children}</div>
}

export default Card
