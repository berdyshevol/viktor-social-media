import { IMAGE_HEIGHT } from "../../config";

function Photo(props) {
  const { img, author } = props;

  return (
    <>
      <div className="image" style={{ height: IMAGE_HEIGHT }}>
        <img src={img} alt={author} />
      </div>
    </>
  );
}

export default Photo;
