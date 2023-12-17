import DateTimePicker from "react-datetime-picker";
import { useState } from "react";
import { CalendarUrl } from "../service/crendentials";

const TimePiker = ({session}) => {
    const [start, setStart] = useState(new Date())
    const [end, setEnd] = useState(new Date())


    console.log(start, end);

    return (
        <>
            <div>

                <strong><p>Start of your event:</p></strong>
                <DateTimePicker onChange={setStart} value={start} />

                
            </div>

            <div>

                <strong><p>End of your event:</p></strong>
                <DateTimePicker onChange={setEnd} value={end} />

                <EventControllers session={session} start={start} end={end} />

                
            </div>
        
        </>
    )
}


const EventControllers = ({start, end, session}) => {

    const [state, setState] = useState({
        eventName: "",
        eventDescription: ""
    })

    const setEventData = (e) => {
        const target = e.target

        setState({
            ...state,
            [target.name]: target.value
        })
    }
    const {eventName, eventDescription} = state

    const createCalendarEvent = async () => {

        const events = {
            summary: eventName,
            description: eventDescription,
            start: {
                dateTime: start.toISOString(),
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
            },
            end: {
                dateTime: end.toISOString(),
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
            },
        }


        await fetch(CalendarUrl, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + session.provider_token
            },
            body: JSON.stringify(events)
        })
        .then(data => {
            return data.json()
        })
        .then(data => {
            console.log(data);
            alert('Event created!')

            window.open('https://calendar.google.com/', '_blank');

            setState({
                ...state,
                eventName: '',
                eventDescription: ''
            })
        })
        .catch(e => {
            throw new Error(e)
        })

        
    


        

        
    }

   
   

    return (
        <div className="event-controllers">

            <h2>Set up your events</h2>

            <form onSubmit={(e) => e.preventDefault()} action="#">

                <div>
                        
                    <p><input className="form-control" onChange={setEventData} value={eventName} name="eventName" placeholder="Event Name" type="text" /></p>
                    <p><input className="form-control" onChange={setEventData} value={eventDescription} name="eventDescription" placeholder="Event Description" type="text" /></p>

                </div>

                <div>

                    <button  disabled={!eventName.length || !eventDescription.length} onClick={createCalendarEvent} className="btn btn-success">Add event in Calendar</button>
                    

                </div>

            </form>


        </div>
    )
}

export default TimePiker

