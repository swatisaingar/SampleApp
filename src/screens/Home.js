import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useApi } from "../api/Provider";

const Home = ({ route }) => {
    const { getCategories } = useApi();
    const [categories, setCategories] = useState('')

    useEffect(() => {
        async function fetchCatg() {
            try {
                const response = await getCategories();
                setCategories(response);
            } catch (error) {
                console.error("Error fetching banners:", error);
            }
        }
        fetchCatg()
    }, []);

    var detail = route?.params?.formdata?.name;

    const renderItem = ({ item }) => (
        <TouchableOpacity >
            <Image source={{ uri: item.coverImage }} />
            <Text>{item.title}</Text>
        </TouchableOpacity>
    )

    return (
        <View>
            <Text>{detail}</Text>
            {/* <FlatList
                data={categories?.data}
                renderItem={renderItem}
                numColumns={3}
            /> */}
            {categories.data.map((item,index) => (
                <TouchableOpacity key={index}>
                    <Image source={{ uri: item.coverImage }} />
                    <Text>{item.title}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default Home;