import createTheme from 'mineral-ui/themes/createTheme';
import useLocalStorage from './localStorage';

const useTheme = (selectedTheme) => {
  const [newTheme, setNewTheme] = useLocalStorage('theme', selectedTheme);

  const theme = createTheme({
    colors: { theme: newTheme },
  });

  return [theme, setNewTheme];
};

export default useTheme;
