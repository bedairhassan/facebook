import { read_cookie } from 'sfcookies';
import isEmpty from './isEmpty'


const isSignedIn = ()=>!isEmpty(read_cookie(`currentUser`))

export default isSignedIn