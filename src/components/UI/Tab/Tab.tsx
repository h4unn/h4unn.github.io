type propsType = {
  isSelected: boolean;
  onSelect: () => void;
  badgeCaption: string;
  children: React.ReactNode;
};
export default function Tab({
  isSelected,
  onSelect,
  badgeCaption,
  children,
}: propsType) {
  return (
    <li>
      <button
        className={isSelected ? "selected" : undefined}
        onClick={onSelect}
      >
        {children}
        <Badge key={badgeCaption} caption={badgeCaption}></Badge>
      </button>
      {isSelected && (
        <motion.div layoutId="tab-indicator" className="active-tab-indicator" />
      )}
    </li>
  );
}
