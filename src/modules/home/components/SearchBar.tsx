import React from 'react';
import { useAppTheme } from '@/shared/styles/themeProvider';
import { hp, perfectFont, wp } from '@/utils';
import { StyleSheet, TextInput, View } from 'react-native';
import SearchIcon from '../../../../assets/icons/SearchIcon';

const SearchBar = () => {
  const { theme } = useAppTheme();

  const styles = StyleSheet.create({
    mainContainer: {
      height: hp(10),
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
    },
    searchBarContainer: {
      width: '100%',
      height: hp(5),
      backgroundColor: theme.cardBackground,
      borderRadius: wp(2),
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.border,
    },
    searchInput: {
      width: '80%',
      padding: wp(2),
      color: theme.text,
      fontSize: perfectFont(12),
    },
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.searchBarContainer}>
        <SearchIcon />
        <TextInput placeholder="Search Tokens..." style={styles.searchInput} />
      </View>
    </View>
  );
};

export default SearchBar;
