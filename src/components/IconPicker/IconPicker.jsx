import React, { useState } from "react";
import * as Icons from "react-icons/fi";
import { Modal, Button, Pagination } from "antd";
import "./IconPicker.css";

// Extract the icons into an array
const icons = Object.values(Icons);

const IconPicker = ({
  rowsInOnePage,
  columnsInOnePage,
  iconHeight,
  iconWidth,
  pickerHeight = 500,
  pickerWidth = 500,
  onSelect,
  visible,
  onClose,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const iconsPerPage = rowsInOnePage * columnsInOnePage;

  const handleIconClick = (Icon) => {
    onSelect(<Icon size={iconHeight} />);
    onClose(); // Close the modal after selecting an icon
  };

  const paginatedIcons = icons.slice(
    (currentPage - 1) * iconsPerPage,
    currentPage * iconsPerPage
  );

  return (
    <Modal
      title="Select App Icon"
      open={visible}
      onCancel={onClose}
      footer={null}
      width={pickerWidth}
      style={{ height: pickerHeight }}
    >
      <div
        className="icon-grid"
        style={{
          gridTemplateRows: `repeat(${rowsInOnePage}, ${iconHeight}px)`,
          gridTemplateColumns: `repeat(${columnsInOnePage}, ${iconWidth}px)`,
        }}
      >
        {paginatedIcons.map((Icon, index) => (
          <div
            key={index}
            className="icon-cell"
            onClick={() => handleIconClick(Icon)}
          >
            <Icon size={iconHeight} />
          </div>
        ))}
      </div>
      <Pagination
        current={currentPage}
        total={icons.length}
        pageSize={iconsPerPage}
        onChange={(page) => setCurrentPage(page)}
        style={{ textAlign: "center", marginTop: "16px" }}
      />
    </Modal>
  );
};

export default IconPicker;
