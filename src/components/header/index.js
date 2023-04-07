"use client";
import { signIn, signOut, useSession } from 'next-auth/react'

import * as styles from './styles'

const Header = () => {
  const { data } = useSession()

  console.log(data)

  const renderAvatar = () => {
    if (!data.user.image) return false
    return  <img css={styles.avatar} src={data.user.image} />
  }

  const renderContent = () => {
    if (data) return (
      <>
        {renderAvatar()}
        <span css={styles.text}>
          <small>Signed in as</small><br/>
          <strong>{data.user.name}</strong>
        </span>
        <button
          onClick={(e) => {
            e.preventDefault()
            signOut()
          }}
        >
          Sign out
        </button>     
      </>

    )

    return (
      <>
        <span css={styles.text}>You are not signed in</span>
        <button
          onClick={(e) => {
            e.preventDefault()
            signIn('google')
          }}
        >
          Sign in
        </button>
      </>
    )
  }

  return (
    <header css={styles.container}>
      {renderContent()}
    </header>
  )
}

export default Header
