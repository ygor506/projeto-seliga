// 1. IMPORT
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// 2. FUNÇÃO APP (Componente Principal)
const HelloWorldApp = () => {
  // 3. RETURN
  return (
    // Componente View (Container que ocupa a tela toda)
    <View style={styles.container}>
      {/* Componente Text (Exibe o texto "Olá Mundo") */}
      <Text style={styles.text}>Olá Mundo</Text>
    </View>
  );
};

// 4. STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz com que ocupe a tela inteira (Tela branca)
    backgroundColor: '#fff', 
    alignItems: 'center', 
    justifyContent: 'center', // Centraliza o texto "Olá Mundo"
  },
  text: {
    fontSize: 24, 
    color: '#000', 
  },
});

// 5. EXPORT
export default HelloWorldApp;