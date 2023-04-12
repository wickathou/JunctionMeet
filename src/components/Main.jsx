import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../redux/data/dataSlice'

function Main() {
  const counter = useSelector(state=> state.data.value)
  const dispatch = useDispatch()

  return (
    <main className='container'>
      <p className='text'>THIS IS A TEST</p>
      <Button variant='primary' onClick={()=>dispatch(increment())}>Test {counter}</Button>
    </main>
  )
}

export default Main