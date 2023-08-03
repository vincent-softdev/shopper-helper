import './contact_us.css'
import ListServices from './listServices/list_services'
import Members from './members/members'

const ContactUs = () => {
    return (
        <div className="contact-us__container">
            <section className="header">
                <h1>Contact Us</h1>
                <p>Select a service to find helpful tips or to provide feedback to us, chat options, and customer service numbers.</p>
            </section>
            <ListServices />
            <Members />
        </div>
    )
}

export default ContactUs