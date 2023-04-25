import { buttonPlay, buttonStop, buttonAdd, buttonSubtract, 
  minutesDisplay,secondsDisplay,} from './config.js'
import Timer from './timer.js'
import Events from './events.js'
import Sounds from './sounds.js'

const sounds = Sounds()
const timer = Timer({minutesDisplay,secondsDisplay})
Events({timer, buttonPlay, sounds})


