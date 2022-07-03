import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import { ThemeProvider } from '@tablecheck/tablekit-theme';
import * as React from 'react';

import { ArtBoard } from 'Modules/ArtBoard';
import { global, dark, light } from 'Modules/Theme';
import { TopNav } from 'Modules/TopNav';

import { FormPanel } from './FormPanel';
import { SidePanel } from './SidePanel';

import './setup';

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background: ${({ theme }) => theme.colors.surface};
`;

export function App(): JSX.Element {
  const [appearance, setAppearance] = React.useState<'light' | 'dark'>('light');
  const [isSidePanelOpen, seSidePanel] = React.useState<boolean>(false);
  const [isFormOpen, setFormPanel] = React.useState<boolean>(false);
  const isDark = appearance === 'dark';

  return (
    <ThemeProvider theme={isDark ? dark : light} isDark={isDark}>
      <Global styles={global} />
      <Container>
        <TopNav toggleSideNav={() => seSidePanel(!isSidePanelOpen)} />
        <ArtBoard />
        <SidePanel
          data-testid="side panel"
          toggleAppearance={() =>
            setAppearance(appearance === 'light' ? 'dark' : 'light')
          }
          appearance={appearance}
          toggleSidePanel={() => seSidePanel(!isSidePanelOpen)}
          isOpen={isSidePanelOpen}
        />
        <FormPanel
          toggle={() => setFormPanel(!isFormOpen)}
          isOpen={isFormOpen}
          data-testid="form panel"
          shouldToggleOnOutsideClick={false}
        />
      </Container>
    </ThemeProvider>
  );
}
