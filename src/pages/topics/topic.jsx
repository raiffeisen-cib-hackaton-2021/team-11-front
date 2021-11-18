import { useParams } from "react-router-dom";
import { TaxView } from "features/topics/ui/TaxView";

const viewMap = {
  tax: TaxView,
};

export function Topic() {
  const params = useParams();
  const View = viewMap[params.topic];

  if (View === undefined) {
    return null;
  }

  return <View data={[1, 2, 4, 5]} />;
}
