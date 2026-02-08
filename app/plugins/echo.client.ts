import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

export default defineNuxtPlugin(() => {
    console.log('loading echo.client.js');
    const config = useRuntimeConfig();
    // Set up Pusher on the window
    window.Pusher = Pusher;
    
    // Initialize Echo
    const echo = new Echo({
        broadcaster: 'reverb',
        key: 'myuniqueappkey123',
        wsHost: '192.168.1.70',
        wsPort: 8080,
        wssPort: 443,
        forceTLS: false,
        enabledTransports: ['ws'],
        authorizer: (channel: any) => {
            return {
              authorize: (socketId: string, callback: Function) => {
                fetch(`http://192.168.1.70:8000/broadcasting/auth`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                  },
                  credentials: 'include', // Cookie'leri gönder
                  body: JSON.stringify({
                    socket_id: socketId,
                    channel_name: channel.name,
                  }),
                })
                  .then(response => response.json())
                  .then(data => {
                    callback(null, data);
                  })
                  .catch(error => {
                    callback(error);
                  });
              },
            };
          },
    });
    
    // Make Echo available globally
    window.Echo = echo;
    
    // Log connection status
    console.log('Echo connection status:', echo.connectionStatus());
    
    // Provide echo to the Nuxt app
    return {
        provide: {
            echo
        }
    };
});
