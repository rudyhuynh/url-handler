import {isUrl, isDomainComponent, isLocalhost} from './index'

describe("isLocalhost()", () => {

  test("localhost", () => {
    expect(isLocalhost("localhost")).toBe(true)
  })

  test('localhost:8000', () => {
    expect(isLocalhost("localhost:8000")).toBe(true)
  })

  test("http://localhost", () => {
    expect(isLocalhost("http://localhost")).toBe(true)
  })

  test("https://localhost:8000", () => {
    expect(isLocalhost("https://localhost:8000")).toBe(true)
  })

  test("abc", () => {
    expect(isLocalhost("abc")).toBe(false)
  })
})

describe("isDomainComponent()", () => {
  test("abc", () => {
    expect(isDomainComponent("abc")).toBe(true)
  })
  test("dev 1", () => {
    expect(isDomainComponent("dev 1")).toBe(false)
  })

  test("abc.com", () => {
    expect(isDomainComponent("abc.com")).toBe(false)
  })
})

describe("isUrl()", () => {
  test("IP is full URL", () => {
    const IP = "192.168.2.121"
    expect(isUrl(IP)).toBe(true)
  })

  test("http://abc.com.vn is full URL", () => {
    const input = "http://abc.com.vn"
    expect(isUrl(input)).toBe(true)
  })

  test("abc.com.vn is full URL", () => {
    const input = "abc.com.vn"
    expect(isUrl(input)).toBe(true)
  })

  test("localhost is full URL", () => {
    const input = "localhost"
    expect(isUrl(input)).toBe(true)
  })

  test("localhost:8000 is full URL", () => {
    const input = "localhost:8000"
    expect(isUrl(input)).toBe(true)
  })

  test("'dev 1' is NOT full URL", () => {
    const input = "dev 1"
    expect(isUrl(input)).toBe(false)
  })
})