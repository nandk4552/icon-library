import React, { useState } from "react";
import { Button, Card, Typography } from "antd";
import "./App.css";
import IconPicker from "./components/IconPicker/IconPicker";

const { Title, Text } = Typography;

function App() {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [pickerVisible, setPickerVisible] = useState(false);

  const handleIconSelect = (icon) => {
    setSelectedIcon(icon);
    setPickerVisible(false);
  };

  return (
    <div className="App">
      <Title
        level={2}
        style={{
          marginBottom: "1rem",
          textTransform: "uppercase",
        }}
      >
        Icon Library
      </Title>
      <Card
        className="icon-display"
        hoverable
        onClick={() => setPickerVisible(true)}
        style={{
          width: 120,
          height: 120,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        {selectedIcon || <Text type="secondary">Click to select an icon</Text>}
      </Card>
      <Button type="primary" onClick={() => setPickerVisible(true)}>
        Select Icon
      </Button>
      <IconPicker
        rowsInOnePage={4}
        columnsInOnePage={8}
        iconHeight={40}
        iconWidth={40}
        onSelect={handleIconSelect}
        visible={pickerVisible}
        onClose={() => setPickerVisible(false)}
      />
    </div>
  );
}

export default App;
