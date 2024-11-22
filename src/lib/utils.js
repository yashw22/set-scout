import { colorElements, colorHexs, defaultColorHex, defaultWeaponIcon, typeElements, weaponElements, weaponIcons } from "./constants"

export const getWeaponDeck = () => {
    const weaponDeck = []
    weaponElements.forEach(weapon => {
        typeElements.forEach(type => {
            colorElements.forEach(color => {
                weaponDeck.push({ weapon: weapon, type: type, color: color, })
            })
        })
    })
    return weaponDeck
}

export const getSearchDeck = () => {
    const searchDeck = []

    searchDeck.push({
        elementsCount: 1,
        free: true
    })
    weaponElements.forEach(weapon => {
        searchDeck.push({ elementsCount: 1, weapon: weapon })
        searchDeck.push({ elementsCount: 2, weapon: weapon, free: true })
    })
    typeElements.forEach(type => {
        searchDeck.push({ elementsCount: 1, type: type })
        searchDeck.push({ elementsCount: 2, type: type, free: true })
    })
    weaponElements.forEach(weapon => {
        typeElements.forEach(type => {
            searchDeck.push({ elementsCount: 2, weapon: weapon, type: type })
        })
    })
    colorElements.forEach(color => {
        searchDeck.push({ elementsCount: 1, color: color })
        searchDeck.push({ elementsCount: 2, color: color, free: true })

        weaponElements.forEach(weapon => {
            searchDeck.push({ elementsCount: 2, weapon: weapon, color: color })
        })
        typeElements.forEach(type => {
            searchDeck.push({ elementsCount: 2, type: type, color: color })
        })
    })


    return searchDeck
}

export const getCardWeaponIcon = (weapon) => {
    return weapon in weaponIcons ? weaponIcons[weapon] : defaultWeaponIcon
}

export const getCardColorHex = (color) => {
    return color in colorHexs ? colorHexs[color] : defaultColorHex
}

export const lightenColor = (color, magnitude) => {
    var hex = getCardColorHex(color)
    hex = hex.replace('#', '');
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    const decimalColor = parseInt(hex, 16);
    let r = (decimalColor >> 16) + magnitude;
    let g = ((decimalColor >> 8) & 0x00FF) + magnitude;
    let b = (decimalColor & 0x0000FF) + magnitude;

    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));

    return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
}

export const getPlayers = () => {
    // return ["P1", "P2", "P3", "P4"]
    return ["Kj", "Mm", "Sj", "Yw"]
}