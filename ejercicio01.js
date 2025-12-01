function filterGifts(gifts) {
    return gifts.filter((gift) => { 
        return !gift.includes('#')
    })
}