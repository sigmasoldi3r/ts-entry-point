declare const process: any | undefined

/**
 * Internal runtime handler for exit.
 */
function handleExit(err: any) {
  if (process != null) {
    process.exit?.call(process, err?.code ?? -1)
  } else if (document != null) {
    document.dispatchEvent?.call(document, new Event('entry-error'))
  } else {
    console.error(
      `Additionally, could not determine the environment (This process will be unable to exit gracefully or dispatch the error event)`
    )
  }
}

/**
 * Entry point for asyncrhonous methods.
 */
export default function entry(target: any, property?: string) {
  if (property == null) {
    property = 'main'
  }
  const args = process?.argv
  const main = target[property]
  if (typeof main != 'function') {
    console.error('Invalid target', property, 'at', target)
    throw new Error(
      `Unable to find "${property}" function on target ${target}!`
    )
  }
  try {
    const result = main.call(target, args)
    if (result instanceof Promise) {
      result.catch(err => {
        console.error(err)
        handleExit(err)
      })
    }
  } catch (err) {
    console.error(`${property} ended with a synchronous error:`, err)
    handleExit(err)
  }
}
