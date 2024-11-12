import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image, Linking } from 'react-native';
import React, { useState } from 'react';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const destinations = [
    { 
      name: 'Paris', 
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/15/6d/d6/paris.jpg?w=1400&h=1400&s=1', 
      description: 'The city of lights, known for its art, fashion, and culture. Experience the magic of the Eiffel Tower and the charm of Montmartre.' 
    },
    { 
      name: 'New York', 
      image: 'https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg', 
      description: 'The Big Apple, famous for its skyline and vibrant city life. Visit Times Square, Central Park, and enjoy Broadway shows.' 
    },
    { 
      name: 'Tokyo', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXlSi-lKXieIiTqaWM7GqGLiunVAiIflSKDxp0NIEzibp5A8K46PtdFAMZcF2zaniuJRY&usqp=CAU', 
      description: 'A bustling metropolis blending tradition with modernity. Explore ancient temples, futuristic technology, and delectable cuisine.' 
    },
    { 
      name: 'Barcelona', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJdndfLtmLwTgQAIj7cYaefBhz-hFSJNwnQ&s', 
      description: 'Known for its art and architecture, particularly the works of Gaudí. Wander through the stunning Park Güell and Sagrada Familia.' 
    },
    { 
      name: 'Rome', 
      image: 'https://www.planetware.com/photos-large/I/italy-rome-colosseum-and-arch-of-constantine.jpg', 
      description: 'The Eternal City, rich in history and culture. Discover the Colosseum, Vatican City, and indulge in authentic Italian cuisine.' 
    },
    { 
      name: 'Sydney', 
      image: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2015/09/sydney-tourist-attractions.jpg', 
      description: 'Famous for its Sydney Opera House and stunning harbor. Enjoy breathtaking views from the Sydney Harbour Bridge and relax at Bondi Beach.' 
    },
    { 
      name: 'Berlin', 
      image: 'https://i.pinimg.com/736x/1f/c0/72/1fc072e838cf89bdeeb50bdedb44be56.jpg', 
      description: 'A city with a vibrant culture, history, and nightlife. Visit the Berlin Wall, Brandenburg Gate, and enjoy the local art scene.' 
    },
    { 
      name: 'Rio de Janeiro', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkkGLQDRdqFgHBmxtTkgWFqa8-7gknH95Epg&s', 
      description: 'Known for its stunning beaches and Carnival festival. Experience the vibrant culture and breathtaking views from Christ the Redeemer.' 
    },
    { 
      name: 'Moscow', 
      image: 'https://static.toiimg.com/photo/msid-83890076,width-96,height-65.cms', 
      description: 'The capital of Russia, known for its historical architecture. Explore the Kremlin, Red Square, and the beautiful St. Basil’s Cathedral.' 
    },
    { 
      name: 'Cairo', 
      image: 'https://media.cntraveler.com/photos/655cdf1d2d09a7e0b27741b5/16:9/w_2560%2Cc_limit/Cairo%2520Egypt_GettyImages-1370918272.jpg', 
      description: 'Home to the ancient pyramids and rich history. Visit the Egyptian Museum and take a cruise on the Nile River.' 
    },
    { 
      name: 'Bangkok', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNHcbf7Dl_qOOIOtcML1EguZ7Af_8NhaIlRQ&s', 
      description: 'A vibrant city known for its street life and cultural landmarks. Experience the Grand Palace, Wat Pho, and delicious street food.' 
    },
    { 
      name: 'Singapore', 
      image: 'https://www.holidify.com/images/cmsuploads/compressed/81006913541dffec2cb1o_20230201130725.jpg', 
      description: 'A global financial hub with a tropical climate and multicultural population. Discover Gardens by the Bay and the Marina Bay Sands.' 
    },
  ];

  const trendingDeals = [
    { 
      name: 'Dubai', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjPqgDmxrY--K2UpPnXf1Oj1tkx9qzk1lBg&s', 
      description: 'Experience luxury shopping, ultramodern architecture, and a lively nightlife. Don’t miss the Burj Khalifa and the Dubai Mall.' 
    },
    { 
      name: 'London', 
      image: 'https://cdn.uniacco.com/blog/wp-content/uploads/2019/12/09124221/17-tourists-places-to-visit-in-london.jpg', 
      description: 'The capital city of England, rich in history and culture. Explore the British Museum, Tower of London, and enjoy a West End show.' 
    },
    { 
      name: 'Istanbul', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXKiT1xleqJy6KRIy5BjwSAh3viaoimh03A&s', 
      description: 'A city straddling Europe and Asia, known for its historic sites. Visit the Hagia Sophia, Grand Bazaar, and take a Bosphorus cruise.' 
    },
    { 
      name: 'Los Angeles', 
      image: 'https://i.insider.com/5e1f9b0a3ac0c945d909cc67?width=600&format=jpeg&auto=webp', 
      description: 'Home of Hollywood, known for its entertainment industry. Visit Universal Studios, Hollywood Walk of Fame, and beautiful beaches.' 
    },
    { 
      name: 'Cape Town', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIC3V3ZuZJBmSlpZ_cDKJzWlfWtzG8bWfDCg&s', 
      description: 'Known for its harbor and natural setting in the Cape Floristic Region. Explore Table Mountain and the scenic Cape of Good Hope.' 
    },
  ];

  const filteredDestinations = searchQuery
    ? destinations.filter(destination =>
        destination.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : destinations; // Show all destinations if there's no search query

  const handleSeeMore = () => {
    Linking.openURL('https://yourwebsite.com/more-destinations'); // Replace with your website link
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Discover Your Next Adventure</Text>
      
      <TextInput 
        style={styles.searchBar} 
        placeholder="Search destinations..." 
        placeholderTextColor="#888" 
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      
      <Text style={styles.sectionTitle}>Recommended for You</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.destinationsContainer}>
        {filteredDestinations.map((destination, index) => (
          <TouchableOpacity key={index} style={styles.destinationCard}>
            <Image source={{ uri: destination.image }} style={styles.image} />
            <Text style={styles.destinationName}>{destination.name}</Text>
            <Text style={styles.destinationDescription}>{destination.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Trending Deals</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.destinationsContainer}>
        {trendingDeals.map((deal, index) => (
          <TouchableOpacity key={index} style={styles.destinationCard}>
            <Image source={{ uri: deal.image }} style={styles.image} />
            <Text style={styles.destinationName}>{deal.name}</Text>
            <Text style={styles.destinationDescription}>{deal.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.offersTitle}>Special Offers</Text>
      <View style={styles.offersContainer}>
        <Text style={styles.offer}>50% off on selected flights!</Text>
        <Text style={styles.offer}>Book now and save on hotels!</Text>
      </View>

      <TouchableOpacity style={styles.seeMoreButton} onPress={handleSeeMore}>
        <Text style={styles.seeMoreText}>See More Destinations</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  destinationsContainer: {
    marginBottom: 20,
  },
  destinationCard: {
    marginRight: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    padding: 10,
  },
  image: {
    width: 150,
    height: 100,
    resizeMode: 'cover',
  },
  destinationName: {
    padding: 5,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  destinationDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
  offersTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  offersContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    elevation: 2,
  },
  offer: {
    fontSize: 16,
    color: '#d9534f',
    marginBottom: 5,
  },
  seeMoreButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
  },
  seeMoreText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
