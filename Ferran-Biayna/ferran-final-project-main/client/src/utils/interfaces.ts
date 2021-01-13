/* eslint-disable no-use-before-define */
export interface Action {
  type: string,
  promotions?: Promotion[],
  promotion?: Promotion,
  establishment?: Establishment,
  error?: any
}

export interface ActionUser {
  type: string,
  user?: User,
  error?: any
}

export interface ActionLocation {
  type: string,
  city?: string,
  latitude?: number,
  longitude?: number,
  error?: any
}

export interface ActionAuth {
  type: string,
  logInState?: boolean,
  logInExists?: boolean,
  error?: any
}

export interface PromotionsMenu {
  promotions: Promotion[],
  typePromotion: string,
  latitude: any,
  longitude: any,
  navigation?: any
}

export interface HomeReducer {
    promotions?: Promotion[],
    navigation?: any,
    dispatch: Function,
    latitude?: number,
    longitude?: number,
    city?: string
  }

export interface userReducer {
    user?: User,
    navigation?: any,
    dispatch: Function,
  }

export interface authReducer {
  dispatch: Function,
  logInExists?: boolean,
  logInState?: boolean,
  navigation?: any
}

export interface FavoritesReducer {
    user?: any,
    navigation?: any,
    dispatch: Function,
  }

export interface NavigationProps {
    site: string,
    navigation?: any,
  }

export interface DetailEstablishmentReducer {
  establishment?: Establishment,
  dispatch: any,
  route: any,
  navigation: any
}

export interface DetailReducer {
    user?: any,
    promotion?: Promotion,
    dispatch: Function,
    route: any,
    navigation: any
  }

export interface Promotion {
    _id: any,
    name: string,
    date: string,
    description: string,
    establishment: Establishment,
    photo: string,
    ubication: string,
    price: string
    type: string
  }

export interface User {
  _id: any,
  admin: boolean,
  name: string,
  surname: string,
  email: string,
  photo: string,
  sub: string,
  favorites?: Establishment[],
  establishment?: Establishment,
  promotions?: any
}

export interface Establishment {
  _id: any,
  name: string,
  ubication: string,
  coords: {
    latitude: number,
    longitude: number
  }
  city: string,
  promotions: Promotion[],
  photo: string,
  description: string,
  rating: string
}

export interface imgObject {
  uri: string
}
