import nodemailer from 'nodemailer'

export type EmailPayload = {
  name: FormDataEntryValue
  email: FormDataEntryValue
  message: FormDataEntryValue
}

export const sendEmail = async ({ email, message, name }: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    host: import.meta.env.SMTP_HOST ?? '',
    port: parseInt(import.meta.env.SMTP_PORT ?? ''),
    secure: true,
    auth: {
      user: import.meta.env.SMTP_USER ?? '',
      pass: import.meta.env.SMTP_PASSWORD ?? '',
    },
  })

  const subject = `New message from ${name}`
  const formattedMessage = message.toString().replace(/\n/g, '<br />')
  const html = `<p>${formattedMessage}</p><hr /><p>${name} &lt${email}&gt</p>`

  return await transporter.sendMail({
    from: import.meta.env.SMTP_FROM_EMAIL ?? '',
    to: import.meta.env.SMTP_TO_EMAIL ?? '',
    subject,
    html,
  })
}
