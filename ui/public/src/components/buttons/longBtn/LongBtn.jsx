import React from 'react'
import "../buttons.scss"

export function LongBtn({className, text}) {
  return (
    <button className={className}>{text}</button>
  )
}
