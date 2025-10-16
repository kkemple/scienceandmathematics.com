import { visit } from 'unist-util-visit'

/**
 * Rehype plugin that wraps tables in a scrollable container
 * to enable horizontal scrolling for wide data tables
 */
export default function rehypeTableWrapper() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      // Only process table elements
      if (node.tagName !== 'table') {
        return
      }

      // Must have valid parent and index
      if (!parent || typeof index !== 'number') {
        return
      }

      // Create wrapper div
      const wrapper = {
        type: 'element',
        tagName: 'div',
        properties: {
          className: ['table-container']
        },
        children: [node]
      }

      // Replace table with wrapper containing table
      parent.children[index] = wrapper
    })
  }
}
