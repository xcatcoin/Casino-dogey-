import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export const Header: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <NavLink className={styles.logo} to="/">
            <img alt="dogeysolana" src="/logo-2.svg" />
          </NavLink>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div className={styles.externalLinks}>
            <a href="https://twitter.com/dogey solana" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a href="https://discord.com/invite/w9PGqMxpGN" target="_blank" rel="noreferrer">
              Discord
            </a>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
