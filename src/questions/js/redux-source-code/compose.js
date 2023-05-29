export default function compose(...args) {
  if (!args || args.length === 0) {
    return (arg) => arg
  }

  if (args.length === 1) {
    return args[0]
  }

  return args.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  )
}

// export const createStack = (...middleware) => {
//   if (middleware.length === 0)
//     return emptyStack

//   return middleware.reduceRight(
//     (inner, outer) =>
//       (fetch, outerInput, outerOptions) =>
//         outer(
//           (innerInput, innerOptions) => inner(fetch, innerInput, innerOptions),
//           outerInput,
//           outerOptions
//         )
//   )
// }
