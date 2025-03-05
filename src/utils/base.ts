export function format1k(num) {
  if (num >= 1e12) {
    return Number((num / 1e12).toFixed(1)) + 'T'
  } else if (num >= 1e9) {
    return Number((num / 1e9).toFixed(1)) + 'B'
  } else if (num >= 1e6) {
    return Number((num / 1e6).toFixed(1)) + 'M'
  } else if (num >= 1e3) {
    return Number((num / 1e3).toFixed(1)) + 'K'
  } else {
    return Number(num).toFixed(0)
  }
}

export const toggleElementInArray = (array, element) => {
  const index = array.value.indexOf(element)
  if (index === -1) {
    array.value.push(element) // Add if not exists
  } else {
    array.value.splice(index, 1) // Remove if exists
  }
}
