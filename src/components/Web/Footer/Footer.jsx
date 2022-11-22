import React from 'react'
import './Footer.css'

export function Footer () {
  return (
    <footer>
        <div className="footerInfo">
          <a className="mainFooter" rel="nofollow" href="/get-started">Help</a>
          <div >·</div>
          <a className="mainFooter" rel="nofollow" href="/tos#privacy">Privacy Policy </a>
          <div >·</div>
          <a className="mainFooter" rel="nofollow" href="/tos">Terms of Service </a>
          <div >·</div>
          <div >© Talent.com</div>
        </div>
      </footer>
  )
}
