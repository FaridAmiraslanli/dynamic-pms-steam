import React from 'react'

function Or() {
    const inlineStyle = {width:'39%',height:'1px',backgroundColor:'#ebebeb'}
    const parentStyle = {width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center', marginTop:'20px',marginBottom:'20px'}
  return (
    <div style={parentStyle}>
        <span style={inlineStyle}></span>
        <span>or</span>
        <span style={inlineStyle}></span>
    </div>
  )
}

export default Or
