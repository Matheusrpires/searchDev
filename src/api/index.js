import axios from 'axios';

const user = 'https://api.github.com/users/Matheusrpires'

const userRepo = 'https://api.github.com/users/Matheusrpires/repos'

export const fetchUserData = async () => {
  try {
    const { data } = await axios.get(user)
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

export const fetchRepoData = async () => {
  try {
    const {data} = await axios.get(userRepo)
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}