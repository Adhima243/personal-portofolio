import { useRef } from 'react'

const Button = ({
  children,
  variant = 'primary',
  href,
  className = '',
  type,
  ...props
}) => {
  const ref = useRef(null)

  const handleMove = (event) => {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const offsetX = event.clientX - rect.left - rect.width / 2
    const offsetY = event.clientY - rect.top - rect.height / 2
    const strength = 12
    node.style.setProperty('--magnetic-x', `${(offsetX / rect.width) * strength}px`)
    node.style.setProperty('--magnetic-y', `${(offsetY / rect.height) * strength}px`)
  }

  const handleLeave = () => {
    const node = ref.current
    if (!node) return
    node.style.setProperty('--magnetic-x', '0px')
    node.style.setProperty('--magnetic-y', '0px')
  }

  const classes = `${
    variant === 'primary' ? 'btn-primary' : 'btn-ghost'
  } magnetic ${className}`

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={classes}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      ref={ref}
      type={type || 'button'}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={classes}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
