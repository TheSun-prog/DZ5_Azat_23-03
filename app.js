function reverseWord (word) {
    let solution = ''
    let wordLetters = word.split('')
    for (let i = wordLetters.length - 1; i >= 0; i--) {
        solution += wordLetters[i]
    }
    return solution
}


console.log(reverseWord('Hello world'))


function filterBooks(booksName, filter='у') {
    let solution = []
    for (let book of booksName) {
        if (book.includes(filter)) {
            solution.push(book)
        }
    }
    return solution
}


console.log(filterBooks(['NameOfBook', 'Title', 'Something'], 't'))