import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '.'
import { db } from './db_config'

function App() {
  const [data, setData] = useState(Object)
  const [value, setValue] = useState('')

  const [loading, setLoading] = useState(true)
  const [nodata, setNodata] = useState(false)

  useEffect(() => {
    db.ref('countries').on('value', (snapshot) => {
      const val = snapshot.val()
      if (val) {
        setData(val)
        setLoading(false)
      } else {
        setData({})
        setNodata(true)
      }
    })
  }, [])

  const dispatch = useDispatch()
  dispatch({ type: 'ADD', payload: data })

  const obj = useSelector((state: RootState) => state.obj) as any

  function add() {
    if (value) {
      const elem = db.ref('countries').push()
      elem.set({ id: elem.key, text: value })

      setNodata(false)
    }
  }

  function remove(id: string) {
    Object.keys(data).map((elem) => {
      if (id === data[elem].id) {
        db.ref(`countries/${id}`).remove()
      }
      return null
    })
  }

  return (
    <div className="wrapper">
      {nodata ? (
        <h2>No countries entered</h2>
      ) : loading ? (
        <h2>Loading...</h2>
      ) : (
        <ul className="colored">
          {Object.keys(obj).map((elem) => {
            const child = obj[elem]
            return (
              <li key={child.id}>
                {child.text}
                <button
                  className="delete"
                  onClick={() => {
                    remove(child.id)
                  }}
                >
                  Remove
                </button>
              </li>
            )
          })}
        </ul>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (value.trim()) {
            setValue('')
          }
        }}
      >
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type the name of country"
        />

        <button className="add" type="submit" onClick={add}>
          Add country
        </button>
      </form>
    </div>
  )
}

export default App
