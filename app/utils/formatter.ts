export function formatTime(time: string) {
  const date = new Date(time)
  return date.toLocaleString('az-AZ', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  })
} 