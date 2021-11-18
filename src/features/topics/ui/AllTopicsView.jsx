import { TopicCard } from "shared/ui/TopicCard/TopicCard";
import { CATEGORIES } from "../../../constants";

export function AllTopicsView(props) {
  return (
    <>
      {props.data.map((info) => (
        <TopicCard info={info} type={CATEGORIES.ALL} />
      ))}
    </>
  );
}
