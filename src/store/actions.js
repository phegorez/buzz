import axiosClient from "../axiosClient";

export function searchedCockTails({ commit }, keyword) {
    axiosClient.get(`search.php?s=${keyword}`)
        .then(({ data }) => {
            commit(`setSearchedCockTails`, data.drinks)
        })
}

export function searchedCockTailsByLetter({ commit }, letter) {
    axiosClient.get(`search.php?f=${letter}`)
        .then(({ data }) => {
            commit(`setCockTailsByLetter`, data.drinks)
        })
}

export function searchedCockTailsByIngredient({ commit }, ingre) {
    axiosClient.get(`search.php?i=${ingre}`)
        .then(({ data }) => {
            commit(`setCockTailsByIngredient`, data.drinks)
        })
}