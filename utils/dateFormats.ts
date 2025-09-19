import moment_ from 'moment'

export const moment = moment_

export const customDate = (fecha: any, { format = 'MMMM DD[, ] YYYY' } = {}) => {
  if (!fecha) return '---'
  return moment(fecha).format(format)
}

export const dateTime = (fecha: any) => {
  if (!fecha) return '---'
  return moment(fecha).format('h:mm a')
}

export const dateTimeSeconds = (fecha: any) => {
  if (!fecha) return '---'
  return moment(fecha).format('hh:mm:ss a')
}

export const getDifference = (date1: any, date2: any, { multiplicatePer = 1, withMessage = true, inMilliseconds = false,  inSeconds = false, inMinutes = false, inHours = false } = {}) => {
  if (date1 && date2) {
    const date_1 = moment(date1)
    const date_2 = moment(date2)
    let compare = date_2.diff(date_1, 'seconds', true)
    compare = compare * 1000
    if (multiplicatePer > 1) {
      compare = compare * multiplicatePer
    }

    if(inMilliseconds){
        return parseInt(`${compare}`)
    }
    if (inSeconds) {
      return parseInt(`${compare}`) / 1000 //? remove milliseconds
    }
    if (inMinutes) {
      const minutes = parseInt(`${compare}`) / 1000 / 60
      return minutes
    }
    if (inHours) {
      const horas = parseInt(`${compare}`) / 1000 / (60*60)
      return horas
    }

    const { formated } = getTime({ time: compare, withMessage })
    return formated
  }

  return '---'
}
export const getTime = ({ time=0, withMessage=true } = {}) => {
  const hours = Math.floor(time / (1000 * 60 * 60))
  const minutes = Math.floor(((time % 86400000) % 3600000) / 60000) // minutes
  const seconds = Math.round((((time % 86400000) % 3600000) % 60000) / 1000)
  const milliseconds = Math.round((((time % 86400000) % 3600000) % 60000) % 1000)
  const formated = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}.${milliseconds}${withMessage ? ' hrs.' : ''}`

  return { hours, minutes, seconds, time, formated }
}