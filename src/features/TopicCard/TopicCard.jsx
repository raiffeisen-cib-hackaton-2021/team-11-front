import styled from 'styled-components';
import { format } from 'date-fns';
import { Badge } from '@fcc/ui';

export const TopicCard = () => {
    return (
        <CardWrapper>
            <CardHeader>
                <NotificationTag color='miami30'>Налоги</NotificationTag>
                <NotificationData>{format(new Date(), 'dd.MM.yyyy')}</NotificationData>
            </CardHeader>
            <CardTitle>Lorem ipsum dolor sit amet</CardTitle>
            <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </CardBody>
        </CardWrapper>
    );
};

const CardWrapper = styled.div`
    border-radius: 8px;
    width: 90%;
    padding: 24px;
    background-color: #ffffff;
    margin-top: 24px;
    box-shadow: 0 8px 32px 0 rgb(0 0 0 / 8%);
`;

const CardHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 12px;
`;

const CardTitle = styled.div`
    margin-bottom: 12px;
    font-weight: bold;
    color: #2b2d33;
    font-size: 24px;
    line-height: 30px;
`;

const CardBody = styled.div`
    color: #808185;
    font-size: 16px;
    line-height: 26px;
    justify-content: flex-start;
`;

const NotificationTag = styled(Badge)`
    font-size: 16px;
    margin-right: 16px;
`;

const NotificationData = styled.div`
    font-size: 16px;
    color: #55575c;
`;
