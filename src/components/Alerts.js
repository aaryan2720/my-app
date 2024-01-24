import React from 'react'

function Alerts(props) {
  return (
props.alert && <div className= {'alert alert-${props.alert.type}-success alert-dismissible fade show'} role="alert" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
   <strong>{props.alert.type}</strong>: {props.alert.msg}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  )
}

export default Alerts
