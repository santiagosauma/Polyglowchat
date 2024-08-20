import { ChatEngine } from "react-chat-engine"

import ChatFeed from "./components/ChatFeed"

import './App.css'

const App = () => {
    return (
        <ChatEngine 
            height = "100vh"
            projectID = "20167b8a-062c-48b4-9e11-d8b66d7b9948"
            userName = "dummy"
            userSecret = "Pepelarana"
            renderChatFeed = {(chatAppProps) => <ChatFeed {... chatAppProps}/>}
        />
    )
}

export default App;