import { reactive, ref } from 'vue'

/**
 * Composable for managing contact form state and submission
 * Handles form validation, submission, and success messaging
 */
export function useContactForm() {
  // State
  const form = reactive({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const isSubmitting = ref(false)
  const submitted = ref(false)
  const error = ref(null)

  // Constants
  const SUBMISSION_DELAY = 1000 // milliseconds
  const SUCCESS_MESSAGE_DURATION = 3000 // milliseconds

  // Methods
  const isFormValid = () => {
    return (
      form.name.trim().length > 0 &&
      form.email.trim().length > 0 &&
      form.subject.trim().length > 0 &&
      form.message.trim().length > 0
    )
  }

  const resetForm = () => {
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  }

  const clearError = () => {
    error.value = null
  }

  const handleSubmit = async () => {
    clearError()

    if (!isFormValid()) {
      error.value = 'Please fill in all required fields'
      return
    }

    isSubmitting.value = true

    try {
      // Simulate API call - replace with actual submission logic
      await new Promise((resolve) => setTimeout(resolve, SUBMISSION_DELAY))

      // Log for debugging (remove in production)
      console.log('Form submitted:', {
        ...form,
        timestamp: new Date().toISOString()
      })

      // Success state
      submitted.value = true
      resetForm()

      // Auto-hide success message
      setTimeout(() => {
        submitted.value = false
      }, SUCCESS_MESSAGE_DURATION)
    } catch (err) {
      error.value = 'Failed to send message. Please try again.'
      console.error('Form submission error:', err)
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    // State
    form,
    isSubmitting,
    submitted,
    error,
    // Methods
    handleSubmit,
    resetForm,
    clearError,
    isFormValid
  }
}
