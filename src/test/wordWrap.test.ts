import {wrap} from "../core/wordWrap";

describe('WordWrap test suit', () => {

    // ("", 2) -> ""
    it('empty text', () => {

      expect(wrap("",2)).toBe("")

    })

    // ("a", 2) -> "a"
    it('text shorter than width', () => {

      expect(wrap("a",2)).toBe("a")

    })

    // // ("Hello World", 4) -> "Hello--World"
    // it('text is wider than the number of columns', () => {
    //
    //   expect(wrap("Hello World", 4)).toBe("Hello\nWorld")
    //
    // })

    // ("a longWord", 8) -> "a--longWord"
    it('text is wider than the number of columns', () => {

      expect(wrap("a longWord", 8)).toBe("a\nlongWord")

    })
    // ("longWord", 4) -> "long--Word"
    it('the word is greater than the number of columns and a line break is added', () => {

      expect(wrap("longWord", 4)).toBe("long\nWord")

    })

    // ("supercalifragilisticoespialidoso", 6) -> "superc--alifra--gilist--icoesp--ialido--so"
    it('the word is greater than the number of columns and several line breaks are added', () => {

      expect(wrap("supercalifragilisticoespialidoso", 6)).toBe("superc\nalifra\ngilist\nicoesp\nialido\nso")

    })

    // ("a longWord", 6) -> "a long--Word"

    // ("Un hipopotamo se hizo amigo de un murcielago", 7) -> "Un hipo--potamo--se hizo--amigo--de un--murciel--ago"

    // ("a", -2) -> Throw Exception "width it´s negative"
    // it('throw an error if width it´s negative', () => {
    //
    //   expect(() => wrap("a", -2)).toThrow("width it´s negative")
    //
    // })

    // ("Hello", 0) -> Throw Exception "width cannot be 0"
    // it('throw an error if width cannot be 0', () => {
    //
    //   expect(() => wrap("a", 0)).toThrow("width cannot be 0")
    //
    // })

  })
