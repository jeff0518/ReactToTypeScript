import "../index.css";

export interface CoreConceptProps {
  title: string;
  description: string;
  image: string;
}

function CoreConcept(props: CoreConceptProps) {
  const { title, description, image } = props;
  return (
    <>
      <li>
        <img src={image} alt="image" />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    </>
  );
}

export default CoreConcept;
