import { InlineCode } from '@/components/InlineCode'

const nodes = {
  // ...
  code: {
    render: InlineCode,
    attributes: {
      content: { type: String },
    }
  }
}

export default nodes