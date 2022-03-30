/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
//import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
 

const App = () => {
 
  const [我1, set我1] = useState('');//новое значение
  const [我2, set我2] = useState('');//старое значение
  const [apperand, setApperand] = useState('');//апперанд
  

  return (
    <SafeAreaView flex={1} backgroundColor="#F5ECBF">
      <View flex={1} style={styles.ContainerUp} padding={10} flexDirection = 'row'>
        <View>
        <Text style={[styles.ContainerTextOld]}>{我2}</Text>
        <Text style={[styles.ContainerTextWrite]}>{我1}</Text>
        </View>
        <View> 
        <Text style={[styles.ContainerTextWrite]}>{apperand}</Text>
        </View>
      </View>

      <View flex={7}>
        <View style={styles.ContainerRow}>
          <TouchableOpacity
            style={styles.ContainerButton}
            onPressOut={() => {
             set我1(我1.slice(0, -1));
            }}>
            <Text style={styles.ContainerText}>DEL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ContainerButton}
            onPressOut={() => {
                            set我1(''), set我2('');setApperand('');
            }}>
            <Text style={styles.ContainerText}>C</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ContainerRow}>
          <TouchableOpacity
            style={styles.ContainerButton}
            onPressOut={() => {
              set我1(我1 + '1');
            }}>
            <Text style={styles.ContainerText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ContainerButton}
            onPressOut={() => {
              set我1(我1 + '2');
            }}>
            <Text style={styles.ContainerText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ContainerButton}
            onPressOut={() => {
              set我1(我1 + '3');
            }}>
            <Text style={styles.ContainerText}>3</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ContainerRow}>
          <TouchableOpacity
            style={styles.ContainerButton}
            onPressOut={() => {
              set我1(我1 + '4');
            }}>
            <Text style={styles.ContainerText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ContainerButton}
            onPressOut={() => {
              set我1(我1 + '5');
            }}>
            <Text style={styles.ContainerText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ContainerButton}
            onPressOut={() => {
              set我1(我1 + '6');
            }}>
            <Text style={styles.ContainerText}>6</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ContainerRow}>
          <TouchableOpacity
            style={styles.ContainerButton}
            onPressOut={() => {
              set我1(我1 + '7');
            }}>
            <Text style={styles.ContainerText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ContainerButton}
            onPressOut={() => {
              set我1(我1 + '8');
            }}>
            <Text style={styles.ContainerText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ContainerButton}
            onPressOut={() => {
              set我1(我1 + '9');
            }}>
            <Text style={styles.ContainerText}>9</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ContainerRow}>
          <TouchableOpacity
            style={styles.ContainerButton}
            onPressOut={() => {
              //+
              if(我1.length != 0){
                if(apperand == "+" &  我2 != ''){
                  set我2((Number(我2)+Number(我1)))
                  set我1('')
                }
                else if(我2 == ''){
                  set我2(我1);
                  set我1('')
                }
              setApperand('+');
            }
            else if(apperand != ''){
              setApperand('+')
            }
          }  
            }>
            <Text style={styles.ContainerText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ContainerButton}
            onPressOut={() => {
              //+
              if(我1.length != 0)
              set我1(我1 + '0');             
            }}>
            <Text style={styles.ContainerText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ContainerButton}
            onPressOut={() => {
              //-
              if(我1.length != 0){
                if(apperand == "-" &  我2 != ''){
                  set我2((Number(我2)-Number(我1)))
                  set我1('')
                }
                else if(我2 == ''){
                  set我2(我1);
                  set我1('')
                }
                setApperand('-');
              }
              else if(apperand != ''){
                setApperand('-')
              }
            }}>
            <Text style={styles.ContainerText}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ContainerRow}>
           <TouchableOpacity
            style={styles.ContainerButton}
            onPressOut={() => {
              //+
              if(我1.length != 0){
                if(apperand == "/" &  我2 != ''){
                  set我2((Number(我2)/Number(我1)))
                  set我1('')
                }
                else if(我2 == ''){
                  set我2(我1);
                  set我1('')
                }
              setApperand('/');
            }
            else if(apperand != ''){
              setApperand('/')
            }
          }  
            }>
            <Text style={styles.ContainerText}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.ContainerButton}
            onPressOut= {()=>{
              if(apperand == "+"){
              set我2((Number(我1)+Number(我2)))
              set我1('')
            setApperand('')}
              else if(apperand == "-"){
                set我2((Number(我2)-Number(我1)))
                set我1('')
                setApperand('')
              }
              else if(apperand == "*"){
                set我2((Number(我2)*Number(我1)))
                set我1('')
                setApperand('')       
              }
              else if(apperand == "/"){
                set我2((Number(我2)/Number(我1)))
                set我1('')
                setApperand('')       
              }
              if(我1 == '')
              set我1(我2)
            }}>
            <Text style={styles.ContainerText}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ContainerButton}

            onPressOut={() => {
              //+
              if(我1.length != 0){
                if(apperand == "*" &  我2 != ''){
                  set我2((Number(我2)*Number(我1)))
                  set我1('')
                }
                else if(我2 == ''){
                  set我2(我1);
                  set我1('')
                }
              setApperand('*');
            }
            else if(apperand != ''){
              setApperand('*')
            }
          }  
            }>
            <Text style={styles.ContainerText}>*</Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ContainerUp: {
    backgroundColor: '#F5D8BF',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },

  ContainerRow: {
    flex: 1,
    flexDirection: 'row',
    padding: 4,

  },
  ContainerButton: {
    flex: 1,
    backgroundColor: '#B2BFDD',
    alignItems: 'center',
    borderRadius: 100,
    padding: 30,
    borderColor: 'black',
  },
  ContainerTextWrite: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,

    //backgroundColor: 'red',
  },
  ContainerTextOld: {
    color: 'silver',
    fontSize: 15,
  },
});

export default App;
