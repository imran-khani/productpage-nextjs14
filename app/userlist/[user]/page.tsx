import React from 'react'

const User = ({params}:{params:{id:string}}) => {
  return (
    <div>
      {
        params.id
      }
    </div>
  )
}

export default User