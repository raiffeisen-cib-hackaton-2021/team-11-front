import { TopicCard } from "features/TopicCard/TopicCard";

export function TaxView(props) {
  return (
    <div>
      {props.data.map((info) => (
        <TopicCard info={info} />
      ))}
    </div>
  );
}
