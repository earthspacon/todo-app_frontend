import { useState } from 'react'

function Input({
  callback,
  inputValue,
}: {
  callback: (value: string) => void
  inputValue: string
}) {
  const [ispass, setIspass] = useState(true)

  return (
    <div>
      <input
        type={ispass ? 'password' : 'text'}
        value={inputValue}
        onChange={(e) => callback(e.target.value.trim())}
        placeholder="password"
      />
      <button className="eye-button" onClick={() => setIspass(!ispass)}>
        eye
      </button>
    </div>
  )
}

export default Input
