import React, { useState } from 'react';
import { View } from 'react-native';
import ObituarioForm from '../components/ObituarioForm';
import ObituarioList from '../components/ObituarioList';

const HomeScreen = () => {
  const [obituaries, setObituaries] = useState([]);

  const addObituary = (obituary) => {
    setObituaries([...obituaries, { ...obituary, id: Date.now() }]);
  };

  return (
    <View>
      <ObituarioForm onSubmit={addObituary} />
      <ObituarioList obituaries={obituaries} />
    </View>
  );
};

export default HomeScreen;
