// plugins/echo.client.ts
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

export default defineNuxtPlugin(() => {
  console.log('🔌 Loading echo.client.js');

  Pusher.logToConsole = true;

  window.Pusher = Pusher;


  const echo = new Echo({
    broadcaster: 'reverb',
    key: 'myuniqueappkey123',
    
    wsHost: 'api.safatapp.com',
    wsPort: 443,
    wssPort: 443,
    
    forceTLS: true,
    disableStats: true,
    enabledTransports: ['ws', 'wss'],
    
    authorizer: (channel: any) => {
      return {
        authorize: (socketId: string, callback: Function) => {
          console.log('📡 Authorizing channel:', channel.name, 'with socket:', socketId);
          
          fetch('https://api.safatapp.com/broadcasting/auth', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
              socket_id: socketId,
              channel_name: channel.name,
            }),
          })
          .then(response => {
            console.log('📡 Auth response:', response.status);
            return response.json();
          })
          .then(data => {
            console.log('✅ Auth success:', data);
            callback(null, data);
          })
          .catch(error => {
            console.error('❌ Auth error:', error);
            callback(error);
          });
        },
      };
    },
  });

  echo.connector.pusher.connection.bind('state_change', (states: any) => {
    console.log('🔄 State:', states.previous, '→', states.current);
  });

  echo.connector.pusher.connection.bind('connecting', () => {
    console.log('🔌 Connecting...');
  });

  echo.connector.pusher.connection.bind('connected', () => {
    console.log('✅ Connected! Socket ID:', echo.socketId());
  });

  echo.connector.pusher.connection.bind('failed', () => {
    console.error('❌ Connection FAILED');
  });

  echo.connector.pusher.connection.bind('error', (err: any) => {
    console.error('❌ Connection ERROR:', err);
  });

  echo.connector.pusher.connection.bind('unavailable', () => {
    console.error('❌ WebSocket UNAVAILABLE');
  });

  window.Echo = echo;

  console.log('📊 Initial state:', echo.connector.pusher.connection.state);

  return {
    provide: {
      echo
    }
  };
});