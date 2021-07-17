const spliter = /[a-zA-Z]+|\d+/gi

class TrackValidator {
  validateDeallocate(hotelNameAndCancel) {
    const deallocateInfo = hotelNameAndCancel.match(spliter)
    if (deallocateInfo.length < 2) {
      return [deallocateInfo[0], 1]
    }

    return [
      deallocateInfo[0],
      isNaN(deallocateInfo[1]) ? 1 : deallocateInfo[1]
    ]
  }
}

class Tracker extends TrackValidator {
  constructor() {
    super()
    this.counter = {}
  }

  allocate(hotelName) {
    if (!this.counter[hotelName]) {
      this.counter[hotelName] = 0
    }

    this.counter[hotelName] += 1

    return `${hotelName}${this.counter[hotelName]}`
  }

  deallocate(hotelNameAndCancel) {
    const [hotelName, cancel] = this.validateDeallocate(hotelNameAndCancel)

    const newCounter = this.counter[hotelName] - cancel
    this.counter[hotelName] = newCounter
  }
}

const tracker = new Tracker()
const log = []

log.push(tracker.allocate('permpoon'))
log.push(tracker.allocate('permpoon'))
log.push(tracker.allocate('permpoon'))
tracker.deallocate('permpoon')
log.push(tracker.allocate('permpoon'))
log.push(tracker.allocate('mossnana'))
log.push(tracker.allocate('mossnana'))
tracker.deallocate('mossnana2')
log.push(tracker.allocate('mossnana'))

console.log(log)
