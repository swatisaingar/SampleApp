import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { fetchItemsRequest, postItemRequest } from '../actions/itemActions';
import { fetchItemsApi, postItemApi } from '../services/api';

const ItemList = ({ items, loading, error, fetchItems, postItem }) => {
  useEffect(() => {
    fetchItems();
  }, []);

  const handlePostItem = () => {
    postItem({ name: 'New Item' });
  };

  return (
    <View>
      <Text>Item List</Text>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}
      {items.map((item) => (
        <Text key={item.id}>{item.name}</Text>
      ))}
      <Button title="Add Item" onPress={handlePostItem} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  items: state.items,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchItems: async () => {
    dispatch(fetchItemsRequest());
    try {
      const items = await fetchItemsApi();
      dispatch(fetchItemsSuccess(items));
    } catch (error) {
      dispatch(fetchItemsFailure(error.message));
    }
  },
  postItem: async (item) => {
    dispatch(postItemRequest());
    try {
      const newItem = await postItemApi(item);
      dispatch(postItemSuccess(newItem));
    } catch (error) {
      dispatch(postItemFailure(error.message));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
