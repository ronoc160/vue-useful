<template>
  <li>
    <label class="form__control">
      <span class="form__label">{{ label }}</span>
      <div class="form__input-wrap">
        <textarea ref="area" class="form__input" :placeholder="placeholder" :required="required"></textarea>
      </div>
    </label>
  </li>
</template>

<script>
import Simplemde from 'simplemde'

export default {
  props: {
    placeholder: {
      type: String,
      required: false
    },
    label: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  mounted () {
    this.mde = new Simplemde({ element: this.$refs.area })
    this.mde.value(this.value)
    this.mde.codemirror.on('change', () => {
      this.$emit('input', this.mde.value())
    })
  },
  watch: {
    // this would update on every keystroke, so maybe you have to remove it.
    // component should work nonetheless, but if an external source changed the value, it would not reflect in this component.
    value (newVal) {
      this.mde.value(newVal)
    }
  },
  beforeDestroy () {
    this.mde.toTextArea() // clean up when component gets destroyed.
  },
  name: 'input',
  methods: {
    updateModel (value) {
      this.$emit('input', value)
    }
  }
}
</script>
