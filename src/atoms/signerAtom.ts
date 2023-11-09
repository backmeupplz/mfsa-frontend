import { atom } from 'jotai'
import getSigner from 'helpers/getSigner'

export default atom(getSigner())
