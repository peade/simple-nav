export function AnchorEle(props: { name: string }) {
  return (
    <div id={props.name} className="leading-12">
      {props.name}
    </div>
  )
}
