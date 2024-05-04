'use strict'

import { CustomError } from "../helpers"
import MentorSchedule from "../schemas/MentorSchedule"

const FixModel = {
    scheduleFix
}
export default FixModel

async function scheduleFix() {
    try {
        let schedule = await MentorSchedule.find({})
        let arr = []
        for (let i = 0; i < schedule.length; i++) {
            const { schedules } = schedule[i]
            let obj = {}
            for (let key in schedules) {
                let valueCollected = schedules[key]
                let updatedOne = key.split('-')
                if (updatedOne[1].length === 3) {
                    updatedOne[1] = updatedOne[1].substring(1,)  
                }
                let finalResult = updatedOne.join('-')    
                obj[finalResult] = schedules[key]
            }
            arr.push(obj)
            schedule[i].schedules = obj
            await schedule[i].save()
        }
        return arr
    } catch (error) {
        throw new CustomError(error)
    }
}
