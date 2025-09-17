// styles/ProfileStyles.js
import { StyleSheet } from 'react-native';
import { colors, spacing } from '../NavbarStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.md,
  },
  buttonWrap: {
    width: 200,
    marginBottom: spacing.sm,
  },
});
