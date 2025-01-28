//  Dependencies import
import React from 'react'
import { useState } from 'react'
// needs to imported from "react-router".
// In order for child routes to render inside of parent layouts, 
// we need to render an Outlet in the parent.
import {Outlet} from 'react-router'
import {Grid2} from '@mui/material'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'

// local folder imports
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Using Grid2 for the contents so the Compnents won't overrides the child */}
    <Grid2 container>

      <Outlet/>
      <Navbar/>


    </Grid2>
    
    {/* <div className='btn'>
      <Button variant='contained' color='success'
      className='btn-inc'
      onClick={() => setCount(count + 1)}
      >
        Increase
      </Button>


      <Button variant='contained' color='warning'
      className='btn-res'
      onClick={() => setCount(0)}
      >
      Reset
      </Button>

      <Button variant='contained' color='error'
      className='btn-dec'
      onClick={() => setCount(count - 1)}
      >
      Decrease
      </Button>

    </div>

    <div className='result'>
        <h3>{count}</h3>
    </div> */}

    </>
  )
}

export default App
