import React from 'react'

export default function Navbar(props) {
  return (
    <>
    <div id="navbar" style={{
        background : `${props.palette.navBG}`
    }}>
        <div id="siteName">{props.name}</div>
    </div>
    </>
  )
}
