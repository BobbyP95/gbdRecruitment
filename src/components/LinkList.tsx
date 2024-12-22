
type LinkListProps = {
    links?:{ name: string; href: string }[]

}
export function LinkList({links=[]}:LinkListProps) {
  return (
    <>
        {links.map((obj,index)=>(
          <a key={index} href={obj.href}> obj.name</a>
          ))}
        
    </>
  )
}

