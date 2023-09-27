import crypto from 'crypto'

export const userIdHash = () => {
   const apiKey = process.env.AIROPS_API_KEY || ""
   const userId = process.env.AIROPS_USER_ID || ""

   // Convert your api key to a buffer
   const key = Buffer.from(apiKey, 'utf-8')

   // Hash the message using HMAC-SHA256 and the key
   const hash = crypto.createHmac('sha256', key).update(userId).digest('hex')

   return hash
}
