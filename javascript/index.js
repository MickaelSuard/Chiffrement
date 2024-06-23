function GenerateKeys(nbBit=512) {
    bigInt0 = bigInt(0), bigInt1 = bigInt(1), bigInt2 = bigInt(2),
    bigInt3 = bigInt(3), bigInt5 = bigInt(5), bigInt7 = bigInt(7),
    bigInt10 = bigInt(10), bigInt100000 = bigInt(100000);

    const p = bigInt.randBetween(bigInt2.pow(bigInt(nbBit-1)), bigInt2.pow(bigInt(nbBit)).subtract(bigInt1));
    const q = bigInt.randBetween(bigInt2.pow(bigInt(nbBit-1)), bigInt2.pow(bigInt(nbBit)).subtract(bigInt1));

    document.getElementById('public_key').value = p.toString();
    document.getElementById('private_key').value = q.toString();
}