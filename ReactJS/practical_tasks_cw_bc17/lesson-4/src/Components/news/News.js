import React, { Component } from "react";
// import axios from "axios";
import Spinner from "../../ui/spinner/Spinner";
import NewsArticles from "./newsArticles/NewsArticles";
import { fetchNews } from '../../fetcher';

class News extends Component {
  state = { articles: [], page: 1, loading: true };

  async componentDidMount() {
    try {
      const data = await fetchNews();
      this.setState({
        articles: data,
        loading: false,
      });
    } catch (er) {
      console.log(er);
    }
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.inputValue !== this.props.inputValue) {
      const data = await fetchNews(this.props.inputValue);
      this.setState({
        articles: data,
        loading: false,
      });
    }
  }

  handleNewsPage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { articles, loading } = this.state;

    return (
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {loading && <Spinner />}
        <NewsArticles
          data={articles}
          componentDidUpdate={this.componentDidUpdate}
        />
      </div>
    );
  }
}

export default News;
