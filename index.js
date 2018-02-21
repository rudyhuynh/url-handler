
const localhostExpr = /^(https?:\/\/)?localhost(:\d*)?$/
/**
 * Test if an input string is a valid localhost URL
 */
export function isLocalhost(input){
  return localhostExpr.test(input)
}

const domainComponentExpr = /^[a-z\d][a-z\d-]*[a-z\d]$/
/**
 * Test if an input string is valid component of a domain name.
 * Example: "dev" is a valid component of domain name "dev.abc.com"
 */
export function isDomainComponent(input){
  return domainComponentExpr.test(input)
}

const urlExpr = new RegExp('^(https?:\\/\\/)?'+ // protocol
'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
'((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
'(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
'(\\#[-a-z\\d_]*)?$','i');  // fragment locator
/**
 * Test if an input string is a valid URL
 */
export function isUrl(input){
  return urlExpr.test(input)
}