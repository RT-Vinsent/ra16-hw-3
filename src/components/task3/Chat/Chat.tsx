import MessageHistory from '../MessageHistory/MessageHistory';
import messages from '../data/messages';
import '../css/main.css'

export default function Chat() {
  return (
    <div className="clearfix container">
      <div className="chat">
        <div className="chat-history">
          <MessageHistory messages={messages} />
        </div>
      </div>
    </div>
  );
}
