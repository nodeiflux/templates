import { dirname } from 'node:path'
import Conf from 'conf'
import { JSONSchemaType } from 'json-schema-typed'

const schema = {
  latestSha: {
    type: JSONSchemaType.String
  }
}

const store = new Conf<{
  latestSha: string
}>({ schema })

export default {
  get latest () {
    return store.get('latestSha')
  },
  set latest (v: string) {
    store.set('latestSha', v)
  },
  get dir () {
    return dirname(store.path)
  }
}
