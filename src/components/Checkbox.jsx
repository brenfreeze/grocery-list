const Checkbox = ({ checked, label, ...props }) => {

  return (
    <label htmlFor={label} className="inline-block cursor-pointer text-white select-none">
      <input type="checkbox" className="hidden" id={label} checked={checked} {...props} />
      <div className="flex items-center gap-2">
        <div className={`${checked ? 'bg-blue-500' : ''} grid place-content-center border-2 w-4 h-4 transition-all duration-300 border-blue-500 rounded-sm`}>
          {checked && (
            <span>
              &#10003;
            </span>
          )}
        </div>
        <span className={checked && 'line-through'}>{label}</span>
      </div>
    </label>
  )
}

export default Checkbox