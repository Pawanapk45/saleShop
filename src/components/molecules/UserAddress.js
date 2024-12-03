import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, FlatList } from 'react-native';
import LocationIcon from 'react-native-vector-icons/MaterialIcons';

const UserAddress = () => {
  const [addressData, setAddressData] = useState([
    {
      name: 'John Doe',
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      postalCode: '10001',
      phoneNumber: '123-456-7890',
    },
    {
      name: 'Jane Smith',
      street: '456 Oak Ave',
      city: 'Los Angeles',
      state: 'CA',
      postalCode: '90001',
      phoneNumber: '987-654-3210',
    },
    {
      name: 'Mike Johnson',
      street: '789 Pine Rd',
      city: 'Chicago',
      state: 'IL',
      postalCode: '60601',
      phoneNumber: '555-123-4567',
    },
  ]);

  const [selectedAddress, setSelectedAddress] = useState(addressData[0]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    phoneNumber: '',
  });

  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
    setModalVisible(false);
  };

  const handleAddAddress = () => {
    setAddressData([...addressData, newAddress]);
    setNewAddress({
      name: '',
      street: '',
      city: '',
      state: '',
      postalCode: '',
      phoneNumber: '',
    });
    setAddModalVisible(false);
  };

  return (
    <View style={{ padding: 20 }}>
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>User Address</Text>
      </View>
      <View style={{ borderWidth: 1, padding: 15, borderRadius: 10, backgroundColor: '#f8f8f8' }}>
        <View style={{ justifyContent: 'flex-end' }}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={{ color: 'green', fontSize: 16, textAlign: 'right' }}>
              <LocationIcon size={13} name='location-pin' /> Select Address
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>
          {selectedAddress.name || 'No name available'}
        </Text>
        <Text style={{ fontSize: 16 }}>{selectedAddress.street || 'No street available'}</Text>
        <Text style={{ fontSize: 16 }}>
          {`${selectedAddress.city || ''}, ${selectedAddress.state || ''} ${selectedAddress.postalCode || ''}`}
        </Text>
        <Text style={{ fontSize: 16, marginTop: 5 }}>Phone: {selectedAddress.phoneNumber || 'No phone number'}</Text>
      </View>

      <TouchableOpacity 
        style={{
          marginTop: 10,
          padding: 10,
          backgroundColor: 'lightpink',
          borderRadius: 20,
          alignItems: 'center'
        }}
        onPress={() => setAddModalVisible(true)}
      >
        <Text style={{ color: '#fff', fontSize: 16 }}>Add Address</Text>
      </TouchableOpacity>

      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ width: '80%', backgroundColor: '#fff', padding: 20, borderRadius: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 15 }}>Select an Address</Text>
            <FlatList
              data={addressData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    padding: 10,
                    borderBottomWidth: 1,
                    borderColor: '#ccc',
                  }}
                  onPress={() => handleSelectAddress(item)}
                >
                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name || 'No name available'}</Text>
                  <Text>{`${item.street || 'No street'}, ${item.city || ''}, ${item.state || ''} ${item.postalCode || ''}`}</Text>
                  <Text>Phone: {item.phoneNumber || 'No phone number'}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity 
              style={{
                marginTop: 15,
                padding: 10,
                backgroundColor: 'lightpink',
                borderRadius: 5,
                alignItems: 'center'
              }}
              onPress={() => setModalVisible(false)}
            >
              <Text style={{ color: '#fff', fontSize: 16 }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={isAddModalVisible} transparent={true} animationType="slide">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ width: '80%', backgroundColor: '#fff', padding: 20, borderRadius: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 15 }}>Add New Address</Text>
            
            {['name', 'street', 'city', 'state', 'postalCode', 'phoneNumber'].map((field) => (
              <TextInput
                key={field}
                placeholder={`Enter ${field}`}
                style={{
                  borderBottomWidth: 1,
                  borderColor: '#ccc',
                  marginBottom: 10,
                  padding: 5,
                }}
                value={newAddress[field]}
                onChangeText={(text) => setNewAddress({ ...newAddress, [field]: text })}
              />
            ))}

            <TouchableOpacity 
              style={{
                marginTop: 10,
                padding: 10,
                backgroundColor: 'lightgreen',
                borderRadius: 5,
                alignItems: 'center'
              }}
              onPress={handleAddAddress}
            >
              <Text style={{ color: '#fff', fontSize: 16 }}>Submit Address</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={{
                marginTop: 10,
                padding: 10,
                backgroundColor: 'lightpink',
                borderRadius: 5,
                alignItems: 'center'
              }}
              onPress={() => setAddModalVisible(false)}
            >
              <Text style={{ color: '#fff', fontSize: 16 }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default UserAddress;
