import React from 'react';
import { View, Text, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import styles from './MainScreenStyels';  // Assuming styles are imported from a separate file

const MainScreen = () => {
  return (
    <View style={styles.main_screen}>
      
      {/* Display Section */}
      <ScrollView style={styles.main_screen_display}> 
        <Text style={styles.main_screen_display_text}>123</Text> 
      </ScrollView>

      {/* Keypad Section */}
      <View style={styles.main_screen_keypad}>
        
        {/* First Row of Buttons */}
        <View style={styles.main_screen_keypad_row}>
          <Pressable>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button} >AC</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.btn_outer}>
              <Text style={styles.bg1_button}>()</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.btn_outer}>
              <Text style={styles.bg1_button}>+</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.btn_outer}>
              <Text style={styles.bg1_button}>%</Text>
            </View>
          </Pressable>
        </View>

        {/* Second Row of Buttons */}
        <View style={styles.main_screen_keypad_row}>
          <Pressable>
            <TouchableOpacity>
            <View style={styles.btn_outer}>
              <Text style={styles.bg1_button}>7</Text>
            </View>
            </TouchableOpacity>
          </Pressable>
          <Pressable>
            <View style={styles.btn_outer}>
              <Text style={styles.bg1_button}>8</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.btn_outer}>
              <Text style={styles.bg2_button}>9</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.btn_outer}>
              <Text style={styles.bg1_button}>*</Text>
            </View>
          </Pressable>
        </View>

        {/* Third Row of Buttons */}
        <View style={styles.main_screen_keypad_row}>
          <Pressable>
            <View style={styles.btn_outer}>
              <Text style={styles.bg1_button}>4</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.btn_outer}>
              <Text style={styles.bg1_button}>5</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.btn_outer}>
              <Text style={styles.bg1_button}>6</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.btn_outer}>
              <Text style={styles.bg1_button}>/</Text>
            </View>
          </Pressable>
        </View>

        {/* Continue adding more rows as necessary */}
        
      </View>

    </View>
  );
}






export default MainScreen;
