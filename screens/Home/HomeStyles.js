// styles/HomeStyles.js
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
    fontSize: 22,
    fontWeight: '700',
    color: colors.primary,
    paddingTop: 200,
  },
  body: {
    marginTop: spacing.sm,
    fontSize: 16,
    color: colors.text,
  },
    sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.md,
  },
  listContent: {
    paddingBottom: spacing.xl,
  },
  card: {
    borderWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
    padding: spacing.md,
    borderRadius: 10,
  },
  carTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  carMeta: {
    marginTop: 4,
    fontSize: 14,
    color: colors.mutedText,
  },
  separator: {
    height: spacing.sm,
    backgroundColor: 'transparent',
  },
});
