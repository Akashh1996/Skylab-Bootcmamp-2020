const store = require('./store');

describe('getToken', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockImplementationOnce(() => 
      Promise.resolve({
          json: jest.fn().mockReturnValueOnce('Invalid token')
      }))
    })

    test('should return the token for Spotify API', () => {
      return store.getToken().then((response) => {
          expect(response).toBe(undefined)
      })
    })
})

describe('getToken', () => {
    beforeEach(() => {
        global.fetch = jest.fn().mockImplementationOnce(() => 
        Promise.reject('Invalid token'))
    })
  
    test('should return an error for token Spotify API petition', () => {
        return store.getToken().then((response) => {
            expect(response).toBe('Invalid token')
        })
    })
})

describe('loadPlaylist', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockImplementationOnce(() => 
      Promise.resolve({
          json: jest.fn().mockReturnValueOnce({
            "spotify" : "https://open.spotify.com/artist/0ZjUUrNDmi4N4Ey5UTMebc"
          })
      }))
    })

    test('should return a playlist from Spotify API', () => {
      return store.loadPlaylist().then((response) => {
          expect(response).toStrictEqual({
            "spotify" : "https://open.spotify.com/artist/0ZjUUrNDmi4N4Ey5UTMebc"
          })
      })
    })
})

describe('loadPlaylist', () => {
    beforeEach(() => {
        global.fetch = jest.fn().mockImplementationOnce(() => 
        Promise.reject('error'))
    })
  
    test('should return an error for one playlist Spotify API petition', () => {
        return store.loadPlaylist().then((response) => {
            expect(response).toStrictEqual('error')
        })
    })
})

test('should return a question', () => {

    // arrange
    let playlist={
        "items" : [{
            "track" : {
            "name": "Time",
            "preview_url": "https://p.scdn.co/mp3-preview/eb463247243646de10aa4d9b3f2c0c8b836c1dc8?cid=6dc64ac2d3f84d2cab497f3dba195f86",
            }
        }]
    }
    
    let turn = 0

    let questions = [
        {
            index: 0,
            title: '¿Con cuál de las siguientes películas asociarías esta BSO?',
            answers: ['Gladiator', 'Inception', 'Interstellar', 'The Last Samurai'],
            correct: 'Inception'
        }]

    // act
    let response = store.loadQuestion(playlist,turn,questions)

    // assert
    expect(response).toBe('<h2>Pregunta 1 - ¿Con cuál de las siguientes películas asociarías esta BSO?</h2><audio id="track" controls><source src="https://p.scdn.co/mp3-preview/eb463247243646de10aa4d9b3f2c0c8b836c1dc8?cid=6dc64ac2d3f84d2cab497f3dba195f86" type="audio/mpeg"></audio><p>Pista: Time</p><form id="form"><input type="radio" id="Gladiator" name="answer" value="Gladiator"><label for="Gladiator">Gladiator</label><br><input type="radio" id="Inception" name="answer" value="Inception"><label for="Inception">Inception</label><br><input type="radio" id="Interstellar" name="answer" value="Interstellar"><label for="Interstellar">Interstellar</label><br><input type="radio" id="The Last Samurai" name="answer" value="The Last Samurai"><label for="The Last Samurai">The Last Samurai</label><br><br><button type="button" id="submit">Responder</button><button id="next" style="display:none">Siguiente</button></form><p id="answer" style="display:none"></p>')
})
