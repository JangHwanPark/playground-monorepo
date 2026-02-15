import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Ex1_Counter} from "./Exercises.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', alignContent: 'center', height: '100vh'}}>
      <Ex1_Counter/>
    </div>
  </StrictMode>,
)
