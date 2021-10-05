import entry from '.'

@entry
export default class Main {
  static main() {
    console.log('Default main')
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
