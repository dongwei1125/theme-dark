<template>
  <div class="theme-switch" :class="{ checked }" @click.prevent="switchValue">
    <input
      ref="input"
      type="checkbox"
      class="theme-switch__input"
      @change="handleChange"
      @keydown.enter="switchValue"
    />

    <span class="theme-switch__core">
      <div class="theme-switch__action">
        <dark-icon v-if="checked" />

        <light-icon v-else />
      </div>
    </span>
  </div>
</template>

<script>
import DarkIcon from './DarkIcon.vue'
import LightIcon from './LightIcon.vue'

export default {
  name: 'IconSwitch',
  components: { DarkIcon, LightIcon },
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    // eslint-disable-next-line
    beforeChange: {
      type: Function,
    },
  },
  watch: {
    checked: {
      handler() {
        const input = this.$refs.input

        if (input) {
          input.checked = this.checked
        }
      },
      immediate: true,
    },
  },
  methods: {
    switchValue() {
      if (!this.beforeChange) {
        return this.handleChange()
      }

      const shouldChange = this.beforeChange()

      shouldChange.then(result => {
        if (result) {
          this.handleChange()
        }
      })
    },

    handleChange() {
      this.$emit('change', !this.checked)
    },
  },
}
</script>

<style scoped>
.theme-switch {
  display: inline-flex;
  font-size: 14px;
  vertical-align: middle;
}

.theme-switch__input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}

.theme-switch__core {
  height: 20px;
  min-width: 40px;
  border-radius: 10px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  background: #f2f2f2;
  border: 1px solid #dcdfe6;
  transition: border-color 0.3s, background-color 0.3s;
  position: relative;
  cursor: pointer;
}

.theme-switch__input:focus-visible + .theme-switch__core {
  outline: 2px solid #f2f2f2;
  outline-offset: 1px;
}

.theme-switch.checked .theme-switch__input:focus-visible + .theme-switch__core {
  outline-color: #2c2c2c;
}

.theme-switch.checked .theme-switch__core {
  border-color: #4c4d4f;
  background-color: #2c2c2c;
}

.theme-switch__action {
  width: 14px;
  height: 14px;
  border-radius: 100%;
  left: 1px;
  position: absolute;
  display: flex;
  background-color: #fff;
  transition: all 0.3s;
}

.theme-switch.checked .theme-switch__action {
  left: 100%;
  margin-left: -17px;
}
</style>
