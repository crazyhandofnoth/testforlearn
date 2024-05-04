import { atom, useAtom } from 'jotai';
import { Button } from 'antd';
const theme = atom('light');

export default function Page() {
  const [appTheme, setAppTheme] = useAtom(theme);
  const handleClick = () => setAppTheme(appTheme === 'light'? 'dark': 'light');
  return (
    <div className={appTheme}>
      <h1>This is a theme switcher</h1>
      <Button onClick={handleClick}>{appTheme === 'light'? 'DARK': 'LIGHT'}</Button>
    </div>
  )
}