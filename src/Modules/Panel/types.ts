import { PanelProps } from '@tablecheck/tablekit-panel';

export type Props = PanelProps & {
  children?: React.ReactNode;
  isOpen: boolean;
  toggle: () => void;
  shouldToggleOnOutsideClick?: boolean;
};
