import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const ObituarioForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <View>
      <Text>Nombre</Text>
      <TextInput value={name} onChangeText={setName} />
      <Text>Descripción</Text>
      <TextInput value={description} onChangeText={setDescription} />
      <Button title="Guardar" onPress={() => onSubmit({ name, description })} />
    </View>
  );
};

export default ObituarioForm;
