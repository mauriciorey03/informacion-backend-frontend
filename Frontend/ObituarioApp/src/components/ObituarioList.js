import React from 'react';
import { View, Text, FlatList } from 'react-native';

const ObituarioList = ({ obituaries }) => {
  return (
    <FlatList
      data={obituaries}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.name}</Text>
          <Text>{item.description}</Text>
        </View>
      )}
    />
  );
};

export default ObituarioList;
