export const ObjectLog = ({
  value,
  replacer = null,
  space = 2,
}: {
  value: object
  replacer?: null
  space?: number
}) => (
  <pre>
    <code>{JSON.stringify(value, replacer, space)}</code>
  </pre>
)
