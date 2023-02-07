---
inject: true
to: src/components/index.ts
append: true
skip_if: from './<%= name %>'
sh: yarn eslint <%= cwd %>/src/components/index.ts --fix
---
export type { I<%=name%>Props } from './<%=name%>'
export { <%=name%> } from './<%=name%>'