import { z } from 'zod'
import { defineEventHandler } from 'h3'

const responseSchema = z.object({
  hello: z.string()
})

export default defineEventHandler(async (event) => {
  const response = {
    hello: 'world'
  }
  
  // Validate response
  return responseSchema.parse(response)
})