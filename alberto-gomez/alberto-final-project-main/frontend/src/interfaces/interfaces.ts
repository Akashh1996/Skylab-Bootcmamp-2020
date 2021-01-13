export interface gameItemInterface {
  id: string,
  name: string,
  images: images,
  description_preview: string,
  min_players: number,
  max_players: number,
  min_playtime: number,
  max_playtime: number,
  status: boolean
}

export interface navigationInterface {
  navigate: Function
}

export interface images {
  thumb: string,
  small: string,
  medium: string,
  large: string,
  original: string,
}

export interface propsInterface {
  gameItem?: gameItemInterface,
  gameCollection?: Object[]
  dispatch: Function,
  navigation: navigationInterface,
  user: user,
  userObject: userObjectInterface,
  route: { params: {gameItem: gameItemInterface}}
}

export interface userObjectInterface {
  _id: string,
  id: string,
  name: string,
  photoUrl: string,
  username: string,
  location: string,
  bio: string,
  favourites: {id: string, name: string, rank: number}[]
}

export interface user {
  id: string
}
