import { ReactNode } from "react";

interface TabButtonProps {
  children: ReactNode;
  onSelect: () => void;
  isSelected: boolean;
}

function TabButton(props: TabButtonProps) {
  const { children, onSelect, isSelected } = props;

  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
