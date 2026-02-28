import React from "react";
import type { ScreenProps, NewsItem } from "../types";
import { NEWS } from "../data";
import HeaderTitle from "../layout/HeaderTitle";

interface NewsScreenProps extends ScreenProps {
  onSelectNews: (news: NewsItem) => void;
}

export const NewsScreen: React.FC<NewsScreenProps> = ({ goTo, onSelectNews }) => (
  <div className="screen">
    <HeaderTitle title="Notícias" onBack={() => goTo("home")} />
    {NEWS.map((item: NewsItem) => (
      <article
        key={item.id}
        className="card clickable"
        onClick={() => onSelectNews(item)}
      >
        <div className="card-date">{item.date}</div>
        <h3 className="card-title">{item.title}</h3>
        <p className="card-text">{item.summary}</p>
      </article>
    ))}
  </div>
);

export default NewsScreen;
