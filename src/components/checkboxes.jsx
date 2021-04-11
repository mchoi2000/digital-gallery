import { useState } from 'react';
import { Checkbox, CheckboxLabel } from './styles';

const getDefaultCheckboxes = (list) =>
  list.map(checkbox => ({
    name: checkbox,
    checked: false,
  }));

export function useCheckboxes(list) {
  const [checkboxes, setCheckboxes] = useState(getDefaultCheckboxes(list));

  function setCheckbox(index, checked) {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index].checked = checked;
    setCheckboxes(newCheckboxes);
  }
  return {
    setCheckbox,
    checkboxes,
  };
}

export function Checkboxes({ checkboxes, setCheckbox }) {
  return (
    <>
      {checkboxes.map((checkbox, i) => (
        <CheckboxLabel>
          <Checkbox
            type="checkbox"
            checked={checkbox.checked}
            onChange={e => {
              setCheckbox(i, e.target.checked);
            }}
          />
          {checkbox.name}
        </CheckboxLabel>
      ))}
    </>
  );
}