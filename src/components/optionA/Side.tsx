import React from 'react'
import data from './data.json'

const Side = () => {
  return (
    <div className='Side'>
      <h1 className='heading2'>Summary</h1>
      <h1 className='heading2' style={{ marginTop: '10px' }}>Apr 2018 - Mar 2019</h1>
      <div className='Box flex'>
        {data.map((p, i) => {
          return (<div key={i} className={`flex box-content ${p.id === 7 ? ' no-border' : ''}`}>
            <p style={{color:`${p.color}`}}>{p.text}</p>
            <p style={{color:`${p.color}`}}>{p.value}</p>
          </div>)
        })}
      </div>
      <button className='button'>
        View Details
      </button>
      <h1 className='heading2'>Legend</h1>
      <div className='Box'>
        <p style={{color:'gray', fontSize:"0.8rem"}}>Not all data items are shown in this chart.To show these values, go to</p>
        <p className='heading2'style={{color:'#5eafd0'}}>CHAT SETTINGS</p>
      </div>
    </div>
  )
}

export default Side