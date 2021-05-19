import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  TextInput,
  FlatList
} from 'react-native';
import { Button } from '../../components/Button';
import { SkillCard } from '../../components/SkillCard';

import styles from './styles'

interface SkillData {
  id: string;
  name: string
}

export function Home() {

  const [newSkill, setNewSkill] = useState('');
  const [gretting, setGretting] = useState('')
  const [skills, setSkills] = useState<SkillData[]>([]);

  function handleAddSkils() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }
    setSkills(oldState => [...oldState, data]);
    setNewSkill('');
  }

  useEffect(() => {
    const currentHour = new Date().getHours()

    if(currentHour < 12) {
      setGretting('Good Morning')
    } else if (currentHour >= 12 && currentHour < 18) {
      setGretting('Good afertnoon')
    } else {
      setGretting('Good night')
    }
  },[])

  return (
    <View style={styles.container} >
      <Text style={styles.title} >Welcome, Rennan!</Text>
      <Text style={styles.gretting}>
        {gretting}
      </Text>

      <TextInput 
        value={newSkill}
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddSkils}>
        Add
      </Button>     

      <Text style={[
        styles.title, 
        { marginVertical: 50 }
      ]}>
        My Skills
      </Text>

      <FlatList 
        data={skills}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        keyExtractor={skill => skill.id}
        renderItem = {({ item: skill }) => <SkillCard skill={skill.name} />}
      />
    </View>
  );
}