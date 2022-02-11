import { useEffect, useState } from "react";

export const useSSNFields = () => {
  const [ssnValues, setValue] = useState({
    ssn1: "",
    ssn2: "",
    ssn3: "",
  });

  return {
    handleChange: (e) => {
      const { maxLength, value, name } = e.target;
      const [fieldName, fieldIndex] = name.split("-");

      // Check if they hit the max character length
      if (value.length >= maxLength) {
        // Check if it's not the last input field
        if (parseInt(fieldIndex, 10) < 3) {
          // Get the next input field
          const nextSibling = document.querySelector(`input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`);

          // If found, focus the next field
          if (nextSibling !== null) {
            nextSibling.focus();
          }
        }
      }

      setValue({
        ...value,
        [`ssn${fieldIndex}`]: value,
      });
    },
  };
};
