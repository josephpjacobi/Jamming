let userAccessToken;
const clientID = '946ed75238e3466fad82d67941a262c1';
const redirectURL = "http://localhost:3000/";
const url = `https://accounts.spotify.com/authorize?client_id=${clientID}&redirect_uri=${redirectURL}&response_type=token`;
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
    } else if (window.location.href.match('/access_token=([^&]*)/')) {
      const userAuthentication = window.location.href.match('/access_token=([^&]*)/', '/expires_in=([^&]*)/');
      userAccessToken = userAuthentication[0];
      const expiresIn = userAuthentication[1];
      window.setTimeout(() => userAccessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
    } else {
      window.location(`https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURL}`);
    }
  },

  search(searchTerm) {
    const url = `https://api.spotify.com/v1/search?type=track&q=${searchTerm}`;
    return fetch(url, {
      headers: {
        'Authorization': `Bearer ${userAccessToken}`
      }
    }).then(response => {
      console.log(response);
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request Failed');
    }).then(tracks => {
        if (tracks.isEmpty()){
           return [];
        } else {
           return tracks;
           }
        })
  },

savePlaylist(playlistName, arrayTrackURI) {
      if (!playlistName || !arrayTrackURI) {
          return
      }
      let headers = { 'Authorization': `Bearer ${userAccessToken}` }
      let userID;

      const url = 'https://api.spotify.com/v1/me';
      return fetch(url, { headers: headers } ).then()
    }
}
