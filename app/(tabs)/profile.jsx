import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('Arnel');
  const [email, setEmail] = useState('mr_strict@gmail.com');
  const [bio, setBio] = useState('Travel enthusiast and adventure seeker.');
  const [phone, setPhone] = useState('123-456-7890');
  const [location, setLocation] = useState('San Francisco, CA');
  const [favorites, setFavorites] = useState(['Hiking', 'Photography', 'Food Tasting']);
  const [socialLinks, setSocialLinks] = useState({
    instagram: '',
    facebook: '',
    twitter: ''
  });

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveChanges = () => {
    setIsEditing(false);
    // Logic for saving changes can be added here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileCard}>
        <Image 
          source={{ uri: 'https://i.pinimg.com/564x/01/86/1a/01861a9cae0ae1d090e21a142c0fcf91.jpg' }} 
          style={styles.profileImage} 
        />
        {isEditing ? (
          <>
            <TextInput 
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Name"
            />
            <TextInput 
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              placeholder="Email"
            />
            <TextInput 
              style={styles.input}
              value={bio}
              onChangeText={setBio}
              placeholder="Tell us about yourself"
            />
            <TextInput 
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              placeholder="Phone Number"
            />
            <TextInput 
              style={styles.input}
              value={location}
              onChangeText={setLocation}
              placeholder="Location"
            />
            {favorites.map((favorite, index) => (
              <TextInput 
                key={index}
                style={styles.input}
                value={favorite}
                onChangeText={(text) => {
                  const newFavorites = [...favorites];
                  newFavorites[index] = text;
                  setFavorites(newFavorites);
                }}
                placeholder={`Favorite Activity ${index + 1}`}
              />
            ))}
            <TextInput 
              style={styles.input}
              value={socialLinks.instagram}
              onChangeText={(text) => setSocialLinks({...socialLinks, instagram: text})}
              placeholder="Instagram Link"
            />
            <TextInput 
              style={styles.input}
              value={socialLinks.facebook}
              onChangeText={(text) => setSocialLinks({...socialLinks, facebook: text})}
              placeholder="Facebook Link"
            />
            <TextInput 
              style={styles.input}
              value={socialLinks.twitter}
              onChangeText={(text) => setSocialLinks({...socialLinks, twitter: text})}
              placeholder="Twitter Link"
            />
          </>
        ) : (
          <>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
            <Text style={styles.bio}>{bio}</Text>
            <Text style={styles.phone}>{phone}</Text>
            <Text style={styles.location}>{location}</Text>
            <Text style={styles.favoritesTitle}>Favorite Activities:</Text>
            {favorites.map((favorite, index) => (
              <Text key={index} style={styles.favorite}>{favorite}</Text>
            ))}
            <Text style={styles.socialLinksTitle}>Social Links:</Text>
            <Text style={styles.socialLink}>{socialLinks.instagram ? `Instagram: ${socialLinks.instagram}` : 'Instagram: Not provided'}</Text>
            <Text style={styles.socialLink}>{socialLinks.facebook ? `Facebook: ${socialLinks.facebook}` : 'Facebook: Not provided'}</Text>
            <Text style={styles.socialLink}>{socialLinks.twitter ? `Twitter: ${socialLinks.twitter}` : 'Twitter: Not provided'}</Text>
          </>
        )}

        <TouchableOpacity onPress={toggleEdit} style={styles.editButton}>
          <Text style={styles.editButtonText}>{isEditing ? 'Cancel' : 'Edit'}</Text>
        </TouchableOpacity>

        {isEditing && (
          <Button title="Save" onPress={saveChanges} color="#007BFF" />
        )}
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Trips</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Countries Visited</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>3</Text>
          <Text style={styles.statLabel}>Travel Awards</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  profileCard: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: '#007BFF',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
    textAlign: 'center',
  },
  bio: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
    textAlign: 'center',
  },
  phone: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
    textAlign: 'center',
  },
  location: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
  },
  favoritesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'center',
  },
  favorite: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  socialLinksTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'center',
  },
  socialLink: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  input: {
    height: 45,
    borderColor: '#007BFF',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 12,
    paddingHorizontal: 15,
    width: '100%',
    backgroundColor: '#f9f9f9',
  },
  editButton: {
    marginVertical: 10,
    alignSelf: 'center',
  },
  editButtonText: {
    color: '#007BFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  stat: {
    alignItems: 'center',
    backgroundColor: '#007BFF',
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    width: 80,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  statLabel: {
    fontSize: 14,
    color: '#fff',
  },
});

export default Profile;
