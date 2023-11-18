import React from 'react'

interface Props {
    data: string;
}

const ScriptTag = (props: Props) => {
  return (
    <script dangerouslySetInnerHTML={{ __html: props.data }} />
  )
}
export default ScriptTag;