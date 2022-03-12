export const MySelect = ({ option, dafaultValue, value, onChange }) => {
  return (
    <select 
    value={value}
    onChange={event => onChange(event.target.value)}
    >
      <option disabled >
        {dafaultValue}
      </option>
      {option.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
