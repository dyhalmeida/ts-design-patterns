import { Client } from "./class/Client";
import { Email } from "./class/Email";

const client = new Client('any.mail@mail.com')
const email = new Email()
email.sendEmail(client.email)