const SignOut = ({supabase}) => {

    const signOut = async () => {
        await supabase.auth.signOut()
      
    }
 
    return (
        <div className="sign-out-btn">
            <button onClick={signOut} title="Sign out" className="btn btn-primary">Sign out</button>
        </div>
    )
}

export default SignOut