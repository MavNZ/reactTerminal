import Axios from 'axios'

export const fetchFact = async () => {
  try {
    const response = await Axios('https://uselessfacts.jsph.pl/random.json?language=en')
    const line = response.data.text + '\nSource: ' + response.data.source
    console.log(line)

    return line
  } catch (err) {
    throw new Error(err)
  }
}