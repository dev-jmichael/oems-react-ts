export const getAcronym = (text: string) => {
    return text
    // Split the string into words using a regular expression that finds spaces or non-letter characters
    .split(/\s+|[^a-zA-Z]+/)
    // Filter out any empty strings that may result from the split
    .filter(Boolean)
    // Map through each word and return the uppercase letters only
    .map(word => word.match(/[A-Z]/g)?.join('') || '')
    // Join the resulting array of uppercase letters into a string
    .join('');
}