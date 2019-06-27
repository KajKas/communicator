import { getMessages } from "../../static-data"

export default function messages(state = getMessages(20), action) {
  return state
}
