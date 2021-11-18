import styled from "styled-components";
import { format } from "date-fns";
import { Badge, Heading, Span, Whitespace } from "@fcc/ui";
import { CATEGORIES_CONFIG } from "../../../constants";

export const TopicCard = ({
  type,
  title = fishTitle,
  previewText = fishText,
} = {}) => {
  return (
    <CardWrapper>
      <CardHeader>
        <Badge color={CATEGORIES_CONFIG[type].color}>
          {CATEGORIES_CONFIG[type].title}
        </Badge>
        <Whitespace ml="s10">
          <Span>{format(new Date(), "dd.MM.yyyy")}</Span>
        </Whitespace>
      </CardHeader>
      <Heading margin="xl">{title}</Heading>
      <CardBody>{previewText}</CardBody>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  font-size: 16px;
  border-radius: 8px;
  padding: 24px;
  background-color: #ffffff;
  box-shadow: 0 8px 32px 0 rgb(0 0 0 / 8%);
  margin-bottom: 30px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const CardBody = styled.div`
  color: #808185;
  line-height: 26px;
  justify-content: flex-start;
`;

const fishText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris.`;

const fishTitle = "Lorem ipsum dolor sit amet";
