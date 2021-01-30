export default function Button(props: any) {
    return <button className={props.className} onClick={ props.action ? props.action : null }>{ props.title ? props.title : null }</button>
}