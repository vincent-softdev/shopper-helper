import './header.css'

const Header = () => {
    return (
    <header className="header-container">
        <section>
            <h2>Welcome to Shopping helper</h2>
            <p>We are here to help you save money</p>
            <div>
                <button>Explore our features</button>
            </div>
            <img src='./images/sample_product.jpg' alt=''/>
        </section>
    </header>
    )
}

export default Header;