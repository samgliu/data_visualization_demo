interface DropdownProps {
  options: any;
  id: any;
  selectedValue: string;
  onSelectedValueChange: any;
}
const Dropdown = ({
  options,
  id,
  selectedValue,
  onSelectedValueChange,
}: DropdownProps) => (
  <select
    id={id}
    onChange={(event) => onSelectedValueChange(event.target.value)}
  >
    {options.map(({ value, label }: any) => (
      <option
        key={value + label}
        value={value}
        selected={value === selectedValue}
      >
        {label}
      </option>
    ))}
  </select>
);
export default Dropdown;
