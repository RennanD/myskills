import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput,
} from 'react-native';
import { Button } from '../../components/Button';
import { SkillCard } from '../../components/SkillCard';

import styles from './styles'

export function Home() {

  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState([]);

  function handleAddSkils() {
    setSkills(oldState => [...oldState, newSkill]);
    setNewSkill('');
  }

  return (
    <View style={styles.container} >
      <Text style={styles.title} >React Native</Text>
      <TextInput 
        value={newSkill}
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddSkils} />      

      <Text style={[
        styles.title, 
        { marginVertical: 50 }
      ]}>
        My Skills
      </Text>

      {skills.map(skill => (
        <SkillCard key={skill} skill={skill} />
      ))}
    </View>
  );
}
