'use server'
 
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

const baseContext: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
  {
    role: 'system',
    content: `Extract
      city,
      state (formatted in two letter abbreviation),
      zip (formatted as five digit string),

      minBed,
      maxBed,
      minBath,
      maxBath,
      minPrice,
      maxPrice,
      minSqft,
      maxSqft,

      propertyType
      cats (boolean),
      dogs (boolean),
      parking (boolean),
      centralAir (boolean),
      laundry (boolean)
    from the user input. If some of the fields could not be extracted, do not include them in the final response. If none of the fields are extracted, return an empty object.

    The response should be formatted as a JSON object with the extracted fields. For example, if the user input is "I'm looking for a 2 bedroom apartment in Chicago, IL", the response should be:
    {
      "city": "Chicago",
      "state": "IL",
      "propertyType": "apartment",
      "minBed": 2,
      "maxBed": 2
    }
    `
  }
]
 
export async function createSearch(input: any) {
  const context = baseContext;
  const userInput = input.toString().trim()
  

  context.push({ role: 'user', content: userInput });
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: context
  })
  const responseMessage = response.choices[0].message
  context.push(responseMessage)
  console.log(responseMessage.content)
  // console.log(JSON.parse(responseMessage.content))
  return responseMessage.content
}