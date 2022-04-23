import { useCallback,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../components/Button';
import { useDocumentTitle } from '../lib/customHooks';
import { getUserProfile } from '../lib/fetchApi';
import { login } from '../TokenSlice';
import config from '../lib/config';

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  useDocumentTitle('Login page - Spotify');

  const setLogin = useCallback(async (accessToken, expiresIn) => {
    try {
      const responseUser = await getUserProfile(accessToken);

      dispatch(login({
        accessToken,
        expiredDate: +new Date() + expiresIn * 1000,
        user: responseUser,
      }));

      history.push('/create-playlist');
    } catch (error) {
      toast.error(error.message);
    }
  }, [dispatch, history]);

  useEffect(() => {
    const accessTokenParams = new URLSearchParams(window.location.hash).get('#access_token');
    const expiresIn = new URLSearchParams(window.location.hash).get('expires_in');

    if (accessTokenParams !== null) {
      setLogin(accessTokenParams, expiresIn);
    }
  }, [setLogin]);

  const getSpotifyLogin = () => {
    const state = Date.now().toString();
    const clientId = 'fd73f7dfe7594d4b909b8421e7606e82';
    return `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=http://localhost:3000/&state=${state}&scope=${config.SPOTIFY_SCOPE}`;
  }

  return (
    <main className='login'>
      <div className='titleHomePage'>
        <h1>Music for everyone</h1>
        <Button type='submit' className='btn-login' href={getSpotifyLogin()} external>Login</Button>
      </div>
    </main>
  )
} 

export default Login;