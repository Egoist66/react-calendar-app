const Login = ({supabase}) => {

    const url = 'https://accounts.google.com/'

    const googleSignIn = async () => {
        const {error} = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                scopes: 'https://www.googleapis.com/auth/calendar'
            }
        })

        if(error){
            alert('Error signing in to Google provider with Supabase')
            console.log(error);
        }
    }
 
    return (
        <div className="login-btn">
            <h2>Go to profile</h2>

            <p>
                Authorize your account with google and then enter your profile
            </p>

            
            <p><a target="_blank"  href={url}><button title="Sign in with Google" className="btn btn-primary">Sign in with Google</button></a></p>
            <p><button onClick={googleSignIn} title="Go" className="btn btn-primary">Enter your account</button></p>
        </div>
    )
}

export default Login