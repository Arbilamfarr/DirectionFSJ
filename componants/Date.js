import React, { useState } from 'react';
import { View, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Date = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  return (
    <View>
      <Button onPress={showDatepicker} title="Show Date Picker" />
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default MyDatePicker;
