import { Savings, Microphone, Entertainment2, WarningTr } from '@fcc/icons';
import styled from 'styled-components';

export const RightSidebar = () => {
    return (
        <SidebarWrapper>
            <SidebarContainer>
                <ItemsContainer>
                    <SidebarItem>
                        <IconWrapper>
                            <Savings />
                        </IconWrapper>
                        Налоги
                    </SidebarItem>
                    <SidebarItem>
                        <IconWrapper>
                            <Microphone />
                        </IconWrapper>
                        Новости
                    </SidebarItem>
                    <SidebarItem>
                        <IconWrapper>
                            {' '}
                            <Entertainment2 />
                        </IconWrapper>
                        Поздравления
                    </SidebarItem>
                    <SidebarItem>
                        <IconWrapper>
                            <WarningTr />
                        </IconWrapper>
                        Внимание
                    </SidebarItem>
                    {/*<SidebarItem>Item 5</SidebarItem>*/}
                    {/*<SidebarItem>Item 6</SidebarItem>*/}
                    {/*<SidebarItem>Item 7</SidebarItem>*/}
                </ItemsContainer>
            </SidebarContainer>
        </SidebarWrapper>
    );
};

const SidebarWrapper = styled.div`
    min-width: 220px;
    width: 220px;
    position: sticky;
    top: 100px;
    left: 0;
`;

const SidebarContainer = styled.div`
    padding: 20px 0;
    width: 100%;
`;

const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: absolute;
`;
const SidebarItem = styled.div`
    display: flex;
    align-items: center;
    height: 44px;
    width: 100%;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 3px;
    border-radius: 8px;
    padding: 0 20px;

    :hover {
        background: #E9EAEA;
    }
    :active {
        background: #AAABAD;
    }
`;

const IconWrapper = styled.div`
    margin-right: 16px;
`;
