import { Suspense } from 'react'

export function SuspenseComp(props: {
  Component: React.LazyExoticComponent<() => JSX.Element>
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <props.Component />
    </Suspense>
  )
}
