import React from 'react'

function Country({item,index}) {
  return (
    <>
        <tr>
            <td>{item.id}</td>
            <td>{item.country}</td>
            <td>{item.name}</td>
            <td>{item.population}</td>
        </tr>
    </>
  )
}

export default Country