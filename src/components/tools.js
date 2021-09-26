export const preSearch = (tempQuery, allPokemonList) => {
    tempQuery = tempQuery.toLowerCase()
    console.log("presearching for:" + tempQuery)
    var results = [];
    var resultsId = [];
    var resultsName = [];
    for (pokemon in allPokemonList) {
        if (allPokemonList[pokemon].includes(tempQuery)) {
            resultsId.push(pokemon)
            resultsName.push(allPokemonList[pokemon])
            results.push({"id":pokemon, "name":allPokemonList[pokemon]})
        }
    }
    console.log("current result: {");
    console.log("\t "+ JSON.stringify(results));
    console.log("}");

    return results;
    



}

export const search = (query, allPokemonList) => {
    console.log("searching for: " + query)
}