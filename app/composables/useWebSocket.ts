import { ref, onUnmounted } from 'vue'

export function useWebSocket(url: string) {
  const socket = ref<WebSocket | null>(null)
  const messages = ref<any[]>([])
  const isConnected = ref(false)

  const connect = () => {
    socket.value = new WebSocket(url)

    socket.value.onopen = () => {
      isConnected.value = true
      console.log('✅ WebSocket connected')
    }

    socket.value.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        messages.value.push(data)
      } catch {
        messages.value.push(event.data)
      }
    }

    socket.value.onclose = () => {
      isConnected.value = false
      console.log('❌ WebSocket disconnected, reconnecting in 3s...')
      setTimeout(connect, 3000)
    }

    socket.value.onerror = (err) => {
      console.error('WebSocket error:', err)
    }
  }

  const send = (data: any) => {
    if (socket.value?.readyState === WebSocket.OPEN) {
      socket.value.send(JSON.stringify(data))
    }
  }

  onUnmounted(() => {
    socket.value?.close()
  })

  connect()

  return { socket, messages, isConnected, send }
}

// ✅ Add this export for strong typing
export type UseWebSocketReturn = ReturnType<typeof useWebSocket>
