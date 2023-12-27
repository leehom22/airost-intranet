import React, { useEffect, useState } from 'react';
import './Events.css'
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import {ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, DragAndDrop, Resize} from '@syncfusion/ej2-react-schedule';

function Events() {
    const [dataSource, setDataSource] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/event/GetData');
                const data = await response.json();
                setDataSource(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const localData = {
        dataSource: [
            {
                Id: 1010,
                EndTime: new Date(2023, 11, 15, 2, 0),
                StartTime: new Date(2023, 11, 15, 1, 0),
                Location: "Cairo Lab",
                Subject: "Test 2",
            },
            {
                Id: 2020,
                EndTime: new Date(2023, 11, 10, 2, 0),
                StartTime: new Date(2023, 11, 10, 1, 0),
                Location: "Cairo Lab",
                Subject: "Test 1",
            },

            //fetch from collection
            

        ],
    };
    return ( <div className="eventsPage">
        <center><h1>Events</h1></center>
        <ScheduleComponent eventSettings={localData} height='750px'> 
        <ViewsDirective>
              <ViewDirective option="Day" />
              <ViewDirective option="Week" />
              <ViewDirective option="WorkWeek" />
              <ViewDirective isSelected option="Month" />
              <ViewDirective option="Agenda" />
            </ViewsDirective>

        <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]} />
      </ScheduleComponent> 
    </div> );
}

export default Events;