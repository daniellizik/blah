import styled from '@emotion/styled';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp';
import { Icon } from '@tablecheck/tablekit-icon';
import { Size } from '@tablecheck/tablekit-theme';

import { Props } from 'Modules/Panel';

const Container = styled.div`
  height: 20px;
  background: transparent;
  position: relative;
`;

const Circle = styled.div`
  position: absolute;
  left: calc(50% - 10px);
  border-radius: 100%;
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  cursor: pointer;
  // box-shadow: 2px 4px 10px 5px ${({ theme }) => theme.colors.border};
  box-shadow: rgb(9 30 66 / 8%) 0px 0px 0px 1px,
    rgb(9 30 66 / 8%) 0px 2px 4px 1px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.2s ease;

  & svg {
    fill: ${({ theme }) => theme.colors.text};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    > svg {
      fill: ${({ theme }) => theme.colors.surface};
      color: ${({ theme }) => theme.colors.surface};
    }
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
`;

export function PanelExpander({
  toggle,
  isOpen,
  ...props
}: Props): JSX.Element {
  return (
    <Circle onClick={toggle} {...props}>
      <Icon size={Size.Small} icon={isOpen ? faChevronDown : faChevronUp} />
    </Circle>
  );
}
