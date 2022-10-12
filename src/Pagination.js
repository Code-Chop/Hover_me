import React from 'react'

export default function Pagination({getNextPg,getPrevPg}) {

  return (
    <div>
      {getPrevPg&&<button onClick={getPrevPg}>Previous</button>}
   {getNextPg&&<button onClick={getNextPg}>Next</button>}
    </div>
    
  )
}
