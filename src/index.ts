import { AppliedPrinciple } from './applied-principle'
import { VioletedPrinciple } from './violated-principle'

const violtedPrinciple = new VioletedPrinciple()
violtedPrinciple.main()

console.log('\n\n')

const appliedPrinciple = new AppliedPrinciple()
appliedPrinciple.main()