<template>
	<li>
		<label class="form__control">
			<span class="form__label">{{ label }}</span>
			<div class="form__input-wrap">
			  <input  @input="updateModel($event.target.value)"
                :type="type" class="form__input"
                :placeholder="placeholder"
                :required="required">
			</div>
		</label>
	</li>
</template>
<script>
  export default {
    props: {
      value: {
        type: String,
        required: false
      },
      placeholder: {
        type: String,
        required: false
      },
      label: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: false,
        default: 'text'
      },
      required: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    name: 'input',
    methods: {
      updateModel (value) {
        this.$emit('input', value)
      }
    }
  }
</script>
