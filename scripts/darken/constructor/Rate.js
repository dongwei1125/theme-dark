export default Rate => ({
  extends: Rate,
  props: {
    voidColor: {
      type: String,
      default: '',
    },
    disabledVoidColor: {
      type: String,
      default: '',
    },
    textColor: {
      type: String,
      default: '',
    },
  },
})
