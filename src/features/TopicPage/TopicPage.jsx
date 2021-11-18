import { RightSidebar } from './RightSidebar';
import { TopicList } from './TopicList';
import styled from 'styled-components';

export const TopicPage = () => (
        <TopicPageContainer>
            <RightSidebar />
            <TopicList />
        </TopicPageContainer>
    );

const TopicPageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;