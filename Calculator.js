import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const handleNumberPress = (num) => {
    if (waitingForNewValue) {
      setDisplay(String(num));
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };

  const handleOperationPress = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForNewValue(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return firstValue / secondValue;
      default:
        return secondValue;
    }
  };

  const handleEquals = () => {
    if (operation && previousValue !== null) {
      const inputValue = parseFloat(display);
      const newValue = calculate(previousValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  const handleDecimal = () => {
    if (waitingForNewValue) {
      setDisplay('0.');
      setWaitingForNewValue(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.calculator}>
        {/* Display */}
        <View style={styles.displayContainer}>
          <Text style={styles.display} numberOfLines={1} adjustsFontSizeToFit>
            {display}
          </Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonsContainer}>
          {/* Row 1 */}
          <View style={styles.row}>
            <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={handleClear}>
              <Text style={styles.buttonText}>AC</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperationPress('/')}>
              <Text style={styles.buttonText}>÷</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperationPress('*')}>
              <Text style={styles.buttonText}>×</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperationPress('-')}>
              <Text style={styles.buttonText}>−</Text>
            </TouchableOpacity>
          </View>

          {/* Row 2 */}
          <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(7)}>
              <Text style={styles.buttonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(8)}>
              <Text style={styles.buttonText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(9)}>
              <Text style={styles.buttonText}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.operatorButton, styles.plusButton]} onPress={() => handleOperationPress('+')}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>

          {/* Rows 3-5 with tall equals button */}
          <View style={styles.bottomSection}>
            <View style={styles.leftColumn}>
              {/* Row 3 */}
              <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(4)}>
                  <Text style={styles.buttonText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(5)}>
                  <Text style={styles.buttonText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(6)}>
                  <Text style={styles.buttonText}>6</Text>
                </TouchableOpacity>
              </View>

              {/* Row 4 */}
              <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(1)}>
                  <Text style={styles.buttonText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(2)}>
                  <Text style={styles.buttonText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(3)}>
                  <Text style={styles.buttonText}>3</Text>
                </TouchableOpacity>
              </View>

              {/* Row 5 */}
              <View style={styles.row}>
                <TouchableOpacity style={[styles.button, styles.zeroButton]} onPress={() => handleNumberPress(0)}>
                  <Text style={styles.buttonText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleDecimal}>
                  <Text style={styles.buttonText}>.</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Tall equals button */}
            <TouchableOpacity style={[styles.button, styles.equalsButton, styles.equalsButtonTall]} onPress={handleEquals}>
              <Text style={styles.buttonText}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
  },
  calculator: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  displayContainer: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  display: {
    fontSize: 64,
    color: '#FFFFFF',
    fontWeight: '300',
  },
  buttonsContainer: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftColumn: {
    flex: 3,
    marginRight: 5,
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: '400',
  },
  clearButton: {
    backgroundColor: '#A6A6A6',
  },
  operatorButton: {
    backgroundColor: '#FF9500',
  },
  plusButton: {
    backgroundColor: '#FF9500',
  },
  equalsButton: {
    backgroundColor: '#FF9500',
  },
  equalsButtonTall: {
    flex: 1,
    marginLeft: 5,
    marginRight: 0,
    height: 260,
  },
  zeroButton: {
    flex: 2,
  },
});

export default Calculator;
