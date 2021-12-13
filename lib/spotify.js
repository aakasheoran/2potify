import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
  'user-read-email',
  'user-read-private',
  'user-read-playback-state',
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-library-modify',
  'user-top-read',
  'user-library-read',
  'user-follow-read',
  'user-modify-playback-state',
  'streaming',
  'playlist-read-private',
  'playlist-read-collaborative'
].join(',');

const params = {
  scope: scopes
}