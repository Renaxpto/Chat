import React, { useState } from "react";
import "./App.css";
import type { Screen, NavFn, ScreenProps, NewsItem, EventItem } from "./types";

import Topbar from "./layout/Topbar";
/* import SideMenu from "./layout/SideMenu";
 */
import { HomeScreen } from "./screens/HomeScreen";
import { NewsScreen } from "./screens/NewsScreen";
import { EventsScreen } from "./screens/EventsScreen";
import ContactsScreen from "./screens/ConversasScreen";
import ChatScreen from "./screens/ChatScreen";
import { ServicesScreen } from "./screens/ServicesScreen";
import { RequestsListScreen } from "./screens/RequestsListScreen";
import { RequestFormScreen } from "./screens/RequestFormScreen";
import { PaymentsScreen } from "./screens/PaymentsScreen";
import { TransparencyScreen } from "./screens/TransparencyScreen";
import { DocumentsScreen } from "./screens/DocumentsScreen";
import { TourismScreen } from "./screens/TourismScreen";
import { ReportScreen } from "./screens/ReportScreen";
import NewsDetailScreen from "./screens/NewsDetailScreen";
import EventDetailScreen from "./screens/EventDetailScreen";
import { OnlineContactScreen } from "./screens/OnlineContact";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [, setHistory] = useState<Screen[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const goTo: NavFn = (next) => {
    setHistory((prev) => (screen === next ? prev : [...prev, screen]));
    setScreen(next);
    setMenuOpen(false);
  };

  const goBack = () => {
    setHistory((prev) => {
      if (prev.length === 0) {
        setScreen("home");
        setMenuOpen(false);
        return prev;
      }
      const newHistory = [...prev];
      const last = newHistory.pop()!;
      setScreen(last);
      setMenuOpen(false);
      return newHistory;
    });
  };

  const goHome = () => {
    setScreen("home");
    setHistory([]);
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const openNewsDetail = (news: NewsItem) => {
    setSelectedNews(news);
    setScreen("newsDetail");
    setMenuOpen(false);
  };

  const openEventDetail = (event: EventItem) => {
    setSelectedEvent(event);
    setScreen("eventDetail");
    setMenuOpen(false);
  };

  const handleLogin = () => setIsAuthenticated(true);

  const handleLogout = () => {
    setIsAuthenticated(false);
    setScreen("home");
    setMenuOpen(false);
    setSelectedNews(null);
    setSelectedEvent(null);
    setHistory([]);
  };

  const goToProfile = () => goTo("profile");

  const screenProps: ScreenProps = { goHome, goBack, goTo };
const [selectedChatId, setSelectedChatId] = useState<string | null>(null);

  const renderScreen = () => {
    switch (screen) {
      case "news":
        return <NewsScreen {...screenProps} onSelectNews={openNewsDetail} />;

      case "newsDetail":
        return selectedNews ? (
          <NewsDetailScreen {...screenProps} news={selectedNews} />
        ) : (
          <NewsScreen {...screenProps} onSelectNews={openNewsDetail} />
        );

      case "events":
        return <EventsScreen {...screenProps} onOpenDetail={openEventDetail} />;

      case "eventDetail":
        return selectedEvent ? (
          <EventDetailScreen {...screenProps} event={selectedEvent} />
        ) : (
          <EventsScreen {...screenProps} onOpenDetail={openEventDetail} />
        );

      case "contacts":
  return (
    <ContactsScreen
      {...screenProps}
      onOpenChat={(id) => {
        setSelectedChatId(id);
        goTo("chat");
      }}
    />
  );

case "chat":
  return selectedChatId ? (
    <ChatScreen {...screenProps} chatId={selectedChatId} />
  ) : (
    <ContactsScreen
      {...screenProps}
      onOpenChat={(id) => {
        setSelectedChatId(id);
        goTo("chat");
      }}
    />
  );


      case "onlineContact":
        return <OnlineContactScreen {...screenProps} />;

      case "services":
        return <ServicesScreen {...screenProps} />;

      case "requestsList":
        return <RequestsListScreen {...screenProps} />;

      case "requestForm":
        return <RequestFormScreen {...screenProps} />;

      case "payments":
        return <PaymentsScreen {...screenProps} />;

      case "transparency":
        return <TransparencyScreen {...screenProps} />;

      case "documents":
        return <DocumentsScreen {...screenProps} />;

      case "tourism":
        return <TourismScreen {...screenProps} />;

      case "report":
        return <ReportScreen {...screenProps} />;

      case "profile":
        return <ProfileScreen {...screenProps} onLogout={handleLogout} />;

      case "home":
      default:
        return <HomeScreen goTo={goTo} onSelectNews={openNewsDetail} />;
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="app">
        <main className="main">
          <LoginScreen onLogin={handleLogin} />
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <Topbar onToggleMenu={toggleMenu} goHome={goHome} onProfileClick={goToProfile} />
{/*       <SideMenu menuOpen={menuOpen} goTo={goTo} onClose={closeMenu} />
 */}      <main className="main">{renderScreen()}</main>
    </div>
  );
};

export default App;
