function greet (name) {
  if (name === null || name === undefined || name === '') {
    return 'Hello, my friend.'
  }

  if (Array.isArray(name)) {
    const tableLowerName = []
    const tableUpperName = []
    const language = name[name.length - 1]

    if (name[name.length - 1] === 'fr') {
      name.pop()
    }

    for (let counter = 0; counter < name.length; counter++) {
      if (name[counter] === name[counter].toUpperCase()) {
        tableUpperName.push(name[counter])
      } else {
        tableLowerName.push(name[counter])
      }
    }

    let textMin = 'Hello'
    let textMax = ''

    if (language === 'fr') {
      textMin = 'Bonjour'
    }

    if (tableUpperName.length !== 0) {
      textMax = ' AND HELLO'

      for (let counter = 0; counter < tableUpperName.length; counter++) {
        if (counter === tableUpperName.length - 1) {
          textMax += ` ${tableUpperName[counter]}!`
        } else {
          textMax += ` ${tableUpperName[counter]}`
        }
      }
    }

    for (let counter = 0; counter < tableLowerName.length; counter++) {
      if (counter === tableLowerName.length - 1) {
        if (language !== 'fr') {
          textMin += ` and ${tableLowerName[counter]}.`
        }

        if (language === 'fr') {
          textMin += ` et ${tableLowerName[counter]}.`
        }
      } else {
        textMin += `, ${tableLowerName[counter]}`
      }
    }

    if (textMax !== '') {
      return (textMin += textMax)
    }

    return textMin
  }

  if (name === name.toUpperCase()) {
    return `HELLO, ${name}!`
  }
  return `Hello, ${name}.`
}
module.exports = greet
