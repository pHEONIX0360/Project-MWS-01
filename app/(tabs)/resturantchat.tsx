// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { Audio } from 'expo-av';

// interface Message {
//   id: string;
//   type: 'query' | 'reply';
//   text: string;
//   audio: string;
//   correct?: boolean;
// }

// interface Scenario {
//   id: string;
//   heading: string;
//   image: string;
//   question: string;
//   options: { id: string; text: string; correct: boolean; audio: string }[];
// }

// const scenarios: Scenario[] = [
//   {
//     id: '1',
//     heading: 'SCENARIO :  You and your Friends are in a restaurant waiting to order, and the waiter comes by.',
//     image: require('@/assets/images/waiter.png'),
//     question: 'Good evening, everyone! How may I assist you today?',
//     options: [
//       { id: 'r1', text: 'Good morning. What’s the time now?', correct: false, audio: 'r1' },
//       { id: 'r2', text: 'Good evening. Could we see the menu, please?', correct: true, audio: 'r2' },
//       { id: 'r3', text: 'I don’t need help.', correct: false, audio: 'r3' },
//     ],
//   },
//   {
//     id: '2',
//     heading: 'SCENARIO :  The waiter hands you the menu and is ready to take your order.',
//     image: require('@/assets/images/waiter.png'),
//     question: 'Here’s the menu. May I take your order?',
//     options: [
//       { id: 'rr1', text: 'No, thank you. The weather is nice.', correct: false, audio: 'r5' },
//       { id: 'rr2', text: 'Yes, please. I’ll have a garden salad and a lemonade.', correct: true, audio: 'r4' },
//       { id: 'rr3', text: 'I want food. Eating', correct: false, audio: 'r6' },
//     ],
//   },
//   {
//     id: '3',
//     heading: 'SCENARIO :  The waiter informs you about the salad ingredients.',
//     image: require('@/assets/images/waiter.png'),
//     question: 'The salad includes onions. Would you like them removed?',
//     options: [
//       { id: 'rrr1', text: 'Yes, that’s fine. Thank you for asking.', correct: true, audio: 'r7' },
//       { id: 'rrr2', text: 'No, the chair is comfortable.', correct: false, audio: 'r8' },
//       { id: 'rrr3', text: 'Why are you asking me?', correct: false, audio: 'r9' },
//     ],
//   },
//   {
//     id: '4',
//     heading: 'SCENARIO :  The waiter asks if you need anything else.',
//     image: require('@/assets/images/waiter.png'),
//     question: 'Is there anything else I can bring you?',
//     options: [
//       { id: 'rrrr1', text: 'I like tables.', correct: false, audio: 'r12' },
//       { id: 'rrrr2', text: 'Bring me what you want.', correct: false, audio: 'r11' },
//       { id: 'rrrr3', text: 'Could I get some extra water, please?', correct: true, audio: 'r10' },


//     ],
//   },
//   {
//     id: '5',
//     heading: 'SCENARIO :  The waiter asks if you’d like to pay the bill.',
//     image: require('@/assets/images/waiter.png'),
//     question: 'Would you like the bill now?',
//     options: [
//       { id: 'rrrrr1', text: 'Yes, please. Thank you for your service', correct: true, audio: 'r13' },
//       { id: 'rrrrr2', text: 'No, I don’t like paying money.', correct: false, audio: 'r14' },
//       { id: 'rrrrr3', text: 'Why are you looking at me?', correct: false, audio: 'r15' },
//     ],
//   },
// ];




// const audioFiles: Record<string, any> = {
//   r1: require('audio/r1.mp3'),
//   r2: require('audio/r2.mp3'),
//   r3: require('audio/r3.mp3'),

//   r4: require('audio/r4.mp3'),
//   r5: require('audio/r5.mp3'),
//   r6: require('audio/r6.mp3'),

//   r7: require('/audio/r7.mp3'),
//   r8: require('audio/r8.mp3'),
//   r9: require('audio/r9.mp3'),

//   r10: require('audio/r10.mp3'),
//   r11: require('audio/r11.mp3'),
//   r12: require('audio/r12.mp3'),

//   r13: require('audio/r13.mp3'),
//   r14: require('audio/r14.mp3'),
//   r15: require('audio/r15.mp3'),

//   q1: require('audio/q1.mp3'),
//   q2: require('audio/q2.mp3'),
//   q3: require('audio/q3.mp3'),
//   q4: require('audio/q4.mp3'),
//   q5: require('audio/q5.mp3'),
//   // Add other audio files as needed
// };

// const ChatGame = () => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showResult, setShowResult] = useState(false);
//   const [currentSound, setCurrentSound] = useState<Audio.Sound | null>(null);

//   const chatListRef = useRef<FlatList>(null);

//   // useEffect(() => {
//   //   playAudio(`q${scenarios[currentScenarioIndex].id}`);
//   // }, [currentScenarioIndex]);

//   useEffect(() => {
//     playAudio(`q${scenarios[currentScenarioIndex].id}`);
//   }, [currentScenarioIndex]);
  
//   useEffect(() => {
//     // Autoplay the first question's audio on component mount
//     // playAudio(`q${scenarios[0].id}`);
//      playAudio(`q1`);

//   }, []);
  

//   const playAudio = async (file: string, onFinish?: () => void) => {
//     try {
//       // Stop and unload the previous sound if it exists
//       if (currentSound) {
//         await currentSound.stopAsync();
//         await currentSound.unloadAsync();
//       }
  
//       // Load the new sound
//       const { sound } = await Audio.Sound.createAsync(audioFiles[file]);
//       setCurrentSound(sound);
  
//       // Set up playback status for when the audio finishes
//       if (onFinish) {
//         sound.setOnPlaybackStatusUpdate((status) => {
//           if (status.isLoaded && status.didJustFinish) {
//             onFinish();
//           }
//         });
//       }
  
//       // Play the sound
//       await sound.playAsync();
//     } catch (error) {
//       // console.error('');
//     }
//   };
  
  
//   const handleReply = (option: { id: string; text: string; correct: boolean; audio: string }) => {
//     const currentScenario = scenarios[currentScenarioIndex];
  
//     setMessages((prev) => [
//       ...prev,
//       { id: `${currentScenario.id}-q`, type: 'query', text: currentScenario.question, audio: `q${currentScenario.id}` },
//       { id: `${option.id}-r`, type: 'reply', text: option.text, audio: option.audio, correct: option.correct },
//     ]);
  
//     playAudio(option.audio, () => {
//       if (currentScenarioIndex < scenarios.length - 1) {
//         setCurrentScenarioIndex((prev) => prev + 1);
//         playAudio(`q${scenarios[currentScenarioIndex + 1].id}`);
//       } else {
//         setShowResult(true);
//       }
//     });
  
//     if (option.correct) {
//       setScore((prev) => prev + 1);
//     }
  
//     chatListRef.current?.scrollToEnd({ animated: true });
//   };
  

//   const handleRestart = () => {
//     setMessages([]);
//     setCurrentScenarioIndex(0);
//     setScore(0);
//     setShowResult(false);
//   };

//   const getResultMessage = (score: number, total: number) => {
//     const percentage = (score / total) * 100;
//     if (percentage === 100) {
//       return "Excellent! You're a natural! 🎉🥇";
//     } else if (percentage >= 80) {
//       return "Great job! Keep up the good work! 👏🌟";
//     } else if (percentage >= 60) {
//       return "Well done! Room for improvement. 👍😊";
//     } else {
//       return "Nice try! Let's practice more. 💪🔁";
//     }
//   };

//   const currentScenario = scenarios[currentScenarioIndex];

//   return (
//     <View style={styles.container}>
//       {showResult ? (
//         <View style={styles.resultContainer}>
//           <Text style={styles.resultScore}>Your Score: {score}/{scenarios.length}</Text>
//           <Text style={styles.resultMessage}>{getResultMessage(score, scenarios.length)}</Text>
//           <TouchableOpacity style={styles.button} onPress={handleRestart}>
//             <Text style={styles.buttonText}>Try Again</Text>
//           </TouchableOpacity>
//         </View>
//       ) : (
//         <>
//           <Text style={styles.heading}>{currentScenario.heading}</Text>
//           <Image 
//             source={currentScenario.image} 
//             style={styles.image} 
//             resizeMode="contain"
//           />

//           <FlatList
//             ref={chatListRef}
//             data={messages}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => (
//               <View
//                 style={[
//                   styles.message,
//                   item.type === 'query' ? styles.query : styles.reply,
//                   item.type === 'reply' && item.correct !== undefined && (item.correct ? styles.correct : styles.incorrect),
//                 ]}>
//                 <Text style={styles.messageText}>{item.text}</Text>
//               </View>
//             )}
//             contentContainerStyle={styles.chatContainer}
//           />

//           <View style={styles.currentQuestionContainer}>
//             <TouchableOpacity style={styles.questionContainer} onPress={() => playAudio(`q${currentScenario.id}`)}>
//               <Text style={styles.questionText}>{currentScenario.question}</Text>
//             </TouchableOpacity>

//             <View style={styles.optionsContainer}>
//               {currentScenario.options.map((option) => (
//                 <TouchableOpacity
//                   key={option.id}
//                   style={styles.optionButton}
//                   onPress={() => handleReply(option)}>
//                   <Text style={styles.optionText}>{option.text}</Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           </View>
//         </>
//       )}
//     </View>
//   );
// };

// export default ChatGame;



// const styles = StyleSheet.create({
//   currentQuestionContainer: {
//     marginBottom: 20,
//   },
//     container: {
//       flex: 1,
//       backgroundColor: '#232B2B',
//       padding: 20,
//     },
//     heading: {
//       fontSize: 18,
//       fontWeight: 'bold',
//       textAlign: 'center',
//       marginBottom: 10,
//       color: '#fff',
//     },
//     // image: {
//     //   width: '100%',
//     //   height: 250,
//     //   resizeMode: 'contain',
//     //   marginBottom: 10,
//     // },
//     image: {
//       width: '100%',
//       height: 200,
//       resizeMode: 'contain',
//       marginBottom: 10,
//       borderWidth: 0.1, // Thickness of the border
//       borderColor: 'rgba(255, 255, 255, 0.8)', // White neon-like color
//       borderRadius: 40, // Rounded edges (optional)
//       shadowColor: 'rgba(19, 9, 126, 0.8)', // White shadow color
//       shadowOffset: { width: -5, height: 14 }, // Position of the shadow
//       shadowOpacity: 0.7, // Transparency of the shadow
//       shadowRadius: 40, // Blurriness of the shadow
//       elevation: 10, // Required for Android shadow
//     },
//     questionContainer: {
//       padding: 10,
//       backgroundColor: '#8a2be2',
//       borderRadius: 30,
//       marginBottom: 10,
//       marginRight:30,
//       borderTopLeftRadius:10,
//       borderBottomLeftRadius:30,
//       shadowColor: 'rgba(19, 9, 126, 0.8)', // White shadow color
//       shadowOffset: { width: -5, height: 14 }, // Position of the shadow
//       shadowOpacity: 0.3, // Transparency of the shadow
//       shadowRadius: 10, // Blurriness of the shadow
//     },
//     questionText: {
//       fontSize: 18,
//       fontWeight: 'bold',
//       color: '#fff',
//     },
//     chatContainer: {
//       flexGrow: 1,
//       marginVertical: 10,
//     },
//     message: {
//       marginVertical: 5,
//       padding: 10,
//       borderRadius: 8,
//     },
//     query: {
//       backgroundColor: '#e1f5fe',
//       alignSelf: 'flex-start',
//     },
//     reply: {
//       backgroundColor: '#c8e6c9',
//       alignSelf: 'flex-end',
//     },
//     correct: {
//       backgroundColor: '#d4edda',
//     },
//     incorrect: {
//       backgroundColor: 'rgba(242, 55, 52, 0.8)',
//     },
//     messageText: {
//       fontSize: 16,
//     },
//     optionsContainer: {
//       flexDirection: 'column',
//       alignItems: 'center',
//       marginTop: 10,
//     },
//     optionButton: {
//       backgroundColor: 'rgba(79, 198, 172, 0.8)',
//       padding: 10,
//       borderRadius: 25,
//       marginBottom: 10,
  
//       borderBottomRightRadius: 0,
//       marginLeft:80,
  
//       width: '90%',
//     },
//     optionText: {
//       color: '#fff',
//       fontSize: 18,
//       textAlign: 'center',
//       fontWeight: 'bold',

//     },
//     resultText: {
//       fontSize: 40,
//       marginBottom: 20,
//     },
//     button: {
//       backgroundColor: '#1976d2',
//       padding: 10,
//       borderRadius: 5,
//       marginVertical: 5,
//     },
//     buttonText: {
//       color: '#fff',
//       fontSize: 16,
//     },
//     resultContainer: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#232B2B', // Match the game background
//     },
//     resultScore: {
//       fontSize: 32,
//       fontWeight: 'bold',
//       color: '#FFFFFF',
//       marginBottom: 20,
//     },
//     resultMessage: {
//       fontSize: 24,
//       textAlign: 'center',
//       color: '#FFFFFF',
//       marginBottom: 30,
//       paddingHorizontal: 20,
//     },
//   });