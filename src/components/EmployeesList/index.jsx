import './styles.css';
import React, { useState } from 'react';

export const EmployeesList = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [employeeSurname, setEmployeeSurname] = useState('');
  const [employeesList, setEmployeesList] = useState([]);
  const [validationError, setValidationError] = useState('');

  const validateInputValue = (value) => value.trim();

  const addEmployee = (e) => {
    e.preventDefault()

    if (!validateInputValue(employeeName) || !validateInputValue(employeeSurname)) {
      setValidationError('Name and surname should be fill in');
      return;
    }

    setValidationError('')

    const id = Math.random().toFixed(5);

    setEmployeesList((list) => [{ name: employeeName, surname: employeeSurname, id }, ...list]);

    setEmployeeName('')
    setEmployeeSurname('')
  };

  const removeEmployee = (employeeId) => {
    setEmployeesList((list) => list.filter(({ id }) => id !== employeeId)
    );
  };

  const isAddingDisabled = employeesList.length >= 5;

  return (
    <div className="employees-wrapper">
      <form
        className="employees-input-container"
        onSubmit={addEmployee}
      >
        <input
          placeholder="Name"
          type="text"
          value={employeeName}
          onChange={(evt => setEmployeeName(evt.target.value))}
        />
        <input
          placeholder="Surname"
          type="text"
          value={employeeSurname}
          onChange={(evt) => setEmployeeSurname(evt.target.value)}
        />
        <button disabled={isAddingDisabled} onClick={addEmployee}>Add Employee</button>
      </form>

      <div className="table-container">
        <div className="table-item table-header">Pracownicy</div>
        {employeesList.map(({ name, surname, id }) => (
          <React.Fragment key={id}>
            <div className="table-item">
              <p>{name}</p>
            </div>
            <div className="table-item">
              <p>{surname}</p>
              <button onClick={() => removeEmployee(id)} className="remove-btn">R</button>
            </div>
          </React.Fragment>
        ))}
      </div>
      {validationError && (
        <p>{validationError}</p>
      )}
    </div>
  );
};
