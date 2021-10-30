import { BrowserRouter, Link } from 'react-router-dom';
import { MoonOutline, Moon } from 'heroicons-react';
import Routes from './Routes';
import { ThemeContext } from '../src/util/themeManager';
import { useContext } from 'react';
import './_app.scss';

export default function App() {
  const { theme, ToggleTheme } = useContext(ThemeContext);

  return (
    <div className='App'>
      <BrowserRouter>
        <ul className='nav'>
          <li>
            <Link to='/one'>Challenge 1</Link>
          </li>
          <li>
            <Link to='/two'>Challenge 2</Link>
          </li>
          <li>
            <Link to='/three'>Challenge 3</Link>
          </li>
          <li>
            <Link to='/four'>Challenge 4</Link>
          </li>
          <li>
            <button
              className='ch4__dark-mode-btn'
              onClick={() => ToggleTheme()}
            >
              {theme === 'dark' ? (
                <Moon fontSize={30} />
              ) : (
                <MoonOutline fontSize={30} />
              )}
            </button>
          </li>
        </ul>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export const Home = () => {
  return (
    <>
      <h1 className='title is-1 has-text-white'>
        Hello
        <span aria-label='wave' role='img'>
          👋
        </span>
      </h1>
      <h2 className='subtitle is-4 has-text-grey-lighter'>
        We are looking for highly creative individuals. To find them, we have
        devised a test.
      </h2>

      <h2 className='subtitle is-4 has-text-grey-lighter'>
        There are 4 challenges linked above, each is designed to test a
        different ability. The challenges get progressively more difficult.
      </h2>

      <h2 className='subtitle is-4 has-text-grey-lighter'>
        All of the required libraries are provided.
      </h2>
      <h2 className='subtitle is-4 has-text-grey-lighter'>Good luck.</h2>
    </>
  );
};

export const BackToHome = () => (
  <Link
    to='/'
    className='button is-link is-light is-small is-rounded mb-4 back-to-home'
  >
    &larr; Back to home
  </Link>
);
