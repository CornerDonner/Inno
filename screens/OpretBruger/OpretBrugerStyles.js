// styles/OpretBrugerStyles.js
import { StyleSheet } from 'react-native';
import { colors, spacing } from '../NavbarStyles'; // reuse your theme tokens

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    justifyContent: 'center',
    backgroundColor: colors.bg,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: spacing.xl,
    textAlign: 'center',
    color: colors.text,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: spacing.md,
    fontSize: 16,
    backgroundColor: '#fff',
  },
});
