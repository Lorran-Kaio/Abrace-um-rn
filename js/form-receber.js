const sendBtn = document.getElementById('sendFormReceber')
const toastEl = document.getElementById('meuToast')

function limparCPF(cpf) {
  return cpf.replace(/[^\d]/g, '')
}

async function cpfDuplicado(cpf) {
  const cpfLimpo = limparCPF(cpf)
  const response = await fetch(
    `https://sheetdb.io/api/v1/j7z1tsiircwdc/search?cpf=${cpfLimpo}`
  )
  const data = await response.json()
  return data.length > 0
}

document
  .getElementById('form-receber')
  .addEventListener('submit', async function (event) {
    event.preventDefault()

    const form = event.target
    const data = {}

    new FormData(form).forEach((value, key) => {
      if (key === 'cpf') {
        value = limparCPF(value)
      }
      data[key] = value
    })

    try {
      sendBtn.disabled = true
      sendBtn.textContent = 'Enviando...'
      const isCpfDuplicate = await cpfDuplicado(data.cpf)

      if (isCpfDuplicate) {
        form.reset()
        alert(
          'Já identificamos uma solicitação com esse CPF. Caso tenha alguma dúvida ou precise atualizar suas informações, entre em contato conosco.'
        ) // Trocar pelo toast se aprovado
        sendBtn.disabled = false
        sendBtn.textContent = 'Enviar'
        return
      }
      const response = await fetch('https://sheetdb.io/api/v1/j7z1tsiircwdc', {
        // const response = await fetch('https://httpbin.org/post', {
        // Rota de teste, trocar pela de cima apos o teste
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        if (!toastEl) {
          console.error('Elemento toast não encontrado no DOM!')
        } else {
          const toast = new bootstrap.Toast(toastEl)
          toast.show()
        }
        form.reset()
        sendBtn.disabled = false
        sendBtn.textContent = 'Enviar'
      } else {
        alert('Erro ao enviar o formulário. Tente novamente.') // Trocar pelo toast se aprovado
        sendBtn.disabled = false
        sendBtn.textContent = 'Enviar'
      }
    } catch (error) {
      console.error('Erro ao enviar:', error)
    }
  })
