import entry from '.'

@entry
export default class Main {
  static readonly prop = 'Hello'
  static main() {
    console.log(`${this.prop} world!`)
  }
  @entry static start() {
    console.log('Custom main')
  }
  @entry static begin() {
    return Promise.reject({
      code: 1,
      message: 'Custom error example',
    })
  }
}
