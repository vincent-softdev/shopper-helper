import membersDetail from '../../../data/data'
import './members.css'
import ProductCard from '../../../common/components/productCard/product_card';

const Members = () => {
    return (
        <section className="members">
            <h1>Our members</h1>
            <div className='members-detail__list'>
                {
                    membersDetail.map((p) => (
                        <div key={p.id} className='member-detail'>
                            <ProductCard type='member' product={p} detail={<></>} extraDetail={<></>}/>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Members