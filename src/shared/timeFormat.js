function timeFormat(time) {
  const dateTime = new Date(time)

  if ((new Date()).toLocaleDateString() === dateTime.toLocaleDateString()) {
    return dateTime.toLocaleTimeString()
  }

  return `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`
}

export default timeFormat
