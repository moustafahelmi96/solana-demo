export { RFValue as perfectFont } from 'react-native-responsive-fontsize';
export {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const getInitials = (name: string) => {
  const names = name.split(' ');
  if (names.length === 1) return names[0].charAt(0);
  return names[0].charAt(0) + names[1].charAt(0);
};
