function manufactureGifts(giftsToProduce) {
    const nuevo = []
    giftsToProduce.forEach(gift => {
        if(gift.quantity >= 0) {
            for (let i = 0; i < gift.quantity; i++) {
                nuevo.push(gift.toy)
            }
        }
    });
    return nuevo
}


function manufactureGifts(giftsToProduce) {
    return giftsToProduce
    .filter(g => g.quantity > 0)
    .flatMap(g => Array(g.quantity).fill(g.toy));
}
