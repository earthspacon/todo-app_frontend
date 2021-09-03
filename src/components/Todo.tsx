import { useEffect, useState } from 'react'
import * as api from '../api/api'
import { observer } from 'mobx-react-lite'
import store from '../store/store'

function Todo() {
  const [value, setValue] = useState('')
  const [id, setId] = useState('')

  useEffect(() => {
    store.setTodos()
  })

  async function save(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!id) {
      if (value.trim()) {
        await api.addTodo(value)

        store.setTodos()
        setValue('')
      }
    } else {
      await api.editTodo(id, value)

      store.setTodos()
      setValue('')
      setId('')
    }
  }

  async function remove(id: string) {
    await api.deleteTodo(id)
    store.setTodos()
  }

  return (
    <div className="wrapper">
      {store.loading ? (
        <h2>Loading...</h2>
      ) : !store.todos.length ? (
        <h2>No countries entered</h2>
      ) : (
        <ul className="colored">
          {store.todos.map((elem) => {
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

export default observer(Todo)
