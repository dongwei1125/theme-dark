import { insertStyleElement } from './utils'
import { cssWrapSelector } from '../../theme.config'

const style = `.el-progress-circle__track{stroke:#ebeef5}${cssWrapSelector} .el-progress-circle__track{stroke:#262727}`

export default Progress => {
  insertStyleElement(style)

  return {
    extends: Progress,
    props: {
      textColor: {
        type: String,
        default: '',
      },
      defineBackColor: {
        type: String,
        default: '',
      },
    },
    computed: {
      trailPathStyle() {
        return {
          strokeDasharray: `${this.perimeter * this.rate}px, ${this.perimeter}px`,
          strokeDashoffset: this.strokeDashoffset,
          stroke: this.defineBackColor,
        }
      },
    },
  }
}
