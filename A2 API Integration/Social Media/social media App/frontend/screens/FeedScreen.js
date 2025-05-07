import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { getPosts, getUser } from '../services/api';
import PostCard from '../components/PostCard';
import { Ionicons } from '@expo/vector-icons';

const FeedScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [profileUser, setProfileUser] = useState(null); // simulate user

  useEffect(() => {
    const fetch = async () => {
      const data = await getPosts();
      const user = await getUser(1); // get user #1 as demo
      setPosts(data);
      setProfileUser(user);
      setLoading(false);
    };
    fetch();
  }, []);

  React.useLayoutEffect(() => {
    if (profileUser) {
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile', { user: profileUser })}
            style={{ marginRight: 15 }}
          >
            <Ionicons name="person-circle-outline" size={28} color="#333" />
          </TouchableOpacity>
        ),
        title: 'Social Feed',
      });
    }
  }, [navigation, profileUser]);

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PostCard
            post={item}
            onPress={() => navigation.navigate('PostDetail', { post: item })}
          />
        )}
      />
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8fa',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});
