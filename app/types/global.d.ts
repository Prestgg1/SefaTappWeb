// Extend the Window interface to include the Pusher property
declare global {
  interface Window {
    Pusher: typeof import('pusher-js').default;
    Echo: import('laravel-echo').default;
  }
}

export {}; // This file needs to be a module
