import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {FlatList, GestureHandlerRootView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const NoteScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [notes, setNotes] = useState([
    { id: 1, title: 'Note 1', content: 'This is a sample note', date: '24 jan' },
    { id: 2, title: 'Note 2', content: 'This is another sample note', date: '20 feb' },
    { id: 3, title: 'Note 3', content: 'This is a third sample note', date: '15 mar' },
    { id: 4, title: 'Note 4', content: 'This is a fourth sample note', date: '25 may' },
    { id: 5, title: 'Note 5', content: 'This is a fifth sample note', date: '20 june' },
    { id: 6, title: 'Note 6', content: 'This is a sixth sample note', date: '20 sep' },
    { id: 7, title: 'Note 7', content: 'This is a seventh sample note', date: '7 oct' },
    { id: 8, title: 'Note 8', content: 'This is an eighth sample note', date: '18 oct' },
  ]);
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [selectedNotes, setSelectedNotes] = useState([]); // Track selected notes
  const [quickSelectMode, setQuickSelectMode] = useState(false); // To track quick select mode

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const handleSearch = useCallback(
    debounce(text => {
      setSearchQuery(text);
    }, 300),
    [],
  );

  const deleteNote = id => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  const startEditing = note => {
    setEditingNoteId(note.id);
    setEditTitle(note.title);
    setEditContent(note.content);
  };

  const saveEdit = id => {
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === id
          ? {...note, title: editTitle, content: editContent}
          : note,
      ),
    );
    setEditingNoteId(null); // Exit edit mode
  };

  const cancelEdit = () => {
    setEditingNoteId(null); // Cancel edit mode
  };

  const handleNoteSelect = id => {
    setSelectedNotes(prevSelected =>
      prevSelected.includes(id)
        ? prevSelected.filter(noteId => noteId !== id)
        : [...prevSelected, id],
    );
  };

  const handleLongPress = id => {
    setQuickSelectMode(true); // Enable quick select mode
    handleNoteSelect(id); // Select the first note after long press
  };

  const handleTap = id => {
    if (quickSelectMode) {
      handleNoteSelect(id); // In quick select mode, tap will select/deselect notes
    }
  };

  const deleteSelectedNotes = () => {
    setNotes(prevNotes =>
      prevNotes.filter(note => !selectedNotes.includes(note.id)),
    );
    setSelectedNotes([]); // Clear selection after deletion
  };

  const filteredNotes = notes.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const AllSelect = () => {
    if (selectedNotes.length === notes.length) {
      // If all notes are selected, deselect them
      setSelectedNotes([]);
    } else {
      // Select all notes
      const allNoteIds = notes.map(note => note.id);
      setSelectedNotes(allNoteIds);
    }
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={style.TopHeader}>
        <View>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXqErjmTym0abU5uzCaaxnHCVm0SakEAiyvg&s',
            }}
            style={{width: 35, height: 40}}
          />
        </View>
        <View>
          <Text style={{color: '#000', fontWeight: 'bold', fontSize: 20}}>
            Note App
          </Text>
        </View>
        <View>
          <Icon
            name="signal"
            size={20}
            color="#000"
            style={{transform: [{rotate: '90deg'}]}}
          />
        </View>
      </View>

      <View style={style.inputBox}>
        <TextInput
          placeholder="Search note...."
          style={style.SearchInput}
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      <View style={style.actionBar}>
        {selectedNotes.length > 0 && (
          <>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <TouchableOpacity
                style={style.deleteButton}
                onPress={deleteSelectedNotes}>
                <Text style={{color: '#000'}}>
                  Delete Selected ({selectedNotes.length})
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.selectButton}
                onPress={AllSelect}>
                <Text style={{color: '#000'}}>
                  {selectedNotes.length === notes.length
                    ? 'Deselect All'
                    : 'Select All'}
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>

      {notes.length === 0 ? ( 
        <View style={style.emptyMessageContainer}>
          <Image
            source={{
              uri: 'https://www.pngplay.com/wp-content/uploads/7/Note-Transparent-File.png',
            }}
            style={{width: 200, height: 200}}
          />
          <Text style={style.emptyMessage}>No cards available</Text>
        </View>
      ) : (
        <FlatList
          data={filteredNotes}
          renderItem={({item}) => (
            <TouchableOpacity
              onLongPress={() => handleLongPress(item.id)}
              onPress={() => handleTap(item.id)}
              style={{width: '48%'}}>
              <View
                style={[
                  style.noteBox,
                  selectedNotes.includes(item.id) && style.selectedNoteBox, // Change style if selected
                ]}>
                {editingNoteId === item.id ? (
                  <>
                    <TextInput
                      style={style.editInput}
                      value={editTitle}
                      onChangeText={setEditTitle}
                      placeholder="Edit title"
                    />
                    <TextInput
                      style={style.editInput}
                      value={editContent}
                      onChangeText={setEditContent}
                      placeholder="Edit content"
                    />

                    <View
                      style={{
                        marginVertical: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <TouchableOpacity
                        style={{
                          backgroundColor: 'green',
                          padding: 10,
                          borderRadius: 10,
                        }}
                        onPress={() => saveEdit(item.id)}>
                        <Text style={{color: '#ffffff', textAlign: 'center'}}>
                          Save
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          backgroundColor: 'red',
                          padding: 10,
                          borderRadius: 10,
                        }}
                        onPress={cancelEdit}>
                        <Text style={{color: '#ffffff', textAlign: 'center'}}>
                          Cancel
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </>
                ) : (
                  <>
                    <Text style={{color: '#ffffff', fontSize: 12}}>
                      {item.date}
                    </Text>
                    <Text
                      style={{
                        color: '#ffffff',
                        fontSize: 17,
                        textAlign: 'center',
                      }}>
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        color: '#ffffff',
                        fontSize: 14,
                        textAlign: 'center',
                      }}>
                      {item.content}
                    </Text>
                    <View
                      style={{
                        marginVertical: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <TouchableOpacity
                        style={{
                          backgroundColor: 'green',
                          padding: 10,
                          borderRadius: 10,
                        }}
                        onPress={() => startEditing(item)}>
                        <Text style={{color: '#ffffff', textAlign: 'center'}}>
                          Edit
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          backgroundColor: 'red',
                          padding: 10,
                          borderRadius: 10,
                        }}
                        onPress={() => deleteNote(item.id)}>
                        <Text style={{color: '#ffffff', textAlign: 'center'}}>
                          Delete
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </>
                )}
              </View>
            </TouchableOpacity>
          )}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </GestureHandlerRootView>
  );
};

export default NoteScreen;

const style = StyleSheet.create({
  TopHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    width: '100%',
    borderBottomColor: '#7d7676ba',
    borderBottomWidth: 3,
  },
  noteBox: {
    padding: 20,
    backgrounddColor: '#f2f2f2',
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#bd8d00',
    width: '95%',
  },
  selectedNoteBox: {
    backgroundColor: 'gray', // Highlight selected note
  },
  inputBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  SearchInput: {
    width: '80%',
    borderColor: 'black',
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: 'white',
  },
  editInput: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: 10,
    // width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    color: '#ffffff',
  },
  selectButton:{
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: 10,
    // width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    color: '#ffffff',
  },
  emptyMessageContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
   
  },
  emptyMessage:{
    fontSize: 22,
    color: '#000',
    textAlign: 'center',
    marginVertical:50,
    textDecorationLine:'underline'
  }
});
