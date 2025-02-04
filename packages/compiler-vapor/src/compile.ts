import {
  type CodegenResult,
  type CompilerOptions,
  type RootNode,
  parse,
} from '@vue/compiler-dom'
import { isString } from '@vue/shared'
import { transform } from './transform'
import { generate } from './generate'

// code/AST -> IR -> JS codegen
export function compile(
  template: string | RootNode,
  options: CompilerOptions = {},
): CodegenResult {
  const ast = isString(template) ? parse(template, options) : template
  const ir = transform(ast, options)
  return generate(ir, options)
}
