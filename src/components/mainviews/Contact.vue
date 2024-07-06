
<template>
 <div class="contact is-hidden" ref="contact">
        <h2 class="contact--header">
          Contact
        </h2>
        <p class="contact--subheader">
          Tell me your most niche app idea, what your ideal website looks like,
          or any other projects you need help with.
        </p>
        <form
          class="contact--form"
          action="https://formspree.io/f/xbjnnqdy"
          method="POST"
          target="_blank"
        >
          <div class="contact--form-row">
            <label class="contact--form-label" for="fullname">
              Name:
            </label>
            <input
              class="contact--form-input"
              type="text"
              name="fullname"
              id="fullname"
              required
            />
          </div>
          <div class="contact--form-row">
            <label class="contact--form-label" for="email"
              >Email:</label
            >
            <input
              class="contact--form-input"
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div class="contact--form-row">
          <label class="contact--form-label" for="message">
            Message:
          </label>
          <textarea
            class="contact--form-input"
            name="message"
            placeholder="Enter message here"
            id="textarea"
            required
          ></textarea>
          </div>
          <button
            type="submit"
            class="contact--form-submit btn"
          >
            Submit</button
          ><span
            id="acceptedText"
            class="text-center text-sm text-white"
          ></span>
        </form>
      </div>
</template>

<script lang="ts">
export default {
  emits: [
    "setIsLoading",
  ],
	mounted() {
    this.$nextTick(() => {
			setTimeout(() => {
				this.$emit("setIsLoading", false);
				this.$refs.contact.classList.remove('is-hidden');
			}, 300);
		})
	},
};
</script>

