import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'mineral-ui/Button';
import Dialog from 'mineral-ui/Dialog';
import Select from 'mineral-ui/Select/Select';

import themes from '../themes';

const ThemePicker = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(theme);

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSave = () => {
    setTheme(selectedItem.value);
    handleClose();
  };

  const handleChange = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <Button onClick={toggleDialog}>Pick Theme</Button>
      <Dialog
        title="Select theme"
        actions={
          [
            {
              text: 'Cancel',
              onClick: handleClose,
            },
            {
              text: 'Save',
              onClick: handleSave,
            },
          ]
        }
        isOpen={isOpen}
        onClose={handleClose}
      >
        <Select
          data={themes}
          selectedItem={selectedItem}
          onChange={handleChange}
          aria-label="theme selector"
        />
      </Dialog>
    </>
  );
};

ThemePicker.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default ThemePicker;
