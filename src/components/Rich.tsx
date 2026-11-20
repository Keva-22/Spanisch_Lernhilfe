import { Fragment } from 'react'
import type { Block } from '../content/types.ts'

/** Umbruch nach „/" erlauben (ellos/ellas/ustedes), aber nicht nach führendem Bindestrich (-ar, -é) */
function breakAtSlash(text: string) {
  return text.split('/').map((piece, i) => (
    <Fragment key={i}>
      {i > 0 && (
        <>
          /<wbr />
        </>
      )}
      {piece.replace(/(^|[\s(·,])-(?=\p{L})/gu, '$1\u2011')}
    </Fragment>
  ))
}

/** Inline-Formatierung: **fett**, *kursiv*, ~~falsch~~ */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|~~[^~]+~~)/g)
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{breakAtSlash(part.slice(2, -2))}</strong>
        if (part.startsWith('~~') && part.endsWith('~~')) return <del key={i}>{breakAtSlash(part.slice(2, -2))}</del>
        if (part.length > 2 && part.startsWith('*') && part.endsWith('*'))
          return <em key={i}>{breakAtSlash(part.slice(1, -1))}</em>
        return <Fragment key={i}>{breakAtSlash(part)}</Fragment>
      })}
    </>
  )
}

export function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case 'text':
      return (
        <p>
          <Rich text={block.text} />
        </p>
      )
    case 'table':
      return (
        <div className="table-wrap">
          <table>
            {block.caption && <caption>{block.caption}</caption>}
            <thead>
              <tr>
                {block.head.map((cell, i) => (
                  <th key={i}>
                    <Rich text={cell} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>
                      <Rich text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case 'list':
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>
              <Rich text={item} />
            </li>
          ))}
        </ul>
      )
    case 'checklist':
      return (
        <ol className="checklist">
          {block.items.map((item, i) => (
            <li key={i}>
              <Rich text={item} />
            </li>
          ))}
        </ol>
      )
    case 'tip':
      return (
        <div className="callout callout-tip">
          <span className="callout-icon" aria-hidden="true">💡</span>
          <div>
            <Rich text={block.text} />
          </div>
        </div>
      )
    case 'warning':
      return (
        <div className="callout callout-warning">
          <span className="callout-icon" aria-hidden="true">⚠️</span>
          <div>
            <Rich text={block.text} />
          </div>
        </div>
      )
  }
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => (
        <BlockView key={i} block={block} />
      ))}
    </>
  )
}
