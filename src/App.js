import React from 'react'
import { Route } from 'react-router'
import Front from './Components/Faculty/Front'
import MoreDetail from './Components/Faculty/MoreDetail'

const App = () => {
  return (
    <div >
   <Route path='/'exact><Front/></Route>
    <Route path='/moreDetails'><MoreDetail/></Route>
      
    </div>
  )
}

export default App
