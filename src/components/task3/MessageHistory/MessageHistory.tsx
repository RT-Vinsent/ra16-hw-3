import Message from '../Message/Message';
import Response from '../Response/Response';
import Typing from '../Typing/Typing';
import { MessagesProps, Messages } from "../interface/messageProps";

export default function MessageHistory(props: MessagesProps) {
  const { messages } = props;
  if (messages.length === 0) return null;

  const messagesType = (message: Messages) => {
    const { id, time, text, from, type } = message;

    if (type === 'message') {
      return <Message key={id} from={from} message={{ id, time, ...(text && { text }) }} />
    }

    if (type === 'response') {
      return <Response key={id} from={from} message={{ id, time, ...(text && { text }) }} />
    }

    if (type === 'typing') {
      return <Typing key={id} from={from} message={{ id, time }} />
    }

    return null;
  }

  return (
    <ul>
      {messages.map(message => messagesType(message))}
    </ul>
  )
}


// export default function MessageHistory(props: MessagesProps) {
//   const { messages } = props;
//   if (messages.length === 0) return null;

//   return (
//     <ul>
//       {messages.map(message => {
//         const { id, time, text, from, type } = message;

//         switch (type) {
//           case 'response':
//             return <Response key={ id } from={from } message={{ id, time, ...(text && { text }) }} />
//           case 'message':
//             return <Message key={ id } from={from } message={{ id, time, ...(text && { text }) }} />
//           case 'typing':
//             return <Typing key={ id } from={from } message={{ id, time }} />
//           default:
//             return null;
//         }
//       })}
//     </ul>
//   )
// }
