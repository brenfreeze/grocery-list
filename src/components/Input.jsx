const Input = ({ className, ...props }) => {
  return (
    <input className={`${className} bg-white rounded-md outline-none focus:ring-4 transition-all duration-300 ring-blue-400 px-4 py-2`} {...props} />
  )
}

export default Input