
export function typesFood ():string[] {
  return (
    ['menu', 'drink', 'pack', 'other']
  )
}

export function typesEstablishmentPages ():string[] {
  return (
    ['promotions', 'information', 'map']
  )
}

export function distancePoints (latitudeUser: number, longitudeUser: number, latitudePromotion: number, longitudePromotion: number):string {
  const piDivide = Math.PI / 180
  const cosCalculate = Math.cos
  const distance = 0.5 - cosCalculate((latitudePromotion - latitudeUser) * piDivide) / 2 +
            cosCalculate(latitudeUser * piDivide) * cosCalculate(latitudePromotion * piDivide) *
            (1 - cosCalculate((longitudePromotion - longitudeUser) * piDivide)) / 2

  return (12742 * Math.asin(Math.sqrt(distance))).toFixed(1)
}

export function colorMarkerType (type: string) {
  return (
    type === 'menu' ? 'blue' : type === 'drink' ? 'gold' : type === 'pack' ? 'purple' : 'orange'
  )
}
