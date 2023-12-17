import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './assets/components/App'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import './assets/styles/index.css'



import { projectUrl, APIkey } from './assets/service/crendentials'
import { createClient } from '@supabase/supabase-js'
import { SessionContextProvider } from '@supabase/auth-helpers-react'



const supabase = createClient(projectUrl, APIkey)

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
  
    <SessionContextProvider supabaseClient={supabase}>

      <App />

    </SessionContextProvider>

  </React.StrictMode>,
)
