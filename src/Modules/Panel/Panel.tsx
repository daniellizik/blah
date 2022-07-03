import styled from '@emotion/styled';
import { Panel as KitPanel } from '@tablecheck/tablekit-panel';
import * as React from 'react';

import { Props } from './types';

const StyledPanel = styled(KitPanel)`
  width: 100%;
  height: 40%;
  padding: 16px;
  overflow: hidden;
  box-shadow: 1px -8px 43px 3px ${({ theme }) => theme.colors.canvas};
`;

export function Panel({
  children,
  shouldToggleOnOutsideClick = true,
  toggle,
  ...props
}: Props): JSX.Element {
  const [ref, setRef] = React.useState<HTMLElement | null>(null);
  const onOutsideClickPanel = React.useCallback(
    (event) => {
      if (!ref?.contains(event.target)) {
        toggle();
      }
    },
    [ref, toggle]
  );

  return (
    <StyledPanel
      onClickOutside={
        shouldToggleOnOutsideClick ? onOutsideClickPanel : () => {}
      }
      ref={setRef}
      {...props}
    >
      {children}
    </StyledPanel>
  );
}
