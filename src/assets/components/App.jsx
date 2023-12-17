import { useState } from 'react'
import { useSession, useSupabaseClient, useSessionContext} from '@supabase/auth-helpers-react'
import User from './User'
import Login from './Login'
import SignOut from './SignOut'

const App = () => {

  const session = useSession() //tokens
  const supabase = useSupabaseClient() // talking to supabase
  const {isLoading} = useSessionContext()


  if(isLoading){
    return null
  }


  return (
    <div className="app-wrapper">
      <div className="container p-3">

        {
          session 
          ? <><User session={session} /> <SignOut supabase={supabase} /></>
          : <Login supabase={supabase} />
        }


      </div>
      
    </div>
  )
}

export default App
