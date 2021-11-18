import { TopicCard } from '../TopicCard/TopicCard';
import styled from 'styled-components';
import {FeedbackModal} from "../Modal/FeedbackModal";


const notifs = [1, 2, 3, 4, 5];
export const TopicList = () => (
        <NotificationsListContainer>
            <FeedbackModal/>
            {notifs.map(() => (
                <TopicCard />
            ))}
        </NotificationsListContainer>
    );

const NotificationsListContainer = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
