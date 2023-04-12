import React from 'react'
import { fetchUser, selectUserFetchStatus, selectUserName } from '../redux/users/usersSlice'
import { useAppDispatch, useAppSelector } from '../utils/hooks'
// import { useAppDispatch, useAppSelector } from './app/hooks'
// import { fetchUser, selectUserName, selectUserFetchStatus } from './userSlice'

export default function UserDisplay() {
  const dispatch = useAppDispatch()
  const userName = useAppSelector(selectUserName)
  const userFetchStatus = useAppSelector(selectUserFetchStatus)

  return (
    <div>
      {/* Display the current user name */}
      <div>{userName}</div>
      {/* On button click, dispatch a thunk action to fetch a user */}
      <button onClick={() => dispatch(fetchUser())}>Fetch user</button>
      {/* At any point if we're fetching a user, display that on the UI */}
      {userFetchStatus === 'loading' && <div>Fetching user...</div>}
    </div>
  )
}