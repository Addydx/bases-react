import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {FirstApp} from '../src/FirstApp'

 

createRoot(document.getElementById('root')).render(

  <StrictMode>

    <FirstApp />

  </StrictMode>,

)