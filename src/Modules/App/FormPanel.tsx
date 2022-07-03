import styled from '@emotion/styled';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import {
  Button,
  ButtonColor,
  ButtonAppearance
} from '@tablecheck/tablekit-button';
import { Icon } from '@tablecheck/tablekit-icon';
import { Input, Label } from '@tablecheck/tablekit-input';
import { PanelPosition } from '@tablecheck/tablekit-panel';
import * as React from 'react';

import { Panel as BasePanel, Props } from 'Modules/Panel';

import { PanelExpander } from './PanelExpander';

enum Unit {
  Inches = 'inches',
  Feet = 'feet',
  Mm = 'millimeters',
  Cm = 'centimeters',
  Points = 'points'
}

const Panel = styled(BasePanel)`
  width: 100%;
  height: 50%;
  padding: 16px;
  overflow: initial;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.colors.border};
  position: absolute;
  bottom: 12px;
`;

const Expander = styled(PanelExpander)`
  position: absolute;
  bottom: -10px;
`;

const Collapser = styled(PanelExpander)`
  position: absolute;
  top: -10px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 12px;
  grid-row-gap: 12px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  & > * {
    text-transform: capitalize;
  }
`;

const GridItem = styled.div``;

const Units = styled.div`
  grid-row-start: 3;
  grid-column-start: 1;
  grid-column-end: 4;
`;

export function FormPanel({
  isOpen,
  toggle,
  shouldToggleOnOutsideClick
}: Props): JSX.Element {
  const [unit, setUnit] = React.useState<Unit | null>(null);
  const [isDoubleLockChecked, setDoubleLock] = React.useState<boolean>(false);

  return (
    <div>
      <Divider>
        <Expander isOpen={isOpen} toggle={toggle} />
      </Divider>

      <Panel
        shouldToggleOnOutsideClick={shouldToggleOnOutsideClick}
        toggle={toggle}
        position={PanelPosition.Bottom}
        isOpen={isOpen}
      >
        <Collapser isOpen={isOpen} toggle={toggle} />

        <Grid>
          <GridItem>
            <Label label="Width" />
            <Input type="number" />
          </GridItem>

          <GridItem>
            <Label label="Height" />
            <Input type="number" />
          </GridItem>

          <GridItem>
            <Label label="Depth" />
            <Input type="number" />
          </GridItem>

          <GridItem>
            <Label label="Overlap" />
            <Input type="number" />
          </GridItem>

          <GridItem>
            <Label label="Glue Flap" />
            <Input type="number" />
          </GridItem>

          <GridItem>
            <Label label="Paper Caliber" />
            <Input type="number" />
          </GridItem>

          <GridItem>
            <Label label="Double Lock" />
            <Button
              iconBefore={
                <Icon icon={isDoubleLockChecked ? faCheck : faTimes} />
              }
              onClick={() => setDoubleLock(!isDoubleLockChecked)}
              appearance={
                isDoubleLockChecked
                  ? ButtonAppearance.Solid
                  : ButtonAppearance.Outline
              }
              color={ButtonColor.Primary}
            >
              {isDoubleLockChecked ? 'Enabled' : 'Disabled'}
            </Button>
          </GridItem>

          <Units>
            <Label label="Unit of Measurement" />
            <ButtonGroup>
              {Object.values(Unit).map((unitValue) => (
                <Button
                  onClick={() => setUnit(unitValue)}
                  appearance={
                    unit === unitValue
                      ? ButtonAppearance.Solid
                      : ButtonAppearance.Outline
                  }
                  color={ButtonColor.Primary}
                >
                  {unitValue}
                </Button>
              ))}
            </ButtonGroup>
          </Units>
        </Grid>
      </Panel>
    </div>
  );
}
