import React, {useEffect, useState} from 'react';
import axios from "axios";

const LongPulling = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log('useEffect');
    subscribe();
  }, [messages])

  const subscribe = async () => {
    console.log('subscribe');
    try {
        const { data } = await axios.get('http://localhost:4000/get-messages');
        console.log('data', data);
        setMessages(prev => [ data, ...prev ]);
        // await subscribe();
    } catch (error) {
        console.log('error', error);
        setTimeout(() => {
            subscribe();
        }, 500);
    }
  };

  const sendMessage = async () => {
    await axios.post('http://localhost:4000/new-messages', {
        message: value,
        id: Date.now()
    })
}

return (
  <div className="center">
      <div>
          <div className="form">
              <input value={value} onChange={e => setValue(e.target.value)} type="text"/>
              <button onClick={sendMessage}>Отправить</button>
          </div>
          <div className="messages">
              {messages.map(mess =>
                  <div className="message" key={mess.id}>
                      {mess.message}
                  </div>
              )}
          </div>
      </div>
  </div>
);
};

export default LongPulling;