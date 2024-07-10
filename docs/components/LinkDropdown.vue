<template>
  <el-dropdown class="link-dropdown" trigger="click" @visible-change="visibleChange">
    <button class="hamburger" :class="{ active: visible }">
      <span class="hamburger-1" />
      <span class="hamburger-2" />
      <span class="hamburger-3" />
    </button>

    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>
        <a href="https://github.com/dongwei1125/theme-dark" target="_black" title="GitHub">GitHub</a>
      </el-dropdown-item>
      <el-dropdown-item>
        <a href="https://gitee.com/dongwei1125/theme-dark" target="_black" title="Gitee">Gitee</a>
      </el-dropdown-item>
      <el-dropdown-item>
        <a href="https://www.npmjs.com/package/element-theme-darkplus" target="_black" title="NPM">NPM</a>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'LinkDropdown',
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    visibleChange(visible) {
      this.visible = visible
    },
  },
}
</script>

<style scoped>
.link-dropdown {
  color: inherit;
}

.hamburger {
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  margin: 0;
  border: none;
  color: inherit;
  background: none;
  cursor: pointer;
}

.hamburger span {
  height: 2px;
  margin: 2px 0;
  border-radius: 10px;
  background-color: currentColor;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.hamburger .hamburger-1 {
  width: 50%;
}

.hamburger .hamburger-2 {
  width: 100%;
}

.hamburger .hamburger-3 {
  width: 75%;
}

.hamburger.active .hamburger-1 {
  transform: rotatez(45deg) translate(13px, 0px);
  transform-origin: bottom;
}

.hamburger.active .hamburger-2 {
  transform: rotatez(-45deg);
  transform-origin: top;
}

.hamburger.active .hamburger-3 {
  width: 50%;
  transform: translate(2px, -10px) rotatez(45deg);
  transform-origin: bottom;
}

a {
  padding: 0 20px;
  display: inline-block;
  height: 100%;
  color: inherit;
  text-decoration: none;
}

.el-dropdown-menu__item {
  padding: 0;
}
</style>
