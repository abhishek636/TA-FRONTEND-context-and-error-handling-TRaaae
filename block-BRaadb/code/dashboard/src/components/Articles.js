import React from "react";
import { Link, withRouter } from "react-router-dom";
import articles from "../data/article.json";
import withSearch from "../components/withSearch";

function Articles (props) {
  // state = {
  //   searchTerm: ""
  // };
  // handleChange = ({ target: { value } }) => {
  //   this.setState({ searchTerm: value });
  // };
  
  let filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(props.searchTerm)
  );
  return (
    <>
      <input
        placeholder="Search"
        className="search"
        value={props.searchTerm}
        onChange={props.handleChange}
      />
      <ul  className="articles">
        {filteredArticles.map((article) => (
          <li>
            <Link to={"articles/" + article.slug}>
              <h3>{article.title}</h3>
            </Link>
            <small>{article.author}</small>
          </li>
        ))}
      </ul>
    </>
  );
  
}

export default withSearch(withRouter(Articles));