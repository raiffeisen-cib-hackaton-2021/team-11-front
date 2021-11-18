import { TopicCard } from "shared/ui/TopicCard/TopicCard";

export function MainPage() {
  return (
    <>
      {notifies.map(() => (
        <TopicCard />
      ))}
    </>
  );
}

const notifies = [1, 2, 3, 4, 5, 6, 7, 8];
