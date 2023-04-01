export default function createElement(tag, attrs, ...children) {
  const key = attrs && attrs.key
  return {
    tag,
    attrs,
    children,
    key: key || null,
  }
}
