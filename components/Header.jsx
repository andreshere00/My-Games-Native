import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function Header(props) {
    return (
      <Text style={styles.header}>
        {props.text}
      </Text>
    );
}

const styles = StyleSheet.create({
  header:{color:'red', textAlign:'center', fontSize:25, padding:30}
});