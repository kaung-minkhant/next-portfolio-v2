export function anim(variants: any, custom?: any) {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants,
    custom
  }
}