import { ReactNode } from "react";

interface TabButtonProps {
  children: ReactNode;
  onSelect: () => void;
}

function TabButton(props: TabButtonProps) {
  const { children, onSelect } = props;

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}

export default TabButton;
