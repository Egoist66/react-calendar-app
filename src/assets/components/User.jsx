import TimePiker from "./TimePicker"

const User = ({session}) => {
    const {email, full_name, avatar_url} = session.user.user_metadata
    return (
        <>
            <div className="user-card">

                <h2>Hey there! {email}</h2>
                <p>Name: <span>{full_name}</span></p>

                <div className="user-img">
                    <img src={avatar_url} alt="user-icon" />
                </div>

            
                
            </div>
            <TimePiker session={session} />
        </>
        
        
    )
}

export default User