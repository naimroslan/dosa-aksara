import { ActionFunctionArgs, json } from "@remix-run/node";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const submittedToAction = Object.fromEntries(formData)
  const payload = JSON.parse(submittedToAction.dosaForm as string)
  const source = submittedToAction?.source

  // const response = await dosaRegistration(payload)
  // const parsed = parseDosaRegistration(response!)

  console.log("request in resource route", request)
  console.log("submittedToAction", submittedToAction)
  console.log("payload", payload)
  console.log("source", source)
  // console.log("registrationForm response", response)
  // console.log("parsedResponse", parsed)

  return json({
    // response: response?.data,
    // parsedResponse: parsed,
    source: source,
    payload: payload
  })
}