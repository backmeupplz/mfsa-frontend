import { atom } from 'jotai'
import UUIDResponse from 'models/UUIDResponse'

export default atom<Promise<UUIDResponse> | undefined>(undefined)
