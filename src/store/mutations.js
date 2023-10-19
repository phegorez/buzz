export function setSearchedCockTails(state, drinks) {
    state.searchedCockTails = drinks || []
}

export function setCockTailsByLetter(state, drinks) {
    state.cockTailsByLetter = drinks || []
}

export function setCockTailsByIngredient(state, drinks) {
    state.cockTailsByIngredient = drinks || []
}