import React from 'react'
import Delete from '../containers/delete/Delete'
import Insert from '../containers/insert/Insert'
import Read from '../containers/read/Read'
import Update from '../containers/update/Update'
import Home from '../containers/Home'
import Query from '../containers/query/Query'
export default function () {
  let Component; 

  switch(window.location.pathname){
    case "/":
      Component = Home
      break
    case "/insert":
      Component = Insert
      break
    case "/update":
      Component = Update
      break
    case "/read":
      Component = Read
      break
    case "/delete":
      Component = Delete
      break
    case "/query":
      Component = Query
  }

  return (
    <div className="formScreen">
        <Component/>
    </div>
  )
}
