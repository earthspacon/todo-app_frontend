import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/combine'
import * as api from '../api/api'
import { useHistory } from 'react-router-dom'

function Todo() {
  const data = useSelector((state: RootState) => state.all.todos)
  const isLoading = useSelector((state: RootState) => state.loader.isLoading)
  const dispatch = useDispatch()

  const [value, setValue] = useState('')
  const [id, setId] = useState('')

  const history = useHistory()

  const update = () => {
    dispatch(api.getTodos())
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      update()
    } else history.push('/login')
  })

  async function save(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!id) {
      if (value.trim()) {
        await api.addTodo(value)
        update()
        setValue('')
      }
    } else {
      await api.editTodo(id, value)
      update()
      setValue('')
    }
  }

  async function remove(id: string) {
    await api.deleteTodo(id)
    update()
  }

  return (
    <div className="wrapper">
      {isLoading ? (
        <h2>Loading...</h2>
      ) : !data.length ? (
        <h2>No countries entered</h2>
      ) : (
        <ul className="colored">
          {data.map((elem) => {
            return (
              <li key={elem._id}>
                <p>{elem.text}</p>
                <button
                  className="edit"
                  onClick={() => {
                    setValue(elem.text)
                    setId(elem._id)
                  }}
                >
                  Edit
                </button>
                <button onClick={() => remove(elem._id)}>Remove</button>
              </li>
            )
          })}
        </ul>
      )}

      <form className="add-form" onSubmit={save}>
        <input
          className="todo-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Write todo text"
        />

        <button className="add" type="submit">
          Save
        </button>
      </form>
    </div>
  )
}

export default Todo
