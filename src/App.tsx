import SiderbarSwitch from "./components/UI/SidebarSwitch/SidebarSwitch";
import MessageList from "./components/Message/MessageList/MessageList";
import { UserContextProvider } from "./components/context/UserContext";

const App: React.FC = () => {

  return (
    <div className="wrapper">
      <UserContextProvider>
        <div className="chat">
          <h1 className="chat__title">Chat application</h1>
          <p className="chat__switch-user">Switch user</p>
          <SiderbarSwitch />
          <MessageList />
        </div>
      </UserContextProvider>
    </div>
  );
}

export default App;
