import React from 'react';
import './app.css'

import LongPulling from './LongPulling';
import EventSourcing from './EventSourcing';
import WebSock from "./WebSock";

function App() {
  return (
    <div>
     {/* <LongPulling/> */}
     {/* <EventSourcing/> */}
     <WebSock/>
    </div>
  );
}

export default App;
