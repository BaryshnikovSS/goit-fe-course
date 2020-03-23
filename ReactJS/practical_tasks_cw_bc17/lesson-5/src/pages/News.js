import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from '../Components/search/Search'
import axios from "axios";

class News extends Component {
  state = {
    news: [],
    query: ""
  };

  async componentDidMount() {
    try {
      const data = await axios.get(
        "https://newsapi.org/v2/everything?q=cat&from=2020-01-11&sortBy=publishedAt&apiKey=ed5ebee752754cf7a93918ae83acba6f"
      );
      console.log(data);

      this.setState({
        news: data.data.articles
      });
    } catch (er) {
      console.log(er);
    }
  }

  componentDidUpdate(_, prevState) {
    if(prevState.query !== this.state.query) {

    }
  }

  onHandleSubmit = e => {
    e.preventDefault()
    const {input} = e.target.element
    this.setState({querry: input.value})
  }

  render() {
    const { news } = this.state;

    return (
      <>
        <Search onHandleSubmit={this.onHandleSubmit}/>
        <ul>
          {news.map(article => (
            <li key={article.publishedAt}>
              <Link
                to={{
                  pathname: `news/${article.publishedAt}`,
                  search: "?category=cat",
                  state: { isAuth: true, news, id: article.publishedAt }
                }}
              >
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default News;
