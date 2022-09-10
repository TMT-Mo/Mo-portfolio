const Container = (props)=>{
    const defaultClass = 'container mx-auto p-4'
    return <div className={`${defaultClass} ${props.className}`}>{props.children}</div>
}

export default Container;