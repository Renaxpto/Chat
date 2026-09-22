import { useEffect, useState } from "react";

type ChatListItem = { id: string; title: string };

interface ChatMenuProps {
  menuOpen: boolean;
  onSelectChat: (chatId: string) => void;
  onClose: () => void;
}

const ChatMenu: React.FC<ChatMenuProps> = ({ menuOpen, onSelectChat, onClose }) => {
  const [chats, setChats] = useState<ChatListItem[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}chat/index.json`)
      .then((r) => r.json())
      .then(setChats);
  }, []);

  const handleClick = (chatId: string) => {
    onSelectChat(chatId);
    onClose();
  };

  return (
    <>
      <nav className={`side-menu ${menuOpen ? "open" : ""}`}>
        <ul className="nav-list">
          {chats.map((c) => (
            <li key={c.id}>
              <button onClick={() => handleClick(c.id)}>
                <span>💬</span> {c.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {menuOpen && <div className="backdrop" onClick={onClose} />}
    </>
  );
};

export default ChatMenu;
