import { useState } from 'react'
import Input from './PasswordInput'
import * as api from '../api/api'
import { useHistory } from 'react-router-dom'

function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const setPas = (val: string) => {
    setPassword(val)
  }

  const history = useHistory()

  async function login() {
    const res = await api.login(username, password)
    localStorage.setItem('token', res.data.token)
    history.push('/')
  }

  return (
    <div className="login">
      <h1>Login</h1>

      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <div className="login-input">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value.trim())}
            placeholder="username"
          />

          <Input inputValue={password} callback={setPas} />
        </div>
        <button className="login-button" type="submit" onClick={login}>
          LOGIN
        </button>
      </form>
    </div>
  )
}

export default LoginForm
