import "./category-item.styles.scss";

export default function CategoryItem(props) {
  const { title, imageUrl } = props.category;
  return (
    <figure className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <figcaption className="category-container--info">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </figcaption>
    </figure>
  );
}
