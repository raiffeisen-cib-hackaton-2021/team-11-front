import styled from "styled-components";
import { format } from "date-fns";
import { Badge, Heading, Span, Whitespace } from "@fcc/ui";
import { Dislike, Like } from "@fcc/icons";
import { CATEGORIES_CONFIG } from "../../../constants";
import { useState } from "react";

const votedIds = {
  like: "like",
  dislike: "dislike",
};

export const TopicCard = ({
  type,
  title = fishTitle,
  previewText = fishText,
} = {}) => {
  const [voted, setVoted] = useState("");

  // надо будет лайки с постов также с бэка получать
  const handleVoted = (id) => () => {
    setVoted(id);
  };
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
      <CardFooter>
        <IconWrapper
          voted={voted === votedIds.dislike}
          onClick={handleVoted(votedIds.dislike)}
        >
          <Dislike size="l" />
        </IconWrapper>
        <IconWrapper
          voted={voted === votedIds.like}
          onClick={handleVoted(votedIds.like)}
        >
          <Like size="l" />
        </IconWrapper>
      </CardFooter>
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

const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 20px 0 0;
`;

const IconWrapper = styled.div`
  margin-left: 16px;
  color: ${({ voted }) => (voted ? "#2b2d33" : "#aaabad")};
  cursor: pointer;
  transition: all 200ms ease-out;

  :hover {
    color: #404247;
  }
`;
const fishText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris.`;

const fishTitle = "Lorem ipsum dolor sit amet";
