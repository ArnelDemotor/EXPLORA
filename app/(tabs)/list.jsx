import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, TextInput, Animated, Modal, Button, ScrollView, Alert } from 'react-native';

const destinations = [
  {
    id: '1',
    name: 'Eiffel Tower, Paris',
    description: 'The Eiffel Tower, an iconic wrought-iron lattice tower in Paris, stands 1,083 feet tall and was completed in 1889. Originally criticized by some of France\'s leading artists and intellectuals, it has become a global cultural icon of France and one of the most recognizable structures in the world. Visitors can ascend to its various levels for stunning views of Paris, enjoy a meal at the restaurant on the first level, or explore the history of this architectural marvel through various exhibits.',
    image: 'https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg',
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Statue of Liberty, New York',
    description: 'The Statue of Liberty, a gift from France to the United States, was dedicated in 1886 and symbolizes freedom and democracy. Standing at 305 feet, it is located on Liberty Island in New York Harbor. Visitors can take a ferry to the island, explore the museum, and even climb to the crown for breathtaking views of the city skyline. The statue is a UNESCO World Heritage site and an enduring symbol of hope and opportunity for millions.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-JOGJtEYVDbgqJS4vqsRM6xtDbUXg_2XN0g&s',
    rating: 4.7,
  },
  {
    id: '3',
    name: 'Great Wall of China',
    description: 'The Great Wall of China is one of the most impressive architectural feats in history. Spanning over 13,000 miles, it was built over several dynasties to protect Chinese states from invasions. Construction began as early as the 7th century BC, and various sections were rebuilt and maintained through the centuries. Visitors can hike along the wall, experiencing breathtaking landscapes and a glimpse into China’s storied past. Certain sections, like Badaling and Mutianyu, are well-preserved and accessible for tourists.',
    image: 'https://justhistoryposts.com/wp-content/uploads/2017/07/great-wall-of-china-fact.jpg?w=1170',
    rating: 4.9,
  },
  {
    id: '4',
    name: 'Colosseum, Rome',
    description: 'The Colosseum, also known as the Flavian Amphitheatre, is an ancient Roman gladiatorial arena that dates back to AD 70-80. It is the largest amphitheater ever built and is considered one of the greatest works of Roman architecture and engineering. Capable of seating up to 80,000 spectators, it hosted gladiatorial contests, public spectacles, and dramas. Today, visitors can explore its ruins and learn about the history of ancient Rome and its people through guided tours and exhibits.',
    image: 'https://cdn.mos.cms.futurecdn.net/BiNbcY5fXy9Lra47jqHKGK-1200-80.jpg',
    rating: 4.8,
  },
  {
    id: '5',
    name: 'Sydney Opera House',
    description: 'The Sydney Opera House is an architectural masterpiece located on the Sydney Harbour. Designed by Danish architect Jørn Utzon, its unique sail-like design has made it one of the most recognizable buildings in the world. Opened in 1973, it is a multi-venue performing arts center that hosts over 1,500 performances annually. Visitors can take guided tours, attend a performance, or simply enjoy the stunning views of the harbour from the surrounding parkland.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsT8nI1D-kwg9szg31Ge6HHn5uGbNjzyWb0Q&s',
    rating: 4.7,
  },
  {
    id: '6',
    name: 'Big Ben, London',
    description: 'Big Ben is the nickname for the Great Bell of the clock at the north end of the Palace of Westminster in London. The clock tower, now officially named the Elizabeth Tower, was completed in 1859. Known for its iconic chimes and beautiful Gothic architecture, Big Ben has become a symbol of the United Kingdom. While the tower is currently undergoing renovations, visitors can still admire its grandeur from the outside and enjoy the views of the Houses of Parliament.',
    image: 'https://cdn.britannica.com/89/187589-004-9E6F1BB7/Workers-Big-Ben-London.jpg',
    rating: 4.6,
  },
  {
    id: '7',
    name: 'Machu Picchu, Peru',
    description: 'Machu Picchu, the Incan citadel set high in the Andes Mountains, is one of the most important archaeological sites in the world. Built in the 15th century, it was forgotten for centuries until its rediscovery in 1911. The site features remarkable stone structures, terraced fields, and breathtaking views. Hiking the Inca Trail to reach Machu Picchu is a popular adventure for many travelers, offering a glimpse into the rich history and culture of the Inca civilization.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqi-dOHJewgWadlyW80eVVhCtzQMLXL6o71A&s',
    rating: 4.9,
  },
  {
    id: '8',
    name: 'Taj Mahal, India',
    description: 'The Taj Mahal, a UNESCO World Heritage site, is a stunning ivory-white marble mausoleum located in Agra, India. Commissioned in 1632 by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, it is a masterpiece of Mughal architecture. The intricate carvings, reflective pools, and beautiful gardens create a serene atmosphere. Visitors can explore the complex, learn about its history, and marvel at its beauty, especially at sunrise and sunset when it appears to change color.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd85JMR2A8uc_l_-hV1dLCbTy3g9cXbN1fvg&s',
    rating: 4.9,
  },
  {
    id: '9',
    name: 'Santorini, Greece',
    description: 'Santorini, a picturesque island in the Aegean Sea, is famous for its stunning sunsets, white-washed buildings, and crystal-clear waters. Known for its volcanic history, the island offers breathtaking views from its cliffside towns, such as Oia and Fira. Visitors can explore ancient ruins, enjoy local cuisine, relax on beautiful beaches, or take boat trips to nearby islands. Santorini is a popular destination for honeymooners and anyone seeking a romantic getaway.',
    image: 'https://res.cloudinary.com/enchanting/q_70,f_auto,w_600,h_400,c_fit/ymt-web/2023/01/600x400-Santorini20Greece20Sunset.jpg',
    rating: 4.8,
  },
  {
    id: '10',
    name: 'Christ the Redeemer, Brazil',
    description: 'The Christ the Redeemer statue, located atop the Corcovado Mountain in Rio de Janeiro, is one of the most famous symbols of Brazil. Completed in 1931, this 98-foot-tall statue represents Jesus Christ with open arms, welcoming visitors from around the world. It offers panoramic views of the city, the Sugarloaf Mountain, and the beaches below. Visitors can take a train up the mountain and explore the surrounding Tijuca National Park while enjoying the stunning scenery.',
    image: 'https://www.fodors.com/wp-content/uploads/2022/07/HERO-shutterstock_1283692720.jpg',
    rating: 4.7,
  },
];

const TravelList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [scaleValue] = useState(new Animated.Value(1));
  const [selectedDestination, setSelectedDestination] = useState(null);

  const filteredDestinations = destinations.filter(destination =>
    destination.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePress = (destination) => {
    setSelectedDestination(destination);
  };

  const handleBook = () => {
    // Placeholder for booking functionality
    Alert.alert("Booking", "Your booking has been confirmed!");
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => handlePress(item)}>
      <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </Animated.View>
      <View style={styles.textContainer}>
        <Text style={styles.itemText}>{item.name}</Text>
        <Text style={styles.descriptionText}>{item.description}</Text>
        <Text style={styles.ratingText}>Rating: {item.rating} ★</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Destinations</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search destinations..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredDestinations}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.noResults}>No destinations found.</Text>}
      />
      {selectedDestination && (
        <Modal
          visible={true}
          animationType="slide"
          onRequestClose={() => setSelectedDestination(null)}
        >
          <ScrollView contentContainerStyle={styles.modalContainer}>
            <Image source={{ uri: selectedDestination.image }} style={styles.modalImage} />
            <Text style={styles.modalTitle}>{selectedDestination.name}</Text>
            <Text style={styles.modalDescription}>{selectedDestination.description}</Text>
            <Text style={styles.ratingText}>Rating: {selectedDestination.rating} ★</Text>
            <View style={styles.buttonContainer}>
              <Button title="Book" onPress={handleBook} />
              <Button title="Close" onPress={() => setSelectedDestination(null)} />
            </View>
          </ScrollView>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2c3e50',
  },
  searchInput: {
    height: 45,
    borderColor: '#bdc3c7',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  list: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 5,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  itemText: {
    fontSize: 22,
    color: '#34495e',
    fontWeight: '600',
  },
  descriptionText: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  ratingText: {
    fontSize: 16,
    color: '#f39c12',
    marginTop: 5,
  },
  noResults: {
    textAlign: 'center',
    fontSize: 18,
    color: '#e74c3c',
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  modalImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginVertical: 10,
  },
  modalDescription: {
    fontSize: 18,
    color: '#7f8c8d',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
});

export default TravelList;
