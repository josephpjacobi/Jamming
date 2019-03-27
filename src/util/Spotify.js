import { type } from "os";

let userAccessToken;
const clientID = '946ed75238e3466fad82d67941a262c1';
const redirectURL = "http://localhost:3000/callback/";
const url = `https://accounts.spotify.com/authorize?client_id=${clientID}&redirect_uri=${redirectURL}&response_type=token`;
const token = 'BQBak9v0zvlHDJ9UwcdTzBeOhLM5p7S3kavNsMoLEfrnrLPErPVBtjQ2tP3S8wziH4Ii2upFMZzIgZkjvwQNCFmg0Ar2zyq6dvqKr8-kh_nr94UiVXUOcKBJKW1nnm2rHp2CfVT8ipLKfzzpEE2LGVCq1mJ1brDiXEC_V87aGhmpNpIIkQ';
export const Spotify = {

  getAccessToken() {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
      if (xhr.readyState === (XMLHttpRequest.DONE)) {
        return xhr.response
      }
    }

    xhr.open('GET', url);
    xhr.send();
    console.log(userAccessToken);
    console.log(window.location);
    
    

    if (userAccessToken) {
        return userAccessToken;
    } else if (window.location.href.match('/#access_token=([^&]*)/')) {
      const userAuthentication = window.location.href.match('/#access_token=([^&]*)/', '/expires_in=([^&]*)/');
      userAccessToken = userAuthentication[0];
      const expiresIn = userAuthentication[1];
      window.setTimeout(() => userAccessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
    } else {
      window.location=`https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURL}`;
    }
  },

async search(searchTerm) {
    const url = `https://api.spotify.com/v1/search?type=track&q=${searchTerm}`;
    try {
      const response = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
      })
      if (response.ok) {
        const jsonResponse = await response.json();
          const tracks = await jsonResponse.tracks.items.map(track => {
            return {
              id: track.id,
              name: track.name,
              artist: track.artists[0].name,
              album: track.album.name,
              uri: track.uri
            }
          });
          console.log(tracks);
          
          return tracks;
      }
        throw new Error('Request Failed');
    } catch (error) {
      console.log(error);
    }
  },

  async savePlaylist(playlistName, arrayTrackURI) {
        // if (!playlistName || !arrayTrackURI) {
        //     return
        // }
        let headers = {
            'Authorization': `Bearer ${token}`
          }
        let userID;

        const url = 'https://api.spotify.com/v1/me';
        try {
          const response = await fetch(url, {headers: headers});
          
            if (response.ok) {
              const jsonResponse = await response.json();
              userID = jsonResponse.id;
              return this.createNewPlaylist(userID, playlistName, arrayTrackURI);
            }
              throw new Error('Save Playlist Request Failed!')
        } catch(error) {
            console.log(error);
        }

  },

  async createNewPlaylist(user_id, playlistName, arrayTrackURI) {
    const playlistURL = `https://api.spotify.com/v1/users/${user_id}/playlists`
    try {
      const playlistResponse = await fetch(playlistURL, {
        'headers': {
          'Authorization': `Bearer ${token}`
        },
        'method': 'POST',
        'content-type': 'application/json',
        'body': JSON.stringify({
        'name': 'playlistName'
        })
      });
      if (playlistResponse.ok) {
        let playlistResponseJSON = await playlistResponse.json();
        let playlistID = playlistResponseJSON.id;
        return this.populatePlaylist(playlistID, arrayTrackURI);
      }
      throw new Error('Request Failed')
    } catch (error) {
      console.log(error);
    }
  },

  async populatePlaylist(playlistID, arrayTrackURI) {
    const url = `https://api.spotify.com/v1/playlists/${playlistID}/tracks`;
    const tracks = JSON.stringify(arrayTrackURI);
    const options = {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: {
        tracks
      },
      method: 'POST',
      'content-type': 'application/json'
    }

    try {
      const populatePlaylistResponse = await fetch(url, options)
      throw new Error('Populate Playlist Request Failed!')
    } catch (error) {
      console.log(error);
      
    }
    
  },
        
//USE THIS RESPONSE TO GET THE CURRENT USER ID key: id value type: string 
//Create new playlist to the current users account using the playlist name entered by the user,
//Recieve the playlist ID back from the request 
//POST the track URI's to the newly created playlist, referencing e current users account ID and new playlist ID

}
