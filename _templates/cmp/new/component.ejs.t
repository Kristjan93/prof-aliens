---
to: src/components/<%=name%>/<%=name%>.tsx
---
export interface I<%=name%>Props {
  title?: string
}
<% if(typeof r != "undefined") { %>
export const <%=name%> = ({ title }: I<%=name%>Props) => {
  return (
    <div>{title}</div>
  )
}
<% } else{ %>
export const <%=name%> = ({ title }: I<%=name%>Props) => (
  <div>{title}</div>
)
<% } %>