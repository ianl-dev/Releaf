// React-native frontend
import React, {useState, useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Card, Chip, Title} from 'react-native-paper';

import {styles} from '../../../styles/form-style';
import {ScrollView} from 'react-native-gesture-handler';
import {ShowInstructables} from '../art/ShowInstructables';

export default function SelectTags({navigation}) {
  // All the tags the user can select
  var tags = [
    'plastic-bags',
    'glass',
    'battery',
    'newspaper',
    'paper',
    'cardboard',
    'plastic-bottle',
    'fabric',
    'rubber',
    'clothes',
    'wax',
    'plastic-bottles',
    'can',
    'book',
    'CD',
    'container',
    'lead',
    'metal',
    'wood',
    'plastic',
    'tube',
  ];

  // Use hook to keep track of chosen tags
  const [chosen, setChosen] = useState([]);
  const [dummy, setDummy] = useState(1);

  // Select by highlighting tags
  function onChosen(value) {
    let copy = chosen.slice();
    // Avoid duplicate by checking
    if (!copy.includes(value)) {
      copy.push(value);
    } else {
      copy = copy.filter((item) => item != value);
    }
    // don't add arrays together or you string yourself
    setChosen(copy);
  }

  // Weird alert: do not setState(state) even after you have changed state because react will not rerender
  // Why? It compares by the name, since the new and the old share the same name, it assumes that they are
  // not changed and are equal, this is similar to how react virtual dom works

  function onHighlight(value) {
    return chosen.includes(value);
  }

  // Setting key allows react to stay more keen on keeping tracking of your lists, not setting yields warning
  // arrow function, creates an empty function that points to a function you already defined
  return (
    <SafeAreaView style={styles.container}>
      <View>
        {tags.map((x) => (
          <Chip
            mode="outlined"
            key={x}
            selected={onHighlight(x)}
            onPress={() => onChosen(x)}>
            {x}
          </Chip>
        ))}
      </View>
    </SafeAreaView>
  );
}
