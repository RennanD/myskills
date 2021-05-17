import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity
} from 'react-native';

import styles from './styles'

export function Home() {

  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState([]);

  function handleAddSkils() {
    setSkills(oldState => [...oldState, newSkill])
  }

  return (
    <View style={styles.container} >
      <Text style={styles.title} >React Native</Text>
      <TextInput 
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleAddSkils}
      >
        <Text style={styles.buttonText} >Add</Text>
      </TouchableOpacity>

      <Text style={[
        styles.title, 
        { marginTop: 50 }
      ]}>
        My Skills
      </Text>

      {skills.map(skill => (
        <TouchableOpacity 
          key={skill}
          style={styles.buttonSkill}
        >
          <Text  
            style={styles.skill}
          >
            {skill}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
