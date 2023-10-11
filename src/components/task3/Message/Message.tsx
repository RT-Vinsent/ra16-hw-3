import MessageProps from "../interface/messageProps";

export default function Message(props: MessageProps) {
  const { from, message } = props;

  return (
    <li id={message.id}>
      <div className="message-data">
        <span className="message-data-name"><i className="fa fa-circle online"></i>{from.name}</span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="message my-message">{message.text}</div>
    </li>
  )
}
