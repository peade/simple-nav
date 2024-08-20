export function AnchorEle(props: { name: string }) {
  return (
    <div id={props.name} className="leading-12 font-bold">
      {props.name}
    </div>
  )
}
