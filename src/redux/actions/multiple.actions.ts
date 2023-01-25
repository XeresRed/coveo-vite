import { typesMultipleAction } from "../constants/multiple.constants"

export const actionMultipleA = (idMigrant: number) => ({
    type: typesMultipleAction.MULTIPLE_A,
    payload: idMigrant
})

export const actionMultipleB = (card: {idMigrant: number, idCard: number}) => ({
    type: typesMultipleAction.MULTIPLE_B,
    payload: card
})

export const actionMultipleC = (id: number, card: {idMigrant: number, idCard: number}) => ({
    type: typesMultipleAction.MULTIPLE_C,
    payload: {id, card}
})

export const actionMultipleD = (id: number) => ({
    type: typesMultipleAction.MULTIPLE_D,
    payload: id
})


