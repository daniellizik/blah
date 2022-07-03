import styled from '@emotion/styled';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { Icon } from '@tablecheck/tablekit-icon';
import { Item as KitItem } from '@tablecheck/tablekit-item';
import { Panel as KitPanel, PanelPosition } from '@tablecheck/tablekit-panel';
import * as React from 'react';
import { tciSun } from 'tablecheck-icons/tciSun';

type Props = {
  appearance: 'light' | 'dark';
  isOpen: boolean;
  toggleSidePanel: () => void;
  toggleAppearance: () => void;
};

const Panel = styled(KitPanel)`
  width: 300px;
  padding: 16px;
  z-index: 301;
`;

const Item = styled(KitItem)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
`;

export function SidePanel({
  appearance,
  isOpen,
  toggleSidePanel,
  toggleAppearance
}: Props): JSX.Element {
  const [ref, setRef] = React.useState<HTMLElement | null>(null);
  const onOutsideClickPanel = React.useCallback(
    (event) => {
      if (!ref?.contains(event.target)) {
        toggleSidePanel();
      }
    },
    [ref, toggleSidePanel]
  );

  return (
    <Panel
      onClickOutside={onOutsideClickPanel}
      ref={setRef}
      position={PanelPosition.Right}
      isOpen={isOpen}
    >
      <Item elemBefore={<Icon icon={faUser} />}>Hello, User</Item>
      <Item onClick={toggleAppearance} elemBefore={<Icon icon={tciSun} />}>
        Appearance: {appearance}
      </Item>
    </Panel>
  );
}
