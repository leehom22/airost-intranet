import './Events.css'

function Events() {
    return ( 
    <div className="eventsPage col">
        <h1 className='row justify-content-center'>Events page</h1>
        <div className='row justtify-content-center ps-5 pe-5'>
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%233F51B5&ctz=Asia%2FKuala_Lumpur&mode=MONTH&src=dXRtYWlyb3N0LmNhaXJvQGdtYWlsLmNvbQ&color=%234285F4"  width="800" height="600" frameborder="0"></iframe>
        </div>
    </div> );
}

export default Events;