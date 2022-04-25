import CategoryItem from "../category-item/category-item";
import "./directory.styles.scss";

export default function Directory({ categories }) {
  return (
    <section className="directory-container">
      {categories.map(category => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </section>
  );
}
