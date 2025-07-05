import Typography from '@/shared/components/Typography/Typography';
import { useAppTheme } from '@/shared/styles/themeProvider';
import { hp, wp } from '@/utils';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface ISingleTokenCard {
  tokenName: string;
  price: string;
  priceChangePercent: string;
  rankInfo: string;
}

const SingleTokenCard = ({
  tokenName,
  price,
  priceChangePercent,
  rankInfo,
}: ISingleTokenCard) => {
  const { theme } = useAppTheme();
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: hp(9),
      borderRadius: wp(2),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.cardBackground,
      marginTop: hp(2),
      paddingHorizontal: wp(4),
      paddingVertical: hp(1),
    },
    tokenBox: {
      width: wp(10),
      height: wp(10),
      borderRadius: wp(2),
      backgroundColor: theme.accent,
      justifyContent: 'center',
      alignItems: 'center',
    },
    infoContainer: {
      width: '55%',
      height: '100%',
      justifyContent: 'center',
      gap: hp(0.5),
    },
    statisticsContainer: {
      paddingLeft: wp(2),
      height: '100%',
      justifyContent: 'space-evenly',
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.tokenBox}>
        <Typography text={tokenName} size={14} />
      </View>
      <View style={styles.infoContainer}>
        <Typography
          text={tokenName}
          alignSelf="center"
          size={14}
          fontWeight={'bold'}
          color={theme.text}
          textAlign="left"
          width={'100%'}
        />
        <Typography
          text={rankInfo}
          alignSelf="center"
          size={11}
          fontWeight={'bold'}
          color={theme.secondaryText}
          textAlign="left"
          width={'100%'}
        />
      </View>
      <View style={styles.statisticsContainer}>
        <Typography
          text={price}
          alignSelf="center"
          size={12}
          fontWeight={'bold'}
          color={theme.text}
        />
        <Typography
          text={priceChangePercent}
          alignSelf="center"
          size={10}
          fontWeight={'bold'}
          color={theme.failure}
        />
      </View>
    </View>
  );
};

export default SingleTokenCard;
