import React from "react";
import type { ScreenProps, NewsItem } from "../types";
import HeaderTitle from "../layout/HeaderTitle";

interface NewsDetailScreenProps extends ScreenProps {
  news: NewsItem;
}

const NewsDetailScreen: React.FC<NewsDetailScreenProps> = ({ goTo, news }) => (
  <div className="screen">
    <HeaderTitle
      title="Notícia"
      onBack={() => goTo("news")}  // volta sempre para a página de notícias
    />
    <article className="card">
      <img src={news.imageUrl} alt={news.title} className="news-image" />
      <div className="card-date">{news.date}</div>
      <h3 className="card-title">{news.title}</h3>
      <p className="card-text full">{news.content}</p>
    </article>
  </div>
);

export default NewsDetailScreen;
