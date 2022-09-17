import "./Author.css";

function Author(props) {
  const { author } = props;
  return <div className="Author">{author}</div>;
}

export default Author;
