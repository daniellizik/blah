import styled from '@emotion/styled';
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { Button, ButtonAppearance } from '@tablecheck/tablekit-button';
import { Icon } from '@tablecheck/tablekit-icon';

type Props = {
  toggleSideNav: () => void;
};

const Container = styled.div`
  height: 50px;
  padding: 0 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0px 8px 50px 0px ${({ theme }) => theme.colors.surfaceLow};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

export function TopNav({ toggleSideNav }: Props): JSX.Element {
  return (
    <Container>
      <Title>Dieline</Title>

      <div>
        <Button
          appearance={ButtonAppearance.Subtle}
          iconBefore={<Icon icon={faBell} />}
        />

        <Button
          appearance={ButtonAppearance.Subtle}
          onClick={toggleSideNav}
          iconBefore={<Icon icon={faUser} />}
        />
      </div>
    </Container>
  );
}
