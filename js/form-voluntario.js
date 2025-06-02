const formVoluntario = document.querySelector(
  '#form-voluntario.needs-validation'
)
const cpfField = formVoluntario.querySelector('#cpf')
const telefoneField = formVoluntario.querySelector('#phone')
const btnEnviar = formVoluntario.querySelector('.btn-form-voluntario')

const toastEl = document.getElementById('successToast')
const toast = new bootstrap.Toast(toastEl)

const errors = {}
const errorToastEl = document.getElementById('errorToast')
const errorToast = new bootstrap.Toast(errorToastEl)

formVoluntario.addEventListener('submit', async function (e) {
  e.preventDefault()
  e.stopPropagation()

  formVoluntario.classList.remove('was-validated')
  const formData = new FormData(formVoluntario)
  const data = {}

  formData.forEach((value, key) => {
    if (key === 'cpf') {
      value = limparCPF(value)
    }

    if (key === 'cpf' && limparCPF(value).length !== 11) {
      errors.cpf = {
        field: cpfField,
        message: 'CPF inválido. Deve conter 11 dígitos.',
      }
    }

    if (key === 'phone') {
      value = value.replace(/\D/g, '')
    }

    if (key === 'phone' && value.replace(/\D/g, '').length < 11) {
      errors.telefone = {
        field: telefoneField,
        message: 'Telefone inválido. Deve conter pelo menos 11 dígitos.',
      }
    }

    data[key] = value
  })

  if (!formVoluntario.checkValidity()) {
    formVoluntario.classList.add('was-validated')
    return
  }

  if (Object.values(errors).length > 0) {
    const firstErrorField = Object.values(errors)[0]
    firstErrorField.field.focus()

    Object.values(errors).forEach((input) => {
      input.field.classList.add('is-invalid')
      input.field.setCustomValidity(input.message)
    })

    formVoluntario.classList.add('was-validated')
    return
  }

  btnEnviar.disabled = true
  btnEnviar.textContent = 'Enviando...'

  const isCpfDuplicate = await cpfDuplicado(data.cpf)
  if (isCpfDuplicate) {
    errorToastEl.querySelector('.toast-body').textContent =
      'Já identificamos uma solicitação com esse CPF. Caso tenha alguma dúvida ou precise atualizar suas informações, entre em contato conosco.'
    errorToast.show()
    return
  }

  // Rota de teste: https://httpbin.org/post
  // Trocar pela rota real após o teste
  // "https://sheetdb.io/api/v1/db1c2w33lso24"
  try {
    await fetch('https://sheetdb.io/api/v1/db1c2w33lso24', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome: data.name,
        cpf: data.cpf,
        telefone: data.phone,
        email: data.email,
        mensagem: data.message,
        cidade: data.city,
        ajuda: data['help-type'],
      }),
    })

    toast.show()

    formVoluntario.reset()
    formVoluntario.classList.remove('was-validated')
  } catch (err) {
    errorToast.show()
  }

  btnEnviar.disabled = false
  btnEnviar.textContent = 'Enviar'
})

cpfField.addEventListener('input', function () {
  const cpfValue = limparCPF(cpfField.value)
  if (cpfValue.length === 11) {
    cpfField.setCustomValidity('')
    delete errors.cpf
  } else {
    cpfField.setCustomValidity('CPF inválido. Deve conter 11 dígitos.')
  }
})

telefoneField.addEventListener('input', function () {
  const telefoneValue = telefoneField.value.replace(/\D/g, '')
  if (telefoneValue.length >= 11) {
    telefoneField.setCustomValidity('')
    delete errors.telefone
  } else {
    telefoneField.setCustomValidity(
      'Telefone inválido. Deve conter pelo menos 11 dígitos.'
    )
  }
})

/**
 * @param {string} cpf
 */
function limparCPF(cpf) {
  if (!cpf) return ''
  return cpf.replace(/\D/g, '')
}

async function cpfDuplicado(cpf) {
  const cpfLimpo = limparCPF(cpf)
  const response = await fetch(
    `https://sheetdb.io/api/v1/db1c2w33lso24/search?cpf=${cpfLimpo}`
  )
  const data = await response.json()
  return data.length > 0
}
