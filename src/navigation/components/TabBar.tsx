import Typography from '@/shared/components/Typography/Typography';
import { useAppTheme } from '@/shared/styles/themeProvider';
import { hp, wp } from '@/utils';
import React, { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';

const SingleTabBar = ({
  focused,
  title,
}: {
  focused: boolean;
  title: string;
}) => {
  const { theme } = useAppTheme();
  const styles = StyleSheet.create({
    container: {
      width: wp(15),
      height: hp(6),
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    text: {
      color: focused ? theme.text : theme.cardBackground,
      fontSize: 12,
      fontWeight: '500',
    },
    activeTab: {
      width: wp(7),
      height: wp(7),
      borderRadius: wp(5),
      backgroundColor: theme.activeTab,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inActiveTab: {
      width: wp(7),
      height: wp(7),
      borderRadius: wp(5),
      backgroundColor: theme.cardBackground,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      {focused ? (
        <>
          <View style={styles.activeTab}>
            <Typography text={'H'} size={10} color={theme.subtleText} />
          </View>
          <Typography text={title} size={10} color={theme.text} />
        </>
      ) : (
        <>
          <View style={styles.inActiveTab}>
            <Typography text={'H'} size={10} color={theme.subtleText} />
          </View>
          <Typography text={title} size={10} color={theme.subtleText} />
        </>
      )}
    </View>
  );
};

export default SingleTabBar;
